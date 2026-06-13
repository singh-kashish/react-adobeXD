[Design link](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd/flow/)
# React Assignment – Pixel-Perfect Mobile App Interface

## Overview

This project implements the given mobile app design in **React.js**, aiming for a pixel-perfect UI with smooth navigation between pages. The mobile interface is **centered on the webpage** and the entire application is deployed on **Vercel** (or a similar hosting platform).

## Requirements

1. **Technology Stack**
   - Use **React.js** to implement the provided design.
   - Structure the project with clean, maintainable components.

2. **Code Quality**
   - Code must be **neat, clean, and well formatted**.
   - Follow consistent naming conventions and folder structure.
   - Avoid unnecessary logic, duplication, and unused code.

3. **Design & Layout**
   - The UI should be **pixel-perfect** relative to the given design.
   - The **mobile app interface must be centered** on the page (desktop and mobile).
   - Use responsive techniques to ensure the layout behaves correctly across screen sizes.

4. **Navigation**
   - Implement smooth and seamless navigation **between pages/screens**.
   - Navigation should be intuitive, without visual glitches or layout shifts.

5. **Deployment**
   - The final application must be **hosted on Vercel or a similar platform**.
   - The deployed link should load quickly and match the local development build.
   - Ensure environment is production-ready (no debug logs, no dev-only code).

## Project Setup

1. **Clone the Repository**

```bash
git clone https://github.com/singh-kashish/react-adobeXD.git
cd react-adobeXD
```

2. **Install Dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the App Locally**

```bash
npm start
# or
yarn start
```

The app will typically run at `http://localhost:5173/`.

## Deployment

The project is deployed on **Vercel** (or similar). Typical deployment flow:

1. Push the project to a **GitHub repository**.
2. Connect the GitHub repo to **Vercel**.
3. Configure the build settings:
   - Framework: React
   - Build command: `npm run build` or `yarn build`
   - Output directory: `build`
4. Deploy and verify that:
   - The design is pixel-perfect.
   - Navigation works as expected.
   - The mobile interface remains centered.

## Notes

- Ensure that all styles (CSS/CSS Modules/Styled Components) are aligned exactly with the design specs (spacing, typography, colors, and sizes).
- Test navigation across all pages/screens to confirm there are no broken routes.
- Keep the codebase organized so that reviewers can easily navigate and understand components, hooks, and utilities.
