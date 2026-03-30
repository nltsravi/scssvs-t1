# Implementation.md

## Project: Shastra Vidya Sthanam Website (Static - GitHub Pages)

---

## 1. Objective

Build a **modern static website** using **Next.js (latest App Router)** and deploy it to **GitHub Pages**.

The site should:

* Showcase **Shastra Vidya Sthanam**
* Include multilingual content (English, Tamil, Sanskrit)
* Provide sections: Home, About Us, Projects, Contact Us
* Use **modern UI/UX design principles**
* Be optimized for performance, SEO, and accessibility

---

## 2. Tech Stack

* Framework: Next.js (latest)
* Styling: Tailwind CSS
* UI Components: shadcn/ui
* Icons: lucide-react
* Deployment: GitHub Pages
* Static Export: next export

---

## 3. Project Setup

### Step 1: Initialize Project

```bash
npx create-next-app@latest shastra-vidya-site
cd shastra-vidya-site
```

Select:

* App Router: Yes
* TypeScript: Yes
* Tailwind: Yes

---

### Step 2: Install Dependencies

```bash
npm install lucide-react
npx shadcn-ui@latest init
```

---

### Step 3: Configure Static Export

Update `next.config.js`:

```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

---

## 4. Project Structure

```
/app
  /about
  /contact
  /projects
  /tamil
  /sanskrit
  layout.tsx
  page.tsx
/components
  Header.tsx
  Footer.tsx
  Hero.tsx
  Section.tsx
/public
  logo.jpg
  favicon.ico
  content/
    english.json
    tamil.json
    sanskrit.json
```

---

## 5. Assets Setup

### Logo & Favicon

* Place `Patashala logo (1).JPG` inside `/public/logo.jpg`
* Convert to favicon:

```bash
# use any converter tool
favicon.ico
```

---

## 6. Content Extraction Strategy

Extract content from PDFs:

* Shastra Vidya Sthanam - English 2026
* Activity Details
* Tamil PDF
* Sanskrit PDF

Convert into structured JSON:

### Example: `/public/content/english.json`

```json
{
  "home": {
    "title": "Shastra Vidya Sthanam",
    "subtitle": "Preserving Ancient Knowledge"
  },
  "about": {
    "description": "..."
  },
  "projects": [
    {
      "title": "Vedic Studies",
      "description": "..."
    }
  ]
}
```

---

## 7. Layout Implementation

### Root Layout

```tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

---

## 8. Header Component

### Requirements

* Logo (left)
* Navigation (right)
* Responsive mobile menu

### Links

* Home (/)
* About Us (/about)
* Projects (/projects)
* Contact Us (/contact)

### Sample

```tsx
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <img src="/logo.jpg" alt="Logo" className="h-10" />
      <nav className="flex gap-6">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
```

---

## 9. Footer Component

```tsx
export default function Footer() {
  return (
    <footer className="text-center p-6 border-t mt-10">
      <p>© 2026 Shastra Vidya Sthanam</p>
    </footer>
  );
}
```

---

## 10. Home Page Design

### Sections

1. Hero Section
2. About Preview
3. Activities Overview
4. Call to Action

### UX Guidelines

* Use large typography
* Use spiritual/heritage themed colors (saffron, white, gold)
* Smooth scroll animations

---

## 11. About Page

Content from English PDF:

* Mission
* Vision
* History
* Founder details

---

## 12. Projects Page

From Activity Details PDF:

* List programs
* Workshops
* Courses

Display as cards:

```tsx
<div className="grid grid-cols-3 gap-6">
  {projects.map(p => (
    <div className="p-4 shadow rounded-xl">
      <h3>{p.title}</h3>
      <p>{p.description}</p>
    </div>
  ))}
</div>
```

---

## 13. Contact Page

### Fields

* Name
* Email
* Message

### Static Handling

Use Formspree or EmailJS

---

## 14. Multilingual Support

### Strategy

* Separate routes:

  * /tamil
  * /sanskrit

* Load respective JSON content

### Example

```tsx
import tamilData from '@/public/content/tamil.json';
```

---

## 15. UI/UX Enhancements

* Sticky header
* Dark mode (optional)
* Animations using Framer Motion
* Accessibility (ARIA labels)
* SEO meta tags

---

## 16. GitHub Pages Deployment

### Step 1: Add Scripts

```json
"scripts": {
  "build": "next build",
  "export": "next export"
}
```

### Step 2: Build

```bash
npm run build
```

Output: `/out`

---

### Step 3: Deploy

```bash
git init
git remote add origin <repo-url>
git checkout -b gh-pages
cp -r out/* .
git add .
git commit -m "deploy"
git push origin gh-pages
```

---

## 17. SEO Optimization

* Add meta tags
* Use semantic HTML
* Optimize images

---

## 18. Performance Optimization

* Static export
* Lazy loading images
* Minimize JS bundle

---

## 19. Future Enhancements

* Blog section
* Donations page
* Event calendar
* Admin CMS (optional)

---

## 20. Deliverables

* Fully working Next.js static site
* GitHub repository
* Deployed GitHub Pages URL

---

## 21. Notes for Antigravity IDE Prompt

"""
Create a Next.js static export website with:

* Header with Home, About, Projects, Contact
* Footer
* Use provided logo and favicon
* Parse PDF content into structured JSON
* Build multilingual pages (English, Tamil, Sanskrit)
* Use Tailwind + modern UI
* Deploy-ready for GitHub Pages
  """

---

## End of Document
