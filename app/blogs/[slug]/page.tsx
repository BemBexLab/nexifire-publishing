import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";
import { createPageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return createPageMetadata({
      title: "Blog Post Not Found",
      description: "The requested NexiFire Publishing blog post could not be found.",
      path: `/blogs/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blogs/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const publishedAt = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headlineBlock}>
          <p className={styles.kicker}>Ideas for the independent author</p>
          <h1>{post.title}</h1>
          <p className={styles.dek}>{post.description}</p>
          <div className={styles.byline}>
            <span className={styles.authorMark} aria-hidden="true">NF</span>
            <span className={styles.author}>NexiFire Publishing Team</span>
            <span className={styles.bylineDivider} aria-hidden="true" />
            <time dateTime={post.publishedAt}>{publishedAt}</time>
          </div>
        </div>
      </header>

      <figure className={styles.cover}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          unoptimized
          preload
          sizes="(max-width: 1400px) 100vw, 1400px"
          className={styles.coverImage}
        />
      </figure>

      <article className={styles.article}>
        <aside className={styles.articleRail} aria-label="Article details">
          <span className={styles.railLabel}>From the journal</span>
          <span className={styles.railRule} aria-hidden="true" />
          <span className={styles.railDate}>{publishedAt}</span>
          <Link href="/blogs" className={styles.railLink}>
            More stories <span aria-hidden="true">↗</span>
          </Link>
        </aside>

        <div className={styles.articleBody}>
          {post.content.map((section, sectionIndex) => (
            <section
              key={`${section.heading ?? "introduction"}-${sectionIndex}`}
              className={styles.section}
            >
              {section.heading && (
                <h2>
                  <span className={styles.sectionNumber} aria-hidden="true">
                    {String(sectionIndex).padStart(2, "0")}
                  </span>
                  {section.heading}
                </h2>
              )}

              <div className={styles.prose}>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <div key={`${sectionIndex}-${paragraphIndex}`}>
                    {paragraph}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
