# Contact Form Setup Guide

## Overview
The contact form has been successfully integrated into the Arivana website. The form will appear just before the footer section and includes all the necessary functionality.

## Environment Variables Required

To make the contact form fully functional, you need to set up the following environment variable:

### 1. Google Sheets Integration
Create a `.env.local` file in the Arivana_2.0 directory with:

```
GOOGLE_SHEETS_SCRIPT_URL=your_google_apps_script_url_here
```

### 2. Google Apps Script Setup
1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = [
      e.parameter.name,
      e.parameter.email,
      e.parameter.subject,
      e.parameter.message,
      e.parameter.timestamp
    ];
    sheet.appendRow(data);
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Deploy the script as a web app
5. Copy the web app URL and add it to your `.env.local` file

## Installation

1. Navigate to the `Arivana_2.0` directory
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- **Responsive Design**: The form adapts to different screen sizes
- **Form Validation**: All fields are required and validated
- **Loading States**: Shows loading spinner during submission
- **Success/Error States**: Provides feedback to users
- **Google Sheets Integration**: Stores form submissions in a Google Sheet
- **Smooth Animations**: Includes fade-in and slide-in animations

## Form Fields

- Name (required)
- Email (required)
- Subject (required)
- Message (required)

## Styling

The contact form maintains the same design language as the rest of the website:
- Clean, modern design
- Black and white color scheme
- Rounded corners and subtle shadows
- Hover effects and transitions
- Focus states for accessibility

## Files Added

1. `src/components/sections/ContactSection.js` - The contact form component
2. `src/pages/api/contact.js` - API route handler for form submission
3. Updated `src/components/sections/index.js` - Added ContactSection export
4. Updated `src/pages/index.js` - Added ContactSection to the page layout

## Troubleshooting

1. **Form not submitting**: Check that the `GOOGLE_SHEETS_SCRIPT_URL` environment variable is set correctly
2. **Styling issues**: Ensure Tailwind CSS is properly configured
3. **Icons not showing**: Make sure `lucide-react` is installed (already installed)

## Notes

- The form is now integrated just before the footer section
- All dependencies are already installed including `lucide-react`
- The form maintains the same theme and design as the rest of the website
- **Important**: The `output: 'export'` configuration has been removed from `next.config.mjs` to enable API routes for the contact form
- To deploy, you'll need a hosting platform that supports Next.js API routes (like Vercel, Netlify with Functions, or a custom Node.js server)
