<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:61DAFB,100:20232A&height=220&section=header&text=FreeCodeCamp%20React%20Projects&fontSize=46&fontColor=ffffff&fontAlignY=38&desc=A%20hands-on%20journey%20through%20React%20%E2%80%94%20from%20fundamentals%20to%20hooks&descSize=18&descAlignY=58&descAlign=50" alt="Header Banner" />

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  </p>

  <p><em>11 self-contained mini-projects · 2 learning modules · built during the FreeCodeCamp curriculum</em></p>
</div>

---

## Overview

A curated collection of React mini-projects organized into two progressive learning modules. Each project is self-contained and demonstrates specific React concepts — from component composition and props all the way to hooks, async data fetching, and performance optimization.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| ⚛️ **React** | Component-based UI library |
| 📝 **JSX** | JavaScript XML for component templating |
| 🎨 **CSS3** | Styling with Flexbox & Grid |
| ⚡ **JavaScript ES6+** | Modern JS features (arrow functions, destructuring, etc.) |
| 📡 **Fetch API** | Asynchronous data fetching |

---

## Project Structure

```
FreeCodeCamp/
├── React fundamentals/
│   ├── Reusable ProfileCard Component/
│   ├── Reusable Footer/
│   ├── Mega Navbar/
│   └── Mood Board(Lab)/
│
├── React State,Hooks and Routing/
│   ├── Color picker App(LAB)/
│   ├── Toggle text app/
│   ├── fruit-search-app/
│   ├── OTP Generator/
│   ├── superhero application form/
│   ├── Event form(LAB)/
│   └── Shopping List/
│
├── index.html
└── projects.html
```

---

## Module 1 — React Fundamentals

> *Component composition, props, JSX syntax, and layout.*

| # | Project | Key Concepts |
| :--: | :--- | :--- |
| 1 | 🪪 **Reusable ProfileCard** | Component composition · props · array mapping |
| 2 | 🦶 **Reusable Footer** | Component structure · semantic HTML · CSS styling |
| 3 | 🧭 **Mega Navbar** | Navigation patterns · submenu handling · ARIA accessibility |
| 4 | 🎨 **Mood Board** *(Lab)* | Passing props · Grid layout · color-themed cards |

### Project Details

#### 🪪 Reusable ProfileCard Component
A flexible card component that renders user profiles (name, title, bio). Maps over a data array to output multiple cards with consistent styling and a responsive Flexbox layout.

#### 🦶 Reusable Footer
A professional multi-column footer with organized navigation links, a social media icon row, and a copyright section built with semantic HTML elements.

#### 🧭 Mega Navbar
A navigation bar with full dropdown/submenu support. Includes ARIA attributes for accessibility and clean hover interactions.

#### 🎨 Mood Board *(Lab)*
A visual mood board that accepts destination images and color themes via props and arranges them in a responsive CSS Grid layout.

---

## Module 2 — React State, Hooks & Routing

> *State management, React hooks, async data fetching, and interactive UI patterns.*

| # | Project | Key Concepts |
| :--: | :--- | :--- |
| 1 | 🎨 **Color Picker App** *(Lab)* | `useState` · controlled inputs · live preview |
| 2 | 👁️ **Toggle Text App** | `useState` · boolean state · conditional rendering |
| 3 | 🍎 **Fruit Search App** | `useState` · `useEffect` · Fetch API · debouncing |
| 4 | 🔐 **OTP Generator** | `useState` · `useEffect` · `useRef` · timers |
| 5 | 🦸 **Superhero Application Form** | Controlled forms · checkbox arrays · validation |
| 6 | 🎟️ **Event RSVP Form** *(Lab)* | Multi-field forms · conditional rendering · post-submit display |
| 7 | 🛒 **Shopping List** | `useMemo` · `useCallback` · filtering · performance |

### Project Details

#### 🎨 Color Picker App *(Lab)*
An interactive color selection tool using the native HTML5 `<input type="color">`. The selected color updates the background in real time via a controlled `useState` hook.

#### 👁️ Toggle Text App
A minimal toggle component that shows/hides a message using boolean state. Demonstrates conditional rendering and dynamic button labels.

#### 🍎 Fruit Search App
A real-time search interface backed by FreeCodeCamp's public fruit API. Features a 700 ms debounce on the input, loading indicators, and graceful error handling.

#### 🔐 OTP Generator
Generates a random 6-digit one-time password with a visible countdown timer. The button is disabled while an OTP is active, and the code auto-expires when the timer reaches zero.

#### 🦸 Superhero Application Form
A multi-input registration form (text, password, select, checkboxes) for aspiring superheroes. Validates inputs and keeps the submit button disabled until all required fields are filled.

#### 🎟️ Event RSVP Form *(Lab)*
A multi-field event registration form that conditionally renders a confirmation summary after submission, displaying all submitted data back to the user.

#### 🛒 Shopping List
A filterable shopping list with `useMemo` for optimized filtering and `useCallback` for stable event handlers. Items can be checked off with a visual strike-through effect.

---

## Getting Started

Each project is a standalone React app. To run any project:

```bash
# 1. Navigate into the project folder
cd "React State,Hooks and Routing/OTP Generator"   # (example)

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

> **Note:** Projects were bootstrapped with Create React App. Ensure you have **Node.js ≥ 14** and **npm ≥ 6** installed.

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:20232A,100:61DAFB&height=120&section=footer" alt="Footer Banner" />
  <p>Built with ❤️ by <strong>Loki</strong> &nbsp;·&nbsp; FreeCodeCamp React Curriculum</p>
</div>
