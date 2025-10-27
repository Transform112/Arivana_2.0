# Contact Form Setup Guide

## Overview
The contact form has been successfully integrated into the Arivana website. The form will appear just before the footer section and includes all the necessary functionality.

## Setup Instructions

### 1. Google Sheets Integration
The contact form uses Google Apps Script to save submissions to a Google Sheet. No environment variables are needed - the URL is hardcoded in the component.

### 2. Google Apps Script Setup
Follow these steps to set up your Google Sheets integration:

1. **Create a Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com/)
   - Create a new spreadsheet
   - Name the first sheet "Contact Submissions" (or any name you prefer)
   - Add column headers in Row 1: `Name`, `Email`, `Subject`, `Message`, `Timestamp`

2. **Create Google Apps Script**
   - Go to [Google Apps Script](https://script.google.com/)
   - Click "New Project"
   - Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    // Replace 'YOUR_SPREADSHEET_ID' with your actual spreadsheet ID
    // You can find this in your spreadsheet URL: 
    // docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
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

3. **Deploy as Web App**
   - Click "Deploy" → "New deployment"
   - Click the gear icon next to "Type" and select "Web app"
   - Set the following:
     - Description: "Contact Form Handler" (or any description)
     - Execute as: "Me"
     - Who has access: "Anyone" (important for public forms)
   - Click "Deploy"
   - Copy the Web app URL (it will look like: `https://script.google.com/macros/s/AKfycby...`)
   - Click "Done"

4. **Add URL to Your Code**
   - Open `src/components/sections/ContactSection.js`
   - Find line 25: `const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";`
   - Replace `"YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"` with your actual Apps Script URL
   - Save the file

5. **Test the Integration**
   - Restart your development server
   - Fill out and submit the contact form
   - Check your Google Sheet to verify the submission was saved

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

1. `src/components/sections/ContactSection.js` - The contact form component (now uses direct Google Apps Script calls)
2. Updated `src/components/sections/index.js` - Added ContactSection export
3. Updated `src/pages/index.js` - Added ContactSection to the page layout

**Note**: The API route (`src/pages/api/contact.js`) is no longer needed as the form now calls Google Apps Script directly from the client side.

## Navigation to Contact Form

All contact-related buttons and links throughout the website now smoothly scroll to the contact form. These include:

- **Header**: "Contact Us" button
- **Hero Section**: "Book a Free Consultation" button
- **Pricing Cards**: "Get started", "Start Your Project", "Contact sales" buttons
- **FAQ Section**: "Contact Support" link
- **Footer**: "Schedule a Demo" link

All of these links use smooth scroll behavior to navigate to the contact form section (`#contact`).

## Troubleshooting

1. **Form not submitting**: 
   - Make sure you've replaced `"YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"` with your actual Apps Script URL
   - Check that your Apps Script is deployed as a web app with "Anyone" access
   - Verify the Google Sheet ID is correct in your Apps Script

2. **Styling issues**: Ensure Tailwind CSS is properly configured

3. **Icons not showing**: Make sure `lucide-react` is installed (already installed)

4. **CORS Errors**: Make sure your Apps Script deployment has "Who has access" set to "Anyone"

## Notes

- The form is now integrated just before the footer section
- All dependencies are already installed including `lucide-react`
- The form maintains the same theme and design as the rest of the website
- **No environment variables needed**: The contact form now calls Google Apps Script directly from the client side
- The Apps Script URL can be safely hardcoded as Apps Script web apps are designed to be publicly accessible
- Works on any hosting platform since it doesn't require server-side API routes
- Safe to push to GitHub since no sensitive environment variables are used
