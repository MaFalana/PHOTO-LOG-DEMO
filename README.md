# Photo Log

A construction progress tracking application that combines interactive mapping with photo documentation. Built with Astro, React, and Python FastAPI.

## Features

- Photo upload and management with geolocation
- Interactive map with photo markers using Leaflet
- Zoom and pan functionality in photo lightbox viewer
- Map viewport-based photo filtering
- Date and tag filtering
- Batch operations (select, export, delete)
- Export functionality (ZIP, KML, KMZ)
- Marker clustering for better map performance
- Multiple base layer options (streets, satellite)

## Tech Stack

### Frontend
- **Astro** - Static site generator with React integration
- **React 19** - UI components
- **Leaflet** - Interactive maps
- **react-leaflet** - React bindings for Leaflet
- **react-zoom-pan-pinch** - Image zoom and pan interactions

### Backend
- **Python FastAPI** - REST API
- **uvicorn** - ASGI server

### Monorepo Structure
- `apps/web` - Astro frontend application
- `apps/api` - Python FastAPI backend
- `packages/` - Shared React components
  - `assets` - Static assets
  - `header` - Header component
  - `map` - Map component with bounds tracking
  - `panel` - Side panel component
  - `photo-panel` - Photo browser with zoom/pan
  - `ui` - Shared UI components

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Python 3.8+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both `apps/web` and `apps/api`
   - Configure your environment variables

### Development

Run both frontend and backend:
```bash
npm run dev
```

Or run them separately:
```bash
# Frontend only
npm run dev:web

# Backend only
npm run dev:api
```

The frontend will be available at `http://localhost:4321` and the API at `http://localhost:8000`.

### Build

Build the frontend for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:web` - Start frontend only
- `npm run dev:api` - Start backend only
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run assets:sync` - Sync assets across packages

## Recent Updates

See [CHANGELOG.md](CHANGELOG.md) for detailed release notes.

### Latest Features
- Zoom and pan functionality in photo lightbox
- Map viewport-based photo filtering
- Real-time photo list updates as you pan and zoom the map
- Enhanced lightbox with full image viewing capabilities

## Contributing

1. Create a feature branch from `dev`
2. Make your changes
3. Submit a pull request to `dev`

## License

Demo project for portfolio.

