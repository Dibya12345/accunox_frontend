# Dynamic CSPM Dashboard

A fully customizable, JSON-driven security dashboard built with React that allows users to dynamically add, remove, and manage widgets across different categories.

![Dashboard Preview](https://accunoxdashboard.netlify.app/)

## Features

### Dynamic Widget Management

- **Add Widgets**: Create custom widgets or select from predefined library
- **Remove Widgets**: One-click widget removal with confirmation
- **Search Widgets**: Real-time search through available widgets
- **Category Organization**: Organize widgets into logical categories

### User Interface

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with smooth animations
- **Sidebar Navigation**: Slide-out panel for widget selection
- **Tab Organization**: Categorized widget library (CSPM, CWPP, Image, Ticket)

### 🔧 Technical Features

- **JSON Configuration**: Entire dashboard structure driven by JSON
- **Component Architecture**: Modular, reusable React components
- **State Management**: Efficient React hooks for state handling
- **SCSS Integration**: Component-scoped styling with CSS-in-JS

## 📋 Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Contributing](#contributing)
- [License](#license)

## 🛠 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React 16.8+ (for hooks support)

### Install Dependencies

````bash
# Clone the repository
git clone https://github.com/Dibya12345/accunox_frontend.git
cd accunox_frontend

# Install dependencies
npm install

## Quick Start

### Basic Usage

```jsx
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
````

## Dashboard Configuration

The dashboard is driven by a JSON configuration that defines categories and widgets:

### Basic Structure

```json
{
  "categories": [
    {
      "id": "cspm-executive",
      "name": "CSPM Executive Dashboard",
      "widgets": [
        {
          "id": "cspm-executive",
          "categoryId": "cspm-executive",
          "widget_id": "6f0f03e1-d346-4b4e-bcf2-729f4514c2ef",
          "name": "Cloud Accounts",
          "type": "donut-widget",
          "hidden": false,
          "segments": [
            { "percentage": 50, "color": "#4285f4" },
            { "percentage": 50, "color": "#e8eaed" }
          ],
          "items": [
            { "color": "#4285f4", "label": "Connected (2)" },
            { "color": "#e8eaed", "label": "Not Connected (2)" }
          ]
        },
        {
          "id": "cspm-executive",
          "categoryId": "cspm-executive",
          "widget_id": "8433fd52-609c-45e5-b092-d509c6e6a664",
          "name": "Cloud Account Risk Assessment",
          "type": "donut-widget",
          "hidden": false,
          "segments": [
            { "percentage": 17, "color": "#ea4335" },
            { "percentage": 7, "color": "#fbbc04" },
            { "percentage": 1, "color": "#9aa0a6" },
            { "percentage": 75, "color": "#34a853" }
          ],
          "items": [
            { "color": "#ea4335", "label": "Failed (1689)" },
            { "color": "#fbbc04", "label": "Warning (681)" },
            { "color": "#9aa0a6", "label": "Not available (36)" },
            { "color": "#34a853", "label": "Passed (7253)" }
          ]
        }
      ]
    }
  ]
}
```

## Development

### Project Structure

```
src/
├── assets/
├── components/
├── pages/
├── store/
└── utils/
    └── index.js             # Utility functions
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
