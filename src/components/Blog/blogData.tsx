import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Future of AI in Business: Transforming Operations",
    paragraph:
      "Discover how artificial intelligence is revolutionizing business operations, from automation to predictive analytics, and how your company can leverage AI for competitive advantage.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Alex Thompson",
      image: "/images/blog/author-03.png",
      designation: "AI Solutions Lead",
    },
    tags: ["AI"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Building Scalable E-commerce Platforms: Best Practices",
    paragraph:
      "Learn the essential strategies and technologies needed to build robust, scalable e-commerce platforms that can grow with your business and handle increasing traffic.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Maria Garcia",
      image: "/images/blog/author-02.png",
      designation: "E-commerce Specialist",
    },
    tags: ["E-commerce"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "SaaS Development: From Concept to Launch",
    paragraph:
      "A comprehensive guide to developing successful SaaS products, covering architecture, user experience, scalability, and go-to-market strategies.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "David Kim",
      image: "/images/blog/author-03.png",
      designation: "SaaS Architect",
    },
    tags: ["SaaS"],
    publishDate: "2025",
  },
];
export default blogData;
