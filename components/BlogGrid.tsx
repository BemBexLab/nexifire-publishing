import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { blogPosts } from "@/data/blogs";

const BlogGrid = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="project-h2 block w-full max-w-full text-center">
          Our Latest Blogs
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {blogPosts.map((blog) => (
            <article
              key={blog.id}
              className="overflow-hidden rounded-[16px] border border-[#ececec] bg-white"
            >
              <div className="relative aspect-[1.58] overflow-hidden rounded-t-[16px] bg-[#f4f4f4]">
                <Image
                  src={blog.image}
                  alt={blog.cardTitle ?? blog.title}
                  fill
                  unoptimized
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="px-[18px] pb-[20px] pt-[16px]">
                <h3 className="text-lg font-normal leading-[1.35] tracking-[-0.03em] text-[#373737] sm:text-xl">
                  {blog.cardTitle ?? blog.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.65] text-[#8b8b8b]">
                  {blog.description}
                </p>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-normal text-[#e96d2d] sm:text-base"
                >
                  Learn More
                  <SlArrowRight size={11} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
