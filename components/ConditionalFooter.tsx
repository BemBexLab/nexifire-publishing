"use client";

import { usePathname } from "next/navigation";

import Footer from "./Footer";

// const routesWithPageFooter = new Set([
//   "/publishing-services/book-marketing",
//   "/publishing-services/book-cover-design",
// ]);

const ConditionalFooter = () => {
  const pathname = usePathname().replace(/\/$/, "") || "/";

  // if (routesWithPageFooter.has(pathname)) {
  //   return null;
  // }

  return <Footer />;
};

export default ConditionalFooter;
