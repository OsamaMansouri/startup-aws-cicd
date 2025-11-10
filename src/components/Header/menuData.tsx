import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "AI Solutions",
        path: "/#features",
        newTab: false,
      },
      {
        id: 32,
        title: "B2B & B2C Platforms",
        path: "/#features",
        newTab: false,
      },
      {
        id: 33,
        title: "E-commerce",
        path: "/#features",
        newTab: false,
      },
      {
        id: 34,
        title: "App Development",
        path: "/#features",
        newTab: false,
      },
      {
        id: 35,
        title: "SaaS Solutions",
        path: "/#features",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
