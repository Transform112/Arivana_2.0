# Email Consultation Feature

This feature allows users to click "Book a Free Consultation" and automatically opens their default email client with a pre-filled professional template.

## How it works

When users click the "Book a Free Consultation" button, it will:
1. Open their default email client (Gmail, Outlook, Apple Mail, etc.)
2. Pre-fill the "To" field with your email address
3. Pre-fill the subject line with "Free Consultation Request - WindMill Services"
4. Pre-fill the email body with a professional template

## Setup Instructions

### Step 1: Update Your Email Address
1. Open `src/config/email.js`
2. Replace `"your-email@example.com"` with your actual email address:
   ```javascript
   consultationEmail: "john@yourcompany.com",
   ```

### Step 2: Customize the Template (Optional)
In the same file, you can customize:
- **Subject line**: Change the `subject` field
- **Email template**: Modify the `emailTemplate` field

### Step 3: Test the Feature
1. Start your development server: `npm run dev`
2. Visit your website
3. Click "Book a Free Consultation"
4. Your email client should open with the pre-filled template

## Email Template

The default template includes sections for:
- **Project Type** (Web App, Mobile App, SaaS, etc.)
- **Budget Range**
- **Timeline**
- **Technology Preferences**
- **Project Description**
- **Contact Information**

## Browser Compatibility

This feature works with:
- ✅ **Desktop browsers**: Chrome, Firefox, Safari, Edge
- ✅ **Mobile browsers**: iOS Safari, Chrome Mobile, Samsung Browser
- ✅ **Email clients**: Gmail, Outlook, Apple Mail, Thunderbird, etc.

## Advantages

- **No backend required**: Pure frontend solution
- **Universal compatibility**: Works with any email client
- **Professional appearance**: Clean, structured template
- **User-friendly**: Familiar email interface for users
- **No privacy concerns**: No data stored on your servers

## Customization Examples

### Change Subject Line:
```javascript
subject: "Custom Software Development Inquiry"
```

### Modify Template:
```javascript
emailTemplate: `Hi there!

I'm interested in your services for:
[Project description]

Budget: [Amount]
Timeline: [When needed]

Let's talk!`
```

### Multiple Email Addresses:
```javascript
consultationEmail: "sales@yourcompany.com,support@yourcompany.com"
```

## Troubleshooting

**Email client doesn't open:**
- User may not have a default email client configured
- Some corporate networks block mailto links
- Mobile users might need to install an email app

**Template appears encoded:**
- This is normal for mailto URLs
- The email client will decode it properly when opened

**Need a web-based alternative:**
- Consider adding a contact form as backup
- Add your phone number or contact page link nearby