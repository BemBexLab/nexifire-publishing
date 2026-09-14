"use client";

import { type FormEvent, useState } from "react";
import { submitContactForm } from "@/components/contactFormSubmit";
import Swal from "sweetalert2";

export function useContactForm(source: string, onSuccess?: () => void) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    const result = await submitContactForm(event.currentTarget, source);

    if (result.ok) {
      setSubmitStatus("success");
      setSubmitMessage("Thanks. Your message has been sent.");
      void Swal.fire({
        icon: "success",
        title: "Submission Successfull",
        text: "Your message has been sent successfully.",
        buttonsStyling: false,
        customClass: {
          container: "nexifire-alert-container",
          popup: "nexifire-alert",
          title: "nexifire-alert-title",
          htmlContainer: "nexifire-alert-text",
          confirmButton: "nexifire-alert-button",
        },
      });
      onSuccess?.();
    } else {
      setSubmitStatus("error");
      setSubmitMessage(result.error);
      void Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: result.error,
        buttonsStyling: false,
        customClass: {
          container: "nexifire-alert-container",
          popup: "nexifire-alert",
          title: "nexifire-alert-title",
          htmlContainer: "nexifire-alert-text",
          confirmButton: "nexifire-alert-button",
        },
      });
    }

    setIsSubmitting(false);
  };

  return {
    handleSubmit,
    isSubmitting,
    submitMessage,
    submitStatus,
  };
}
