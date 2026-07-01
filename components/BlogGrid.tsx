import Image from "next/image";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

type BlogCard = {
  id: number;
  title: string;
  excerpt: string;
  imageSrc: string;
};

const blogCards: BlogCard[] = [
  {
    id: 1,
    title: "How To Prepare Your Manuscript For Publication",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Self-Publishing Vs Traditional Publishing: Which Is Right For You?",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "The Complete Guide To Book Cover Design",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Common Mistakes First-Time Authors Make",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "How Professional Editing Improves Your Book",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Building Your Author Brand In The Digital Age",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Effective Book Marketing Strategies For New Authors",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "The Publishing Process Explained Step By Step",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "Must-Choose The Right Genre For Your Book",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
  },
];

const BlogGrid = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="project-h2 block w-full max-w-full text-center">
          Our Latest Blogs
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {blogCards.map((blog) => (
            <article
              key={blog.id}
              className="overflow-hidden rounded-[16px] border border-[#ececec] bg-white"
            >
              <div className="relative aspect-[1.58] overflow-hidden rounded-t-[16px] bg-[#f4f4f4]">
                <Image
                  src={blog.imageSrc}
                  alt={blog.title}
                  fill
                  unoptimized
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="px-[18px] pb-[20px] pt-[16px]">
                <h3 className="text-lg font-normal leading-[1.35] tracking-[-0.03em] text-[#373737] sm:text-xl">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.65] text-[#8b8b8b]">
                  {blog.excerpt}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-normal text-[#e96d2d] sm:text-base"
                >
                  Learn More
                  <SlArrowRight size={11} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
