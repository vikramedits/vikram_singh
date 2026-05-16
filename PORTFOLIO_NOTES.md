# 🚀 Portfolio Setup & Next Steps

This document contains important instructions for completing the setup of your portfolio.

## 📧 Contact Form Integration (Web3Forms)
The contact form is integrated with Web3Forms (Free tier). To make it functional:

1. **Get your Access Key**:
   - Visit [Web3Forms](https://web3forms.com/).
   - Enter your email address in the "Get your Access Key" section.
   - Check your inbox for the API Key.

2. **Update the Code**:
   - Open the file: `components/sections/ContactSection.tsx`.
   - Locate line **21**: `formData.append("access_key", "YOUR_ACCESS_KEY_HERE");`.
   - Replace `"YOUR_ACCESS_KEY_HERE"` with your actual API key.

3. **Test the Form**:
   - Once updated, try sending a message through your website. You should receive an email notification immediately.

---

## 📄 Resume PDF
The resume download button is configured to look for a file in the `public` folder.

1. **Upload your Resume**:
   - Name your resume file exactly `resume.pdf`.
   - Place it inside the `public/` directory of your project.
   - The "Download Resume" buttons in the Navbar and Mobile Menu will now work automatically.

---

## 🖼️ Project & Blog Images
For the best visual experience:
- **Projects**: Add high-quality screenshots (16:9 ratio recommended) to the `public/projects/` folder and update the paths in `data/portfolio.ts`.
- **Social Media**: I have generated a premium `public/og-image.jpg`. This will be shown when you share your link on social media.

---

## 🚀 Deployment
When you are ready to go live:
1. Push your latest changes to GitHub.
2. Connect your repository to [Vercel](https://vercel.com/).
3. Vercel will automatically detect Next.js and deploy your site.

---

**Happy Coding!** 💻✨
