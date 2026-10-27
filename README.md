# Guildhall People Advisory website

A responsive React website (built with Vite) for Guildhall People Advisory.

## 1. Run it on your computer

You need **Node.js 18 or later** (download from nodejs.org).

```bash
npm install        # first time only
npm run dev        # starts the site at http://localhost:5173
```

Changes you save appear in the browser straight away.

## 2. Edit content

Almost everything you will want to change lives in two folders:

| What | File |
|---|---|
| Company name, logo, email, phone, address, legal details | `src/config/site.js` |
| Navigation menu | `src/config/site.js` |
| The five services | `src/content/services.js` |
| About page (overview, mission, vision, values, approach) | `src/content/about.js` |
| "How we work" and process steps | `src/content/steps.js` |
| Employer and candidate FAQs | `src/content/faqs.js` |
| Job vacancies | `src/content/jobs.js` |
| Insights articles | `src/content/insights.js` |
| Contact form enquiry types | `src/content/enquiryTypes.js` |
| Page titles and search descriptions | `src/content/seo.js` |
| Colours, fonts and spacing | `src/styles/tokens.css` |
| Privacy and cookies text | `src/pages/Privacy.jsx` |

**Missing information** is shown on the site in a highlighted "To confirm" box. These appear wherever a value in `site.js` is `null`, or where text in the content files starts with `TODO:`. Search the project for `TODO` to find them all. Nothing has been invented: there are no made-up clients, testimonials, statistics, addresses or vacancies.

**Logo:** your G monogram is in `public/logo-mark.png`, with a light version (`logo-mark-light.png`) for dark backgrounds and the full logo in `logo-full.png`. The favicon, app icon and social sharing image (`og-image.png`) were made from it. To change the logo, replace these files and keep the same names.

**Colours:** change the five `--brand-...` values at the top of `src/styles/tokens.css`. The whole site updates.

## 3. The contact form

**Already connected** to Formspree (`https://formspree.io/f/mbggowrz`, set in `src/config/site.js`). The first time someone submits it, Formspree may ask you to confirm by email before messages start arriving. The steps below are only needed if you ever switch to a different form.

The form validates input, but **it does not send messages until you connect a form service**. Until then it clearly tells visitors that nothing was sent.

Using Formspree (other services that accept JSON work the same way):

1. Create a free account at formspree.io and create a new form. Set the email address enquiries should go to.
2. Copy the form endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
3. Copy `.env.example` to a new file named `.env` and set `VITE_FORM_ENDPOINT=https://formspree.io/f/abcdwxyz`.
4. Restart `npm run dev` and send a test message.
5. When you deploy, add the same `VITE_FORM_ENDPOINT` variable in your hosting provider's settings.

The endpoint URL is designed to be public. **Never** put private API keys in any `VITE_` variable, because those values are visible to visitors.

## 4. Deploy

```bash
npm run build      # creates the finished site in the dist/ folder
npm run preview    # check the built version locally
```

Recommended hosts (both have free plans):

- **Netlify:** connect your GitHub repository, build command `npm run build`, publish directory `dist`. The included `public/_redirects` file makes page links work.
- **Vercel:** import the repository; it detects Vite automatically. The included `vercel.json` makes page links work.

Then connect your domain in the host's dashboard.

If you use a host without redirect support, set `VITE_ROUTER_MODE=hash` (URLs become `/#/about`).

## 5. Accounts you will need

| Account | Why | Required? |
|---|---|---|
| Hosting (Netlify, Vercel or similar) | To put the site online | Yes |
| Domain name (from a domain registrar) | Your web address | Yes |
| Form service (Formspree or similar) | To receive contact form messages | Yes, for the form to work |
| Business email (Google Workspace, Microsoft 365 or similar) | To receive and reply to enquiries from your own domain | Recommended |
| GitHub | To store the code and deploy automatically | Recommended |

## 6. Before you launch

- Replace every "To confirm" note (search for `TODO` and `null` in `src/config/site.js`).
- Review the drafted service descriptions, About text and FAQs.
- Have the privacy notice reviewed for the data protection law that applies to you.
- Connect and test the contact form.

## Notes for future development

- **Search engines and social sharing:** page titles and descriptions update as visitors move between pages. Some social networks only read the defaults in `index.html`. If search visibility becomes a priority, the site can be moved to a pre-rendering framework such as Next.js or Astro; the components and content files will carry over.
- **Recruitment integration:** CV uploads and candidate accounts are not included. Each job in `jobs.js` accepts an `applyUrl`, so you can link to an external applicant tracking system when you choose one.
- **Fonts** load from Google Fonts. To avoid that connection, self-host the fonts and update the privacy notice.
- **Dark mode:** the site follows the visitor's light or dark setting. Dark colours are in `src/styles/tokens.css`.

## Project structure

```
src/
  config/site.js        company details and navigation
  content/              all editable text
  components/           reusable building blocks (header, footer, buttons, form...)
  pages/                one file per page
  lib/                  routing and page metadata helpers
  styles/               design tokens and styles
public/                 logo, favicon and hosting redirect files
```
