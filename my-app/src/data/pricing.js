export const pricing = [
  {
    name: "Free Call",
    description: "For small teams",
    value: {
      monthly: 0,
      yearly: 0,
    },
    unit: "per user/month",
    currency: "$",
    features: [
      "Requirements discussion",
      "Project roadmap",
      "Cost estimation",
      "Tech stack guidance",
    ],
    button: {
      label: "Get started",
      href: "#",
      color: "light",
      icon: "tabler:arrow-right",
    },
  },
  {
    name: "Pro",
    description: "For Startups & SMBs",
    value: {
      monthly: 15,
      yearly: 12,
    },
    unit: "per user/month",
    currency: "$",
    features: [
      "Website or App Development",
      "Dedicated Support",
      "UI/UX Services",
      "API Integration",
    ],
    button: {
      label: "Start Your Project",
      href: "#",
      icon: "tabler:rocket",
    },
  },
  {
    name: "Enterprise",
    description: "For large teams",
    value: {
      monthly: 29,
      yearly: 24,
    },
    unit: "per user/month",
    currency: "$",
    features: [
      "End-to-end Solutions",
      "Dedicated Team",
      "Cloud & DevOps",
      "Custom Integrations",
    ],
    button: {
      label: "Contact sales",
      href: "#",
      color: "light",
      icon: "tabler:mail",
    },
  },
];
