import { generateConsultationMailto } from "@/config/email";
export const header = {
  logo: {
    src: "./logo-mark.png",
    alt: "logo",
    href: "/",
  },
  links: [
    {
      label: "Features",
      href: "#features",
    },
    // {
    //   label: "Pricing",
    //   href: "#pricing",
    // },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "FAQs",
      href: "#faqs",
    },
  ],
  buttons: [
    
    {
      label: "Contact Us",
      href: generateConsultationMailto(),
     
      color: "dark",
      size: "small",
    },
  ],
};
