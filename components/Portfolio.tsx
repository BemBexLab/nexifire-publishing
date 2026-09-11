"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, type Variants } from "motion/react";
import TextFluxUnveil from "./TextFluxUnveil";

const portfolioItems = [
  {
    title:
      "BE POSITIVE!: Choosing Joy, Faith, and Resilience No Matter What Life Sends Your Way",
    author: "VERONICA NASH “Pooh”",
    imageSrc: "https://m.media-amazon.com/images/I/51T8JE34b4L._SY522_.jpg",

    amazonHref: "https://a.co/d/0eMh9NpH",
  },
  {
    title: "THE BURIED TRUTH",
    author: "SCOTT J. MILLER",
    imageSrc: "https://m.media-amazon.com/images/I/710RLphkgrL._SY466_.jpg",

    amazonHref: "https://a.co/d/08rleSkd",
  },
  {
    title: "WHAT THE HELL IS WRONG WITH MY DOG?: YOU ARE WHAT'S WRONG!",
    author: "ALISA PETERSON-WHITE",
    imageSrc: "https://m.media-amazon.com/images/I/71bjP13zCkL._SY466_.jpg",

    amazonHref: "https://a.co/d/0iPTgRoJ",
  },
  {
    title: "Talon: The Great Dragonfly",
    author: " John C Blackford",
    imageSrc: "https://m.media-amazon.com/images/I/71RQJxojWjL._SY466_.jpg",

    amazonHref: "https://a.co/d/02RD5Tsi",
  },
  {
    title: "THE VSO PLAYBOOK: Volume 1",
    author: " Pamela K. Robertson",
    imageSrc: "https://m.media-amazon.com/images/I/51RdielPYYL._SY385_.jpg",

    amazonHref: "https://a.co/d/020nlti6",
  },
  {
    title: "THE VSO PLAYBOOK: Volume 2",
    author: " Pamela K. Robertson",
    imageSrc: "https://m.media-amazon.com/images/I/61LS5RFstNL._SY385_.jpg",

    amazonHref: "https://a.co/d/05ws6l7C",
  },
  {
    title: "THE VSO PLAYBOOK: Volume 3",
    author: "Pamela K. Robertson",
    imageSrc: "https://m.media-amazon.com/images/I/61HXJmvohaL._SY385_.jpg",

    amazonHref: "https://a.co/d/0jkmTgSl",
  },
  {
    title:
      "Returning to the Prayer of Jabez & God Answered: A Spiritual Journey Through Scripture",
    author: " Benjamin Harrison Bennett Jr",
    imageSrc: "https://m.media-amazon.com/images/I/71vn8t9NJPL._SY466_.jpg",

    amazonHref: "https://a.co/d/0iNubjwn",
  },
  {
    title: "The Messages of Faith and The Love of God: From Our Blessed Mother",
    author: " J. Bernard Reyes",
    imageSrc: "https://m.media-amazon.com/images/I/61frnxUrH6L._SY522_.jpg",

    amazonHref: "https://a.co/d/0cSyfyU1",
  },
  {
    title: "DON'T CUT the GRASS on Sunday",
    author: "K.Stephen Jumper",
    imageSrc: "https://m.media-amazon.com/images/I/71ia4fQ4a3L._SL1499_.jpg",

    amazonHref: "https://a.co/d/0ee4hTIt",
  },
  {
    title:
      "HIP HOP HERMENEUTICS: A TOOL TO HELP THE BLACK CHURCH RECAPTURE AFRICAN AMERICAN YOUTH",
    author: " DR. BURTON LEROY MACK",
    imageSrc: "https://m.media-amazon.com/images/I/61PX0O8kpCL._SY466_.jpg",

    amazonHref: "https://a.co/d/0gR8fCxy",
  },
  {
    title: "A LIFERAFT for The SUDDENLY SINGLE PARENT",
    author: "SHARON YODER",
    imageSrc: "https://m.media-amazon.com/images/I/810D2faZOoL._SY385_.jpg",

    amazonHref: "https://a.co/d/0hPrYFXh",
  },
  {
    title: "On Lightness and Being: Becoming Human: Learning to See",
    author: "Carron Hairabedian",
    imageSrc: "https://m.media-amazon.com/images/I/61bey9pTYEL._SY522_.jpg",

    amazonHref: "https://a.co/d/0eVNdG2M",
  },
  {
    title: "On Lightness and Being: Love, Loss, and Letting Go",
    author: "Carron Hairabedian",
    imageSrc: "https://m.media-amazon.com/images/I/71pNKStRVhL._SY425_.jpg",

    amazonHref: "https://a.co/d/01p7ZBw8",
  },
  {
    title: "On Lightness and Being: Becoming Whole: Healing, Wisdom, and Peace",
    author: "Carron Hairabedian",
    imageSrc: "https://m.media-amazon.com/images/I/61IQQ3DHzxL._SY522_.jpg",

    amazonHref: "https://a.co/d/01eDTdbD",
  },
  {
    title: "The Bee's Colony, The Rise of the New Queen",
    author: "Joel B.Gindo",
    imageSrc: "https://m.media-amazon.com/images/I/41q8C4eBeoL._SY445_SX342_FMwebp_.jpg",

    amazonHref: "https://a.co/d/03dFgTaS",
  },
  {
    title: "Tales of the Hippie Dippie Gardener",
    author: "Jim Fritz",
    imageSrc: "https://m.media-amazon.com/images/I/41qpNvU5baL._SY445_SX342_QL70_FMwebp_.jpg",

    amazonHref: "https://a.co/d/01RL87Q4",
  },
  {
    title: "God Carried Me: A Testament to Faith Through Life's Storms",
    author: "Bertha Stumon",
    imageSrc: "https://m.media-amazon.com/images/I/61SwnA42oIL._SY466_.jpg",

    amazonHref: "https://a.co/d/084ustJB",
  },
  {
    title: "THE LABYRINTH",
    author: "Keith Cuvo",
    imageSrc: "https://m.media-amazon.com/images/I/613v0rxTVpL._SY466_.jpg",

    amazonHref: "https://a.co/d/0fpe2YQe",
  },
  {
    title: "THE TIME CAPSULE MYSTERY",
    author: "Jenny Lynn",
    imageSrc: "https://m.media-amazon.com/images/I/613ypngHL7L._SY466_.jpg",

    amazonHref: "https://a.co/d/0eaNfhXz",
  },
  {
    title: "LAFLAPS: Living A Fruitful Life After Prison System",
    author: "Gary Alan Early",
    imageSrc: "https://m.media-amazon.com/images/I/71juM83U+cL._SY466_.jpg",

    amazonHref: "https://a.co/d/0gZbtRPp",
  },
  {
    title: "THROUGH THE EYE OF THE STORM",
    author: "Andre Goldson",
    imageSrc: "https://m.media-amazon.com/images/I/61HZcMSR5EL._SY522_.jpg",

    amazonHref: "https://a.co/d/0ciIvs0L",
  },
  {
    title: "FRESH PATHS UNFOLDING: VERA’S JOURNEY CONTINUES",
    author: "Sara Tessier",
    imageSrc: "https://m.media-amazon.com/images/I/41hiD1dnPwL._SY445_SX342_QL70_FMwebp_.jpg",

    amazonHref: "https://a.co/d/0h3gl6A6",
  },
  {
    title: "Forged in the Mountains: A Family's Resilience",
    author: "Wilma Gibson Smith",
    imageSrc: "https://m.media-amazon.com/images/I/71+QHcaqVKL._SY466_.jpg",

    amazonHref: "https://a.co/d/02fR7S9m",
  },
  {
    title:
      "Discovering the Root Causes of Cancer: A Journey of Self-Discovery",
    author: "Valerie B. Irons",
    imageSrc: "https://m.media-amazon.com/images/I/71Dtq5IS8ZL._SY385_.jpg",

    amazonHref: "https://a.co/d/0eB0OwID",
  },
  {
    title: "Dreams from my Grandfather: An International Inheritance",
    author: "A. D. Bradley",
    imageSrc: "https://m.media-amazon.com/images/I/71bPwpz8H3L._SY425_.jpg",

    amazonHref: "https://a.co/d/0ie4oXLR",
  },
  {
    title: "THE BOOK OF UNFOLDING INTEGRATION",
    author: "Anthony Deans",
    imageSrc: "https://m.media-amazon.com/images/I/61k9Mvcj71L._SY466_.jpg",

    amazonHref: "https://a.co/d/01TnBqeA",
  },
  {
    title: "BROKEN DREAMS: A Journey Through the Trials and Tribulations of the Texas Gulf Coast",
    author: "Bobby Bee",
    imageSrc: "https://m.media-amazon.com/images/I/71I8zG+CARL._SY466_.jpg",

    amazonHref: "https://a.co/d/07omlcAE",
  },
  {
    title: "The Bounce Back: A Journey of Survival, Identity, and Resilience",
    author: "Craig Powell",
    imageSrc: "https://m.media-amazon.com/images/I/61+6CDkYLuL._SY522_.jpg",

    amazonHref: "https://a.co/d/077L9M4Y",
  },
  {
    title: "IT WAS NOT YOUR FAULT: BREAKING THE SILENCE ON MALE SEXUAL ABUSE AND FINDING HEALING THROUGH FAITH",
    author: "Jerry L. Morgan",
    imageSrc: "https://m.media-amazon.com/images/I/51IdDAJKOvL._SY466_.jpg",

    amazonHref: "https://a.co/d/00INdTu4",
  },
  {
    title: "The Adventure Of Scott And Lenny: Learn How To Fly",
    author: "Leonard Serratore",
    imageSrc: "https://m.media-amazon.com/images/I/61KHsUOqXwL._SY522_.jpg",

    amazonHref: "https://a.co/d/04i1QzPC",
  },
  {
    title: "Proverbial Spirits : Spiritual messages A medium told me to find the Philosopher's stone. I did just that.",
    author: "Ray Kaczar",
    imageSrc: "https://m.media-amazon.com/images/I/814tG0xPcUL._SY425_.jpg",

    amazonHref: "https://a.co/d/0eTrzJDj",
  },
  {
    title: "Leading With Purpose: A Leadership Framework For Non-Native School Leaders Serving in Predominately Native Schools",
    author: "Dr. Ralph M. Watkins Ph.D.",
    imageSrc: "https://m.media-amazon.com/images/I/51WzU0zNfwL._SY466_.jpg",

    amazonHref: "https://a.co/d/02Ghlu41",
  },
  {
    title: "JETHRO & KASHU & Friends: Plant a Forest",
    author: "Sara Tessier",
    imageSrc: "https://m.media-amazon.com/images/I/614zsxPblEL._SY522_.jpg",

    amazonHref: "https://a.co/d/0dowUcE8",
  },
  {
    title: "Kael and the Whale with the Polka-Dot Tail",
    author: "Scott Frank",
    imageSrc: "https://m.media-amazon.com/images/I/81rJAyRvPgL._SY342_.jpg",

    amazonHref: "https://a.co/d/0aj4vVbz",
  },
  {
    title: "THE ARCHIVE OF A. D. BRADLEY: Summer in Rome (2005)",
    author: "A. D. BRADLEY",
    imageSrc: "https://m.media-amazon.com/images/I/816xIM3kXML._SX445_.jpg",

    amazonHref: "https://a.co/d/0iMWfNUy",
  },
  {
    title: "Mr. Mogley Muck: The House Mouse",
    author: "Janice Balo",
    imageSrc: "https://m.media-amazon.com/images/I/71Io4cttdDL._SY342_.jpg",

    amazonHref: "https://a.co/d/0aF4lnuo",
  },
  {
    title: "The Man of Light, and the Man of Dark: A Journey Through Poetry",
    author: "Mike The Voice",
    imageSrc: "https://m.media-amazon.com/images/I/61BDjfG7tmL._SY466_.jpg",

    amazonHref: "https://a.co/d/014CkQCA",
  },
  {
    title: "Faith Over Feelings: Discovering Purpose in Your Hardest Places",
    author: "Peter E. Martins",
    imageSrc: "https://m.media-amazon.com/images/I/81Dn+Smkv5L._SY466_.jpg",

    amazonHref: "https://a.co/d/0iz5TW4E",
  },
  {
    title: "STILL I RISE: The Life of Rachel",
    author: "Rachel Anderson",
    imageSrc: "https://m.media-amazon.com/images/I/61lOw6kwfJL._SY466_.jpg",

    amazonHref: "https://a.co/d/09xqIhbN",
  },
  {
    title: "BEFORE ONE GOD: The Ancient Gods Behind the Biblical Tradition",
    author: "ROB CLIFF LOWE",
    imageSrc: "https://m.media-amazon.com/images/I/61cWQbQ9WQL._SY522_.jpg",

    amazonHref: "https://a.co/d/04YBpyNT",
  },
  {
    title: "RHYME WITH REASON",
    author: " Gene Van Alstyne",
    imageSrc: "https://m.media-amazon.com/images/I/61XNBRiq1DL._SY466_.jpg",

    amazonHref: "https://a.co/d/0bVw3K7a",
  },
  {
    title: "The Adventures of Jenny: Not What We Expected",
    author: " John H Lake",
    imageSrc: "https://m.media-amazon.com/images/I/71NrTA8TnrL._SY466_.jpg",

    amazonHref: "https://a.co/d/025Z9puW",
  },
  {
    title: "ASHES OF THE OBSIDIAN SHORE",
    author: "Roger Dale Faubush II",
    imageSrc: "https://m.media-amazon.com/images/I/71scCT35IyL._SY466_.jpg",

    amazonHref: "https://a.co/d/06XrCqUG",
  },
  {
    title:
      "SCORCHING WINGS OF AN EMPTY NESTER: An empty nester adventure that I wasn't ready for",
    author: "KEN NOBLE",
    imageSrc: "https://m.media-amazon.com/images/I/71lfsR4AbhL._SY466_.jpg",

    amazonHref: "https://a.co/d/0jdoebVy",
  },
  {
    title:
      "The Keeper of Tears: A Tale of Lost Rain, Brave Hearts, and the Power of Tears",
    author: "John C Blackford",
    imageSrc: "https://m.media-amazon.com/images/I/71KObra5lZL._SY466_.jpg",

    amazonHref: "https://a.co/d/098t5Wdp",
  },
  {
    title: "Drawn 2 Danger: A Memoir of Duty, Danger, and DisimageSrcy",
    author: "J P Sexton",
    imageSrc: "https://m.media-amazon.com/images/I/71EjxGKCmEL._SY466_.jpg",

    amazonHref: "https://a.co/d/01Bs2kl9",
  },
  {
    title: "THE PUBLICAN",
    author: "David Nava Monreal",
    imageSrc: "https://m.media-amazon.com/images/I/61xM8pwkQkL._SY466_.jpg",

    amazonHref: "https://a.co/d/01SaWxIa",
  },
  {
    title: "OLD LORE & BONES: Poems, Ballads & Adventures of the Sea",
    author: " UNCLE SCOTTY",
    imageSrc: "https://m.media-amazon.com/images/I/717h0aKKWJL._SY466_.jpg",

    amazonHref: "https://a.co/d/0hEL6zyk",
  },
  {
    title: "The Table: Conversations Across Time",
    author: " Dr. Carl L. Young PhD",
    imageSrc: "https://m.media-amazon.com/images/I/61ANOQzt8vL._SY522_.jpg",

    amazonHref: "https://a.co/d/0hvI02XW",
  },
  {
    title: "Healing Your Heart: Understanding the Root Causes of Breast Cancer",
    author: " Valerie B. Irons",
    imageSrc: "https://m.media-amazon.com/images/I/71uF6YRwfhL._SY385_.jpg",

    amazonHref: "https://a.co/d/0iPpg8TL",
  },
  {
    title: "JAMIE, HATTIE & JACKIE and the Otherworldly Friends",
    author: "Ankit Arora",
    imageSrc: "https://m.media-amazon.com/images/I/71iHOyp46zL._SY466_.jpg",

    amazonHref: "https://a.co/d/08g4V2iB",
  },
  {
    title: "IMPULSE: A Story About Loss, Love, and Life Lessons",
    author: " Dr. Sandra Dennis",
    imageSrc: "https://m.media-amazon.com/images/I/61VoKsdSsnL._SY522_.jpg",

    amazonHref: "https://a.co/d/0eDuDm9p",
  },

  {
    title: "A View from the Palace",
    author: " Robbie Munn Bayler",
    imageSrc: "https://m.media-amazon.com/images/I/81t9ZodeQ-L._SY385_.jpg",

    amazonHref: "https://a.co/d/05xtglqn",
  },
  {
    title: "CROWNED in SILENCE",
    author: " Toya Bounds",
    imageSrc: "https://m.media-amazon.com/images/I/61u5a1G4OrL._SY522_.jpg",

    amazonHref: "https://a.co/d/02a32XsM",
  },
  {
    title: "DECEIVED WOMAN",
    author: "LUZ ARDELYS DÍAZ PERALTA",
    imageSrc: "https://m.media-amazon.com/images/I/61cdChR7i2L._SY522_.jpg",

    amazonHref: "https://a.co/d/00S0v12I",
  },
  {
    title: "MUJER ENGAÑADA (Spanish Edition)",
    author: "LUZ ARDELYS DÍAZ PERALTA",
    imageSrc: "https://m.media-amazon.com/images/I/610582YMoxL._SY522_.jpg",

    amazonHref: "https://a.co/d/02b8lhUI",
  },
  {
    title:
      "Can I Survive Widowhood: The struggle With Grief, Shock, and Reestablishing a New Life",
    author: " Robbie Munn Bayler",
    imageSrc: "https://m.media-amazon.com/images/I/81FAqqLB3YL._SY466_.jpg",

    amazonHref: "https://a.co/d/00AOB2Hr",
  },
  {
    title: "LAFLAPS: THE BON VOYAGE",
    author: "Gary Alan Early",
    imageSrc: "https://m.media-amazon.com/images/I/61Kd4YLH0CL._SY522_.jpg",

    amazonHref: "https://a.co/d/01vp7Adj",
  },
  {
    title: "Preston",
    author: "David Bales",
    imageSrc: "https://m.media-amazon.com/images/I/81GQhuLY7RL._SY466_.jpg",

    amazonHref: "https://a.co/d/0eR3izAk",
  },
  {
    title: "The Little Butterfly Girl: Revised Tenth Anniversary Edition",
    author: "Brooke Brown",
    imageSrc: "https://m.media-amazon.com/images/I/61ZmECNYshL._SY522_.jpg",

    amazonHref: "https://a.co/d/0j3UkTFL",
  },

  {
    title: "Growing Together: A Christian mother and daughter journal",
    author: "Allison Sullins",
    imageSrc: "https://m.media-amazon.com/images/I/714wiOGioqL._SY466_.jpg",

    amazonHref: "https://a.co/d/0h1r5jAM",
  },
  {
    title: "MY BUG BOOK",
    author: "Wanda Jenkins Smith",
    imageSrc: "https://m.media-amazon.com/images/I/514s7yxj1FL._SY342_.jpg",

    amazonHref: "https://a.co/d/09kbk7rw",
  },
  {
    title: "IF I HAD A COW",
    author: "Wanda Jenkins Smith",
    imageSrc: "https://m.media-amazon.com/images/I/51iOyU37yKL._SY342_.jpg",

    amazonHref: "https://a.co/d/05OKpCCe",
  },
  {
    title: "A SNOWY DAY",
    author: " Wanda Jenkins-smith",
    imageSrc: "https://m.media-amazon.com/images/I/61nGY2mBArL._SY522_.jpg",

    amazonHref: "https://a.co/d/07RInouK",
  },
  {
    title: "THE STORMY NIGHT",
    author: "Wanda Jenkins-Smith",
    imageSrc: "https://m.media-amazon.com/images/I/61tou7wZZJL._SY522_.jpg",

    amazonHref: "https://a.co/d/01HxUOni",
  },
  {
    title: "Monkey Feet",
    author: "Wanda Jenkins-Smith",
    imageSrc: "https://m.media-amazon.com/images/I/61jaDj6bQAL._SY522_.jpg",

    amazonHref: "https://a.co/d/03HzI9Bp",
  },
  {
    title:
      "El Color del Renacer: Memorias de Fe, Tierra y Renacimiento (Spanish Edition)",
    author: "Luz Diaz",
    imageSrc: "https://m.media-amazon.com/images/I/51kKrXJP3ZL._SY522_.jpg",

    amazonHref: "https://a.co/d/080ryfQM",
  },
  {
    title: "THE COLOR OF REBIRTH: Memoirs of Faith, Land, and Renewal",
    author: "Luz Diaz",
    imageSrc: "https://m.media-amazon.com/images/I/51EBMyMqVsL._SY522_.jpg",

    amazonHref: "https://a.co/d/0427EwRh",
  },
];

const PortfolioGlow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="388"
    height="424"
    viewBox="0 0 388 424"
    fill="none"
    className="h-auto w-full"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <path
      opacity="0.1"
      d="M6.86328 393.263C27.0723 403.012 45.3699 412.887 61.7402 423.015H56.8574C35.2702 423.015 16.4919 410.985 6.86328 393.263ZM0 262.92C10.4144 270.35 22.1939 276.703 35.4824 281.753C119.726 313.766 183.189 345.212 225.263 380.801C241.141 394.232 253.932 408.216 263.636 423.015H182.057C177.815 418.862 173.314 414.775 168.554 410.749C129.569 377.773 73.049 348.587 0 319.542V262.92ZM0 135.753C13.8112 183.858 42.8805 225.406 96.4824 245.774C180.726 277.787 244.189 309.235 286.263 344.823C314.142 368.406 332.505 393.688 341.346 422.101C338.036 422.7 334.626 423.015 331.143 423.015H272.136C261.675 405.866 247.436 389.896 229.554 374.771C186.534 338.381 122.16 306.608 37.7861 274.546C23.4147 269.085 10.884 262.034 0 253.688V135.753ZM0 327.67C71.6484 356.306 126.549 384.878 164.263 416.779C166.703 418.844 169.069 420.923 171.364 423.015H75.5947C54.5748 409.166 30.1783 395.881 2.49023 382.848C0.872074 377.57 1.67507e-05 371.966 0 366.158V327.67ZM50.8896 0.30957C50.0738 19.0099 50.4964 38.0486 52.6182 56.7256C60.0412 122.065 88.3713 183.535 157.482 209.797C241.726 241.809 305.188 273.256 347.262 308.845C364.465 323.397 378.045 338.597 388 354.779V366.158C388 391.612 371.272 413.159 348.211 420.407C338.946 390.031 319.532 363.305 290.554 338.793C247.534 302.404 183.16 270.63 98.7861 238.567C36.7569 214.996 9.01454 161.831 0 102.583V56.8574C0 27.4716 22.2932 3.29226 50.8896 0.30957ZM111.928 0C112.27 7.05833 112.825 14.103 113.618 21.0967C121.041 86.5591 149.368 148.147 218.48 174.462C290.155 201.752 346.785 228.634 388 258.009V341.74C378.329 328.08 366.155 315.166 351.553 302.814C308.533 266.425 244.16 234.652 159.786 202.59C94.0034 177.592 66.7812 119.311 59.5645 55.7881C57.4694 37.3471 57.074 18.5113 57.9121 0H111.928ZM177.688 0C187.594 59.7615 216.633 114.175 280.479 138.485C321.197 153.989 357.06 169.36 388 185.131V248.927C346.378 220.062 290.388 193.758 220.788 167.258C155.007 142.211 127.782 83.8135 120.564 20.1602C119.807 13.4805 119.274 6.749 118.938 0H177.688ZM247.363 0C262.01 44.8917 290.764 83.1966 341.479 102.507C357.764 108.707 373.273 114.888 388 121.08V176.714C357.405 161.297 322.288 146.32 282.787 131.28C222.498 108.325 194.597 57.3551 184.802 0H247.363ZM324.212 0C338.584 24.9264 359.223 45.982 388 60.2158V112.903C373.935 107.026 359.194 101.168 343.787 95.3018C296.492 77.2938 269.127 42.0463 254.8 0H324.212ZM332.57 0.0175781C361.574 0.732393 385.189 23.167 387.766 51.6719C363.583 38.9938 345.612 21.129 332.57 0.0175781Z"
      fill="#FF5B01"
    />
  </svg>
);

const introEase = [0.22, 1, 0.36, 1] as const;

const introContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const introItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: introEase,
    },
  },
};

// Add this helper function before the Portfolio component
const truncateText = (text: string, maxLength: number) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  // Slice to max length, remove any trailing spaces, and add "..."
  return text.slice(0, maxLength).trim() + "...";
};

const Portfolio = () => {
  const carouselItems = [...portfolioItems, ...portfolioItems];
  const carouselStyle = {
    "--portfolio-item-count": portfolioItems.length,
    "--portfolio-duration": `${portfolioItems.length * 4}s`,
  } as CSSProperties;

  return (
    <section className="overflow-hidden bg-white px-4 pt-16 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1380px]">
        <motion.div
          className="mx-auto mb-9 max-w-[920px] text-center"
          variants={introContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            variants={introItemVariants}
            className="mx-auto mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text="PORTFOLIO" />
          </motion.div>
          <motion.h2
            variants={introItemVariants}
            className="project-h2 block w-full max-w-full text-center"
          >
            OUR PAST wORK
          </motion.h2>
          <motion.p
            variants={introItemVariants}
            className="mx-auto mt-4 max-w-full text-base leading-6 text-[#989391] sm:text-lg"
          >
            Explore a selection of books published through NexiFire Publishing
            across multiple genres including business, self-development,
            fiction, memoirs, and children's literature.
          </motion.p>
        </motion.div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pb-4">
          <div
            className="portfolio-carousel-track flex w-max px-6 sm:px-8 lg:px-10"
            style={carouselStyle}
          >
            {carouselItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="portfolio-carousel-card group flex shrink-0 flex-col items-center text-center"
                style={{ width: "var(--portfolio-card-width)" }}
                aria-hidden={index >= portfolioItems.length}
              >
                <div className="relative mb-10 w-full pt-3 sm:mb-11 sm:pt-4 lg:mb-12">
                  <div className="pointer-events-none absolute left-1/2 top-[5.25rem] flex w-[118%] -translate-x-1/2 justify-center sm:top-[5.55rem] sm:w-[120%] lg:top-[5.8rem] lg:w-[122%]">
                    <div className="w-full">
                      <PortfolioGlow />
                    </div>
                  </div>

                  {item.imageSrc ? (
                    <div className="relative z-10 mx-auto aspect-[2/3] w-[98%]">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        sizes="(max-width: 639px) 216px, (max-width: 1023px) 235px, 253px"
                        className="rounded-[4px] object-contain"
                      />
                    </div>
                  ) : (
                    <div className="relative z-10 mx-auto aspect-[327/490] w-[98%] rounded-[4px] bg-[#f3ede7]" />
                  )}
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#282828]">
  {truncateText(item.title, 15)}
</h3>
                <p className="mt-2 text-base leading-none tracking-[-0.02em] text-[#444444] sm:text-lg">
  {truncateText(item.author, 30)}
</p>

                {/* <Link
                  href={item.amazonHref}
                  className="mt-6 inline-flex items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-4 py-[8px] text-base font-light leading-none text-white shadow-[0_8px_18px_rgba(255,91,1,0.24)] transition hover:brightness-[1.03] sm:text-lg"
                >
                  Buy on Amazon
                  <span className="ml-1.5 text-sm leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                    >
                      <path
                        d="M3.58556 19.6981C3.58555 19.6981 3.58556 19.6981 3.58556 19.6981C4.73519 21.0833 6.87487 21.0833 11.1542 21.0833H11.8454C16.1247 21.0833 18.2644 21.0833 19.414 19.6981M3.58556 19.6981C2.43592 18.3129 2.83023 16.2098 3.61887 12.0038C4.17971 9.01266 4.46013 7.5171 5.52474 6.63355M19.414 19.6981C19.414 19.6981 19.414 19.6981 19.414 19.6981C20.5637 18.3129 20.1693 16.2098 19.3807 12.0038C18.8199 9.01266 18.5394 7.5171 17.4748 6.63355M17.4748 6.63355C17.4748 6.63355 17.4748 6.63355 17.4748 6.63355C16.4102 5.75 14.8886 5.75 11.8454 5.75H11.1542C8.11097 5.75 6.58935 5.75 5.52474 6.63355C5.52474 6.63355 5.52474 6.63355 5.52474 6.63355"
                        stroke="white"
                        strokeWidth="1.4375"
                      />
                      <path
                        d="M8.625 5.74984V4.7915C8.625 3.20369 9.91218 1.9165 11.5 1.9165C13.0878 1.9165 14.375 3.20369 14.375 4.7915V5.74984"
                        stroke="white"
                        strokeWidth="1.4375"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </Link> */}
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .portfolio-carousel-track {
          --portfolio-card-width: 220px;
          --portfolio-gap: 5rem;
          gap: var(--portfolio-gap);
          animation: portfolio-marquee var(--portfolio-duration) linear infinite;
        }

        @media (min-width: 640px) {
          .portfolio-carousel-track {
            --portfolio-card-width: 240px;
            --portfolio-gap: 5.5rem;
          }
        }

        @media (min-width: 1024px) {
          .portfolio-carousel-track {
            --portfolio-card-width: 258px;
            --portfolio-gap: 6rem;
          }
        }

        @keyframes portfolio-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(
              calc(
                -1 * var(--portfolio-item-count) *
                  (var(--portfolio-card-width) + var(--portfolio-gap))
              )
            );
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
