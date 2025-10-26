export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("Google Sheets Script URL is not configured");
      // For development/testing: return success even without Google Sheets
      // In production, you should set up the Google Sheets integration
      console.log("Development mode: Form submission received but not saved to Google Sheets");
      return res.status(200).json({
        message: "Contact form submitted successfully (development mode - not saved)",
        warning: "Google Sheets integration not configured",
      });
    }

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("timestamp", new Date().toISOString());

    const response = await fetch(scriptUrl, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets");
    }

    return res.status(200).json({
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return res.status(500).json({ error: "Failed to submit contact form", details: error.message });
  }
}
