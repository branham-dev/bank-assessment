# Bank Balance Inquiry Assessment
A mock balance inquiry application developed as part of the Mobo Bank technical assessment. The application demonstrates a full-stack architecture using React, Redux Toolkit Query, Hono, and TypeScript.

## Features
- Balance inquiry form
- Mock backend API
- Dynamic balance response
- RTK Query integration
- Mobile-friendly design

## Architecture
The application is organized as a full-stack monorepo comprising a `React` frontend and a `Hono` backend. The frontend provides a responsive balance inquiry interface where users can submit inquiry details, while the backend exposes a `REST API` that returns a mock balance response. 

API communication is handled using `Redux Toolkit Query (RTK Query)`, providing efficient data fetching and caching. The project is designed to simulate the balance inquiry flow of a banking application while maintaining a clear separation between the presentation layer and the API layer.

## Design Decisions
- **Transaction Reference** and **Transaction Code** are displayed as read-only because they typically originate from the initiating transaction.
- **Phone Number**, **Account Name**, and **Amount** are editable to allow different balance inquiry scenarios to be simulated during testing.
- The backend returns a mock balance response, with balance values derived from the submitted amount to simulate realistic interactions.

## Tech Stack

### Frontend

- React
- TypeScript
- Redux Toolkit Query

### Backend
- Hono
- Node.js
- TypeScript

## Project Structure

```

├── apps
│   ├── api
│   │   ├── src
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web
│       ├── src
│       ├── package.json
│       └── vite.config.ts
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation
Install the project dependencies:

```bash
pnpm install
```

## Environment Variables
### Frontend

```env
VITE_API_URL=http://localhost:3500
```
### Backend

```env
PORT=3500
```

## Running the Application
### Frontend
```bash
pnpm run dev:web
```
### Backend
```bash
pnpm run dev:api
```

## Live Demo
<!-- ### Frontend
https://bankbalance.branhamkaranja.com
### Backend
https://bank-assessment-mdze.onrender.com -->

**Frontend:** [Bank Balance UI](https://bankbalance.branhamkaranja.com)\
**Backend:** [Balance API](https://bank-assessment-mdze.onrender.com)

## Repository

This project is organized as a `pnpm workspace` containing separate frontend and backend applications.