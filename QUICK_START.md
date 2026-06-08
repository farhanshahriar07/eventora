# EELEVEN - Quick Start Guide

## 🚀 Getting Your Site Running

### Prerequisites
- Node.js 20+ installed ([Download](https://nodejs.org/))
- A code editor (VS Code recommended)
- Basic terminal/command line knowledge

### Installation

```bash
# Navigate to project folder
cd C:\Users\frhns\Desktop\eeleven

# Install dependencies (only needed once)
npm install
```

### Development Server

```bash
# Start development server
npm run dev
```

Visit **http://localhost:3000** in your browser.

### Making Changes

The site will automatically update when you save changes to any file.

---

## 📝 Common Updates

### 1. Update Events

**File:** `data/events.ts`

```typescript
export const events = [
  {
    slug: "event-url-name",           // Used in URL
    title: "Event Display Name",
    date: "Month DD, YYYY",
    location: "City, Bangladesh",
    image: "https://your-image-url.jpg",
    description: "Event description here...",
  },
  // Add more events...
];
```

### 2. Update Contact Information

**File:** `app/contact/page.tsx`

Search for:
- Email: `info@eeleven.org`
- Phone: `01711-744427`
- Address: `House No. 34, Road No. 2, Banani, Dhaka`

### 3. Update Social Media Links

**File:** `components/layout/Footer.tsx`

Search for:
- Facebook URL
- Instagram URL

### 4. Update Company Name/Tagline

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "EELEVEN - Turning Speed Into Experiences",
  description: "Your description here...",
};
```

---

## 🎨 Customization

### Change Colors

**File:** `app/globals.css`

Main colors are defined at the top:
- Background: `#020617`
- Rose/Red accent: `#e11d48`, `#b11226`

### Add New Pages

Create a new folder in `app/` directory:

```
app/
└── your-page-name/
    └── page.tsx
```

Example:
```typescript
export default function YourPage() {
  return (
    <main>
      <h1>Your Page Content</h1>
    </main>
  );
}
```

Access at: `http://localhost:3000/your-page-name`

---

## 🌐 Deployment

### Deploy to Vercel (Recommended - Free)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Follow prompts to deploy

**Your site will be live at:** `your-project-name.vercel.app`

### Custom Domain

In Vercel dashboard:
1. Go to your project
2. Settings → Domains
3. Add your domain (e.g., `eeleven.org`)
4. Follow DNS configuration instructions

---

## 🔧 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- --port 3001
```

### Build fails
```bash
# Check for TypeScript errors
npm run build

# Clear Next.js cache
rm -rf .next
npm run build
```

---

## 📱 Testing on Mobile

### Option 1: Same Network
1. Find your computer's IP address
   - Windows: `ipconfig` → look for IPv4
   - Mac/Linux: `ifconfig` → look for inet
2. On your phone, visit: `http://YOUR-IP:3000`

### Option 2: Use Vercel Preview
Deploy to Vercel and access the preview URL on any device.

---

## 🆘 Common Questions

**Q: How do I add more event images?**
A: Place images in `public/` folder, then reference them in `data/events.ts`:
```typescript
image: "/my-event-photo.jpg"
```

**Q: How do I change the logo?**
A: Replace files in `public/`:
- `logo_header.png` - Header logo
- `logo_footer.png` - Footer logo
- `favicon.png` - Browser tab icon

**Q: The contact form doesn't work**
A: The form is UI-only. You need to add a backend service:
- Option 1: Use [Formspree](https://formspree.io/)
- Option 2: Use [Web3Forms](https://web3forms.com/)
- Option 3: Implement custom API route

**Q: How do I add Google Analytics?**
A: Install next/third-parties:
```bash
npm install @next/third-parties
```

Then add to `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// In the component
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

---

## 📚 Learning Resources

### Next.js 16
- [Official Docs](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### React
- [React Docs](https://react.dev/)
- [React Tutorial](https://react.dev/learn)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🎯 Next Steps

1. **Update Event Data**
   - Replace placeholder events with real events
   - Add actual event photos
   - Update dates and locations

2. **Add Real Content**
   - Replace Unsplash images with actual photos
   - Add more events as they're scheduled
   - Update company information if needed

3. **Test Everything**
   - Check all pages on desktop
   - Test on mobile devices
   - Verify all links work
   - Test contact form (if backend added)

4. **Deploy**
   - Push code to GitHub
   - Deploy to Vercel
   - Configure custom domain
   - Test live site

5. **Launch**
   - Announce on social media
   - Share with partners
   - Monitor analytics
   - Gather feedback

---

## 💬 Need Help?

- Check `TRANSFORMATION_SUMMARY.md` for detailed changes
- Review `COMPANY_PROFILE.md` for company information
- See `SERVICES.md` for service details
- Read `README.md` for project overview

---

**Ready to turn speed into experiences! 🏁**

*Questions? Contact the development team or refer to the documentation files.*
