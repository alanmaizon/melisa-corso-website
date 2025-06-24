# Melisa Corso Official Website (React with Vite & React-Bootstrap)

This project is a modern, elegant, and responsive single-page parallax website for Melisa Corso, a concert violinist, built using React, Vite as the build tool, and React-Bootstrap for UI components. It leverages serverless solutions for form submissions.

## Features

* **Fast Development:** Built with Vite for rapid development server startup and Hot Module Replacement (HMR).
* **Component-Based UI:** Structured with React components for maintainability and reusability.
* **Responsive Design:** Utilizes React-Bootstrap's grid system and components for a beautiful layout on all devices (desktop, tablet, mobile).
* **Parallax Scrolling:** Immersive background effects achieved purely with CSS.
* **Serverless Contact Form:** Integrates with free-tier services like Formspree for easy form submissions without a backend server.
* **Font Awesome Icons:** Includes popular icons for social media and contact details.

## Project Structure

After following the setup instructions, your project directory should look similar to this:

```bash
melisa-corso-website/
├── node_modules/
├── public/
│   ├── index.html
│   ├── vite.svg
│   └── images/
│       ├── logo.png
│       ├── favicon.png
│       ├── spanish.png
│       ├── english.png
│       ├── portuguese.png
│       ├── hero1.jpg  (Replace with your actual hero image for the home section)
│       ├── hero2.jpg  (Replace with your actual hero image for the first hero-space)
│       ├── hero3.jpg  (Replace with your actual hero image for the second hero-space)
│       └── hero4.jpg  (Replace with your actual hero image for the footer hero-large)
├── src/
│   ├── assets/ (Vite default, can be removed if not used)
│   ├── components/
│   │   ├── NavbarComponent.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── AboutSection.jsx
│   │   └── ContactSection.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Setup and Running Instructions

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* Node.js (LTS version recommended)
* npm (Node Package Manager, usually comes with Node.js) or Yarn

### Installation Steps

1.  **Create a New Vite Project:**
    If you haven't already, create a new Vite project for React. Open your terminal or command prompt and run:
    ```bash
    npm create vite@latest melisa-corso-website -- --template react
    ```

2.  **Navigate into Your Project Directory:**
    ```bash
    cd melisa-corso-website
    ```

3.  **Install Dependencies:**
    Install React-Bootstrap, Bootstrap CSS, and all necessary Font Awesome packages:
    ```bash
    npm install react-bootstrap bootstrap @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
    ```

4.  **Organize Your React Components:**
    Create a new directory named `src/components/`.
    * Create `src/components/NavbarComponent.jsx` and copy the code provided in the `NavbarComponent.jsx` section below.
    * Create `src/components/HeroSection.jsx` and copy the code provided in the `HeroSection.jsx` section below.
    * Create `src/components/ServicesSection.jsx` and copy the code provided in the `ServicesSection.jsx` section below.
    * Create `src/components/AboutSection.jsx` and copy the code provided in the `AboutSection.jsx` section below.
    * Create `src/components/ContactSection.jsx` and copy the code provided in the `ContactSection.jsx` section below.

5.  **Update `src/App.jsx`:**
    Copy the code provided in the `src/App.jsx` section below and replace the content of your `src/App.jsx` file.

6.  **Update `src/index.css`:**
    Copy the code provided in the `src/index.css` section below and replace the content of your `src/index.css` file.

7.  **Update `src/main.jsx`:**
    Ensure your `src/main.jsx` file looks exactly like the code provided in the `src/main.jsx` section below. This is crucial for global CSS and Font Awesome styles to be imported correctly.

8.  **Place Static Assets:**
    Create an `images` folder inside your `public` directory: `melisa-corso-website/public/images/`.
    Place all your image files (`logo.png`, `favicon.png`, `spanish.png`, `english.png`, `portuguese.png`, `hero1.jpg`, `hero2.jpg`, `hero3.jpg`, `hero4.jpg`) into this `public/images/` folder.
    * **Important:** The image paths in the React code (e.g., `backgroundImage="/images/hero1.jpg"`) are relative to the `public` folder when using Vite.

9.  **Configure YouTube Video ID:**
    In `src/components/AboutSection.jsx`, locate the `iframe` element and update its `src` attribute with the actual ID of your YouTube video. The current placeholder uses an example ID: `https://www.youtube.com/embed/MKeR_9-vpUg?rel=0`.

10. **Configure Serverless Contact Form:**
    In `src/components/ContactSection.jsx`, find the `<Form>` element and replace `"YOUR_FORMSPREE_ENDPOINT_HERE"` in the `action` attribute with your actual Formspree endpoint.
    * **Formspree:** Visit [https://formspree.io/](https://formspree.io/), create a free account, set up a new form, and copy the provided `action` URL.
    * **Netlify Forms (Alternative):** If you plan to host on Netlify, you can use Netlify Forms. In that case, simply add `data-netlify="true"` to your `<Form>` tag and remove the `action` and `method` attributes. Netlify will handle the form submissions automatically.

### Running the Development Server

Once all the files are in place and dependencies are installed, you can start the development server:

```bash
npm run dev
```

This will typically open your website in your browser at http://localhost:5173 (or a similar port). Vite's development server offers very fast refresh times.

Building for Production
When your website is complete and ready to be deployed, you can create an optimized production build:

```bash
npm run build
```

This command will generate a dist folder in your project directory. This dist folder contains all the static, optimized HTML, CSS, and JavaScript files that are ready for deployment to any static site hosting provider (e.g., Netlify, Vercel, GitHub Pages, Cloudflare Pages).