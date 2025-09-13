# Portfolio Project

## Overview

This project is a personal portfolio website built using Next.js, TypeScript,
and Tailwind CSS. It showcases various sections such as About, Experience,
Education, Projects, Skills, Certifications, and Contact. The website is
designed to be responsive and visually appealing, with reusable components and
modern web development practices.

## Features

- **Header and Footer**: Persistent navigation and footer components.
- **Hero Section**: A visually engaging introduction.
- **About Section**: Information about the individual.
- **Experience and Education**: Timeline of professional and academic
  achievements.
- **Projects**: Showcase of completed projects.
- **Skills**: Display of technical skills with progress indicators.
- **Certifications**: List of certifications.
- **Contact**: Contact form or details.
- **Scroll to Top**: Smooth scrolling functionality.
- **Particles Background**: Animated background for added visual appeal.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site
  generation.
- **TypeScript**: Strongly typed programming language for better code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for animations.
- **Lucide Icons**: Icon library for consistent and modern icons.

## Folder Structure

- **app/**: Contains the main layout and page components.
- **components/**: Reusable UI components such as buttons, cards, and modals.
- **hooks/**: Custom React hooks for specific functionalities.
- **lib/**: Utility functions.
- **public/**: Static assets like images.
- **styles/**: Global CSS files.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd potofolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000`.

## Customization

You can customize the content by editing the respective components in the
`components/` directory. For example:

- Update the `about.tsx` file to change the About section.
- Modify `skills.tsx` to update the skills and their levels.

## Deployment

To deploy the project, you can use platforms like Vercel or Netlify. Ensure to
build the project before deployment:

```bash
npm run build
```

## License

This project is licensed under the MIT License. Feel free to use and modify it
as per your needs.
