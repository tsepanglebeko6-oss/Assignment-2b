# Visit Lesotho

Interactive tourism web application for **Lesotho**, built with **React.js** for Limkokwing University **DIWP3110 Web Design II — Individual Assignment 2b**.

The app helps local and international visitors discover destinations, activities and cultural experiences in the Mountain Kingdom.

## Features

- Home page with hero, Lesotho introduction, featured destinations and popular activities
- Attractions page with 9 destinations stored as an array of objects and rendered dynamically
- Search by name and filter by category
- Attraction details shown with React state and click handlers
- Visitor enquiry form with validation and a confirmation message
- Responsive layout for desktop, tablet and mobile

## Tech stack

- React 19 (Create React App)
- Component-based UI with props
- `useState` and `useEffect` for navigation, filtering and form state

## Folder structure

```
src/
  App.js                 App shell, page state and navigation
  components/            Navbar, cards, search/filter, enquiry form
  data/attractions.js    Destination data (array of objects)
  pages/                 Home, Attractions, Details, Enquiry
public/
screenshots/             Project screenshots for submission
```

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm test
npm run build
```

## Screenshots

Place captures in `screenshots/` after running the app:

- `screenshots/home.png`
- `screenshots/attractions.png`
- `screenshots/details.png`
- `screenshots/enquiry.png`
- `screenshots/mobile.png`

## GitHub

Commit the full React project, this README and the screenshots folder, then push to GitHub for submission.
