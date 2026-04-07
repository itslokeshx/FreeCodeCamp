# FreeCodeCamp React Learning Projects

A collection of hands-on React projects built while completing the FreeCodeCamp curriculum. This repository demonstrates progressive learning from fundamental React concepts to advanced state management, hooks, and routing.

---

## Overview

This repository contains mini-projects organized into learning modules, each focusing on specific React concepts and patterns. Each project is self-contained and can be run independently.

## Tech Stack

- **React** - Component-based UI library
- **JSX** - JavaScript XML syntax for component templating
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Modern JavaScript features
- **Fetch API** - For asynchronous data fetching

---

## Project Structure

### React Fundamentals

Projects focused on component composition, props, and basic JSX syntax.

| Project                            | Description                                                         | Concepts                                                                            |
| ---------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Reusable ProfileCard Component** | A card component displaying user profiles with name, title, and bio | Component composition, props, mapping data, reusable components                     |
| **Reusable Footer**                | Multi-column footer with navigation links and social icons          | Component structure, CSS styling, semantic HTML                                     |
| **Mega Navbar**                    | Navigation bar with dropdown submenu support                        | Navigation patterns, submenu handling, accessibility attributes                     |
| **Mood Board (Lab)\*\***           | Visual mood board showcasing destination images with color themes   | Component composition, passing props (color, image, description), styled components |

### React State, Hooks and Routing

Projects demonstrating state management, React Hooks, and interactive functionality.

| Project                        | Description                                      | Concepts                                                                    |
| ------------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------- |
| **Color Picker App**           | Interactive color picker with live preview       | `useState` hook, controlled inputs, dynamic inline styles                   |
| **Toggle Text App**            | Show/hide message toggle functionality           | `useState` hook, conditional rendering, event handling                      |
| **Fruit Search App**           | Real-time fruit search with debounced API calls  | `useState`, `useEffect`, fetch API, debouncing, async/await                 |
| **OTP Generator**              | One-time password generator with countdown timer | `useState`, `useEffect`, `useRef`, timers, interval cleanup                 |
| **Superhero Application Form** | Application form for superhero registration      | `useState`, form handling, controlled inputs, checkbox arrays, form validation |
| **Event RSVP Form (Lab)**      | Event registration form with confirmation display  | `useState`, form handling, controlled inputs, conditional rendering           |
| **Shopping List**              | Filterable shopping list with item selection     | `useState`, `useMemo`, `useCallback`, filtering, checkbox state               |

---

## Project Details

### React Fundamentals

#### Reusable ProfileCard Component

A flexible card component that displays profile information. Demonstrates:

- Creating reusable UI components with props
- Mapping through arrays to render multiple components
- Flexbox layout for responsive card arrangement

#### Reusable Footer

A professional multi-section footer featuring:

- Organized link columns
- Copyright section
- Social media icon links
- Semantic HTML structure

#### Mega Navbar

A navigation component with dropdown support:

- Accessible navigation with ARIA attributes
- Submenu support for nested navigation
- Clean hover interactions

#### Mood Board (Lab)

A creative visual component for inspiration:

- Grid layout for visual items
- Custom color-coded backgrounds
- Image and text composition
- Responsive design

### React State, Hooks and Routing

#### Color Picker App

Interactive color selection tool:

- Native HTML5 color input
- Live background color updates
- State synchronization with UI

#### Toggle Text App

Simple visibility toggle demonstrating:

- Boolean state management
- Conditional rendering patterns
- Dynamic button text

#### Fruit Search App

Search functionality with FreeCodeCamp's fruit API:

- Debounced search input (700ms delay)
- Real-time API fetching
- Loading states and error handling
- Results display

#### OTP Generator

Secure one-time password generator:

- Random 6-digit code generation
- Countdown timer with visual feedback
- Button state management (disabled during active OTP)
- Auto-expiration handling

#### Superhero Application Form

A form for aspiring superheroes to register:

- Controlled form inputs (text, password, select, checkboxes)
- Dynamic checkbox arrays for power selection
- Form validation with submit button disabled state
- Multiple input types demonstration

#### Event RSVP Form (Lab)

Event registration with confirmation display:

- Multi-field form with validation
- Conditional rendering of confirmation summary
- Text, email, number, and checkbox inputs
- Post-submit data display

#### Shopping List

Filterable shopping list with memoization optimization:

- Real-time filtering with `useMemo`
- Optimized callback functions with `useCallback`
- Checkbox selection with visual strike-through
- Search input with accessible labels

---

**Author:** Loki
