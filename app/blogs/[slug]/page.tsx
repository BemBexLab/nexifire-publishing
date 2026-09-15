import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";
import { createPageMetadata } from "@/lib/seo";

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

  if (!post) {
    notFound();
  }

  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="NexiFire Publishing Blog"
        title={post.title}
        description={post.description}
      />

      <article className="mx-auto max-w-[980px] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="relative aspect-[1.9] overflow-hidden rounded-[18px] bg-[#f4f4f4]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            unoptimized
            sizes="(max-width: 1023px) 100vw, 980px"
            className="object-cover"
          />
        </div>

        <p className="mt-5 italic text-sm text-[#8b8b8b] sm:text-base">
          {/* By NexiFire Publishing Team | {post.publishedAt} */}
          By NexiFire Publishing Team | 8 min Read
        </p>

        <div className="mt-7 space-y-10">
          {post.content.map((section, sectionIndex) => (
            <section
              key={`${section.heading ?? "introduction"}-${sectionIndex}`}
            >
              {section.heading && (
                <h2 className="text-2xl font-medium leading-[1.15] tracking-[-0.035em] text-[#282828] sm:text-3xl">
                  {section.heading}
                </h2>
              )}

              <div className="space-y-5 text-base leading-[1.8] text-[#555555] sm:text-lg">
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
    </section>
  );
}
