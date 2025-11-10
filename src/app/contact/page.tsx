import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Incite Digital Agency",
  description: "Get in touch with Incite. Let's discuss how we can help transform your business with our digital solutions.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Ready to start your project? Get in touch with our team and let's discuss how we can help transform your business."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
