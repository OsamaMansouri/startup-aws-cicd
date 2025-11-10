import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Incite Digital Agency",
  description: "Learn about Incite - Your trusted digital agency partner delivering AI solutions, B2B & B2C platforms, E-commerce, App Development, and SaaS.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Discover how Incite transforms businesses through innovative digital solutions. We're your trusted partner for all your digital needs."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
