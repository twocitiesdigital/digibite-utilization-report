# DigiBite 2.0 Utilization Report Dashboard

This project is a React-based dashboard that visualizes dental utilization data for the DigiBite 2.0 platform. It provides insights into dental utilization patterns across different population segments and chronic conditions.

## Features

- Interactive visualization of dental utilization data
- Population breakdown by member type (Medicare, Commercial, Individual, Embedded)
- Chronic condition-specific utilization rates
- Multi-year utilization trends
- Detailed tabular data view with breakdowns by condition
- Responsive design that works on desktop and mobile devices

## Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd utilization-report-2
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Technologies Used

- React.js - UI framework
- Recharts - Charting library
- Tailwind CSS - Utility-first CSS framework

## Data Structure

The application uses sample data that follows this structure:

- Population segments (Medicare, Commercial, Individual, Embedded)
- Utilization rates by time period (1-year, 2-year, 3-year)
- Chronic condition breakdowns
- Member counts and percentages

In a production environment, this data would be fetched from an API or backend service.

## Project Structure

- `src/components/` - React components
- `src/App.js` - Main application component
- `src/index.js` - Application entry point

## License

This project is proprietary and confidential to DigiBite.
