import type { WhoWeServeProps } from "@/components/WhoWeServe";

export const defaultWhoWeServeData: WhoWeServeProps = {
  badgeText: "Who We Serve",
  title: "Authors We Support",
  description:
    "We proudly work with authors across a wide range of genres, including:",
  stats: [
    { value: "7+", label: "Years of experience", highlighted: true },
    { value: "130+", label: "Professional ghostwriters" },
    { value: "5K+", label: "Happy Clients" },
    { value: "2K+", label: "Books Published", highlighted: true },
  ],
  genres: [
    "Fiction",
    "Non-Fiction",
    "Business",
    "Self-Help",
    "Memoirs",
    "Children's Books",
    "Poetry",
    "Educational Books",
    "Inspirational Titles",
    "Leadership & Personal Development",
  ],
};
