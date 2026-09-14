import nodemailer from "nodemailer";

export const runtime = "nodejs";

const DEFAULT_SMTP_HOST = "s12073.usc1.stableserver.net";
const DEFAULT_SMTP_PORT = 465;
const DEFAULT_SMTP_USER = "contact@nexifirepublishing.com";
const DEFAULT_RECIPIENT = "contact@nexifirepublishing.com";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  countryCode?: unknown;
  phone?: unknown;
  message?: unknown;
  source?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getTransporter() {
  const password = process.env.SMTP_PASSWORD;

  if (!password) {
    throw new Error("SMTP_PASSWORD is not configured.");
  }

  const port = Number(process.env.SMTP_PORT ?? DEFAULT_SMTP_PORT);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? DEFAULT_SMTP_HOST,
    port: Number.isFinite(port) ? port : DEFAULT_SMTP_PORT,
    secure: (process.env.SMTP_SECURE ?? "true") === "true",
    auth: {
      user: process.env.SMTP_USER ?? DEFAULT_SMTP_USER,
      pass: password,
    },
  });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email);
  const countryCode = asTrimmedString(payload.countryCode);
  const phone = asTrimmedString(payload.phone);
  const message = asTrimmedString(payload.message);
  const source = asTrimmedString(payload.source) || "Website contact form";

  if (!name || !email || !phone || !message) {
    return Response.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (name.length > 120 || email.length > 254 || phone.length > 60 || message.length > 5000) {
    return Response.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const fullPhone = [countryCode, phone].filter(Boolean).join(" ");
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(fullPhone || phone);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const safeSource = escapeHtml(source);

  try {
    await getTransporter().sendMail({
      from: process.env.SMTP_FROM ?? DEFAULT_SMTP_USER,
      to: process.env.CONTACT_EMAIL_TO ?? DEFAULT_RECIPIENT,
      replyTo: email,
      subject: "New contact form submission",
      text: [
        `Source: ${source}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${fullPhone || phone}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Source:</strong> ${safeSource}</p>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Unable to send contact form email", error);
    return Response.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
