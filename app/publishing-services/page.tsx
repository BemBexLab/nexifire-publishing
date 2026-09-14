import React from 'react'
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Book Publishing Services",
  description:
    "Explore NexiFire Publishing services for editing, ghostwriting, book production, cover design, audiobook creation, marketing, and distribution.",
  path: "/publishing-services",
});

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
