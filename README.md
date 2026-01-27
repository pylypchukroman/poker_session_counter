# Session-Based Balance Tracker – Frontend

## Overview

This repository contains the frontend client for **Session-Based Balance Tracker**, a web application that allows users to track their balance across different session types (e.g., cash-style and tournament-style sessions). The frontend communicates with a REST API backend to manage sessions, balances, and user authentication.

The application is built using modern React patterns, TypeScript, and a component-driven UI, with a focus on clean state management and UX.

---

## Tech Stack

- **React** (TypeScript)
- **Vite**
- **Tailwind CSS**
- **shadcn/ui** (UI components)
- **React Query** (data fetching & caching)
- **Axios** (HTTP client)
- **JWT authentication** with refresh token flow
- **Axios interceptor** for token refresh
- **Refresh token stored in cookies** (secure & HttpOnly)
- **Protected routes** with React Router

---

## Core Features

- User registration and login
- Protected routes for authenticated users
- Session creation (cash-style and tournament-style)
- Balance tracking and updates based on sessions
- Automatic token refresh using cookies + Axios interceptor
- Clean UI with responsive layout
- Real-time UI updates using React Query cache invalidation

---

## Project Structure

```text
src/
 ├── api/           # Axios instance and API request functions
 ├── assets/        # Images, icons, and static data
 ├── components/    # Reusable UI components
 ├── context/       # Auth context & global providers
 ├── helpers/       # Helper functions (e.g., filtering)
 ├── hooks/         # Custom hooks (React Query hooks, loaders)
 ├── layouts/       # App layouts (e.g., main layout, auth layout)
 ├── lib/           # External libraries and UI frameworks (shadcn)
 ├── pages/         # Route pages
 ├── routes/        # Route configuration
 ├── types/         # Shared TypeScript types
 ├── App.tsx        # Main app component with routes
 ├── main.tsx       # App entry point
 └── index.css      # Global styles
```
## Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Installation

```bash
git clone https://github.com/pylypchukroman/poker_session_counter.git
cd poker_session_counter
npm install
```

### Environment Variables

Create a .env file in the root directory:
```bash
VITE_API_BASE_URL=http://localhost:3000
```

### Run the App

```bash
npm run dev
```

## Authentication Flow

- The app uses **JWT access tokens** for authentication.
- **Refresh tokens are stored securely** in **HttpOnly cookies**.
- An **Axios interceptor** automatically refreshes the access token when it expires.
- **Protected routes** require a valid access token and will redirect to the login page if the user is not authenticated.

---

## What This Project Demonstrates

This frontend demonstrates:

- Building a modern client using **React and TypeScript**
- **Secure authentication** using JWT and refresh tokens
- **Axios interceptor** implementation for token refresh
- Clean API integration using **React Query**
- **Responsive UI** and component-driven architecture using Tailwind and shadcn/ui
- Production-ready project structure and state management

---

## Future Improvements

Potential enhancements:

- Unit and integration tests
- Improved UI/UX (charts, filters, analytics)
- Offline support and advanced caching strategies
- Dockerized deployment

---

## Author

**Roman Pylypchuk**

This project is part of a personal portfolio and was built to demonstrate frontend engineering skills for real-world applications.
