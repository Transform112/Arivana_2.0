// Email Configuration for WindMill
// Update this file with your email address and customize the consultation template

export const emailConfig = {
  // Replace with your actual email address
  consultationEmail: "pawankumar9aa@gmail.com",
  
  // Email subject line
  subject: "Free Consultation Request - WindMill Services",
  
  // Email template body
  // Note: %0D%0A represents line breaks in mailto URLs
  emailTemplate: `Hello WindMill Team,

I am interested in booking a free consultation for your software development services.

Project Details:
- Project Type: [Please specify - Web App, Mobile App, SaaS, Enterprise Solution, etc.]
- Budget Range: [Please specify]
- Timeline: [Please specify]
- Technology Preferences: [Optional]

Project Description:
[Please describe your project requirements, goals, and any specific features you need]

Contact Information:
- Name: [Your Name]
- Company: [Your Company]
- Phone: [Your Phone Number]
- Best Time to Call: [Please specify]

Thank you for your time. I look forward to discussing how WindMill can help bring my project to life.

Best regards`
};

// Helper function to generate mailto URL
export function generateConsultationMailto() {
  const subject = encodeURIComponent(emailConfig.subject);
  const body = encodeURIComponent(emailConfig.emailTemplate);
  
  return `mailto:${emailConfig.consultationEmail}?subject=${subject}&body=${body}`;
}