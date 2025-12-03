# Delicatesse Al Assi Shop - React App

A React application for the Delicatesse Al Assi Shop, converted from the original HTML/CSS/JS implementation.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy the images folder to the public directory:
   ```bash
   # On Windows (Git Bash or PowerShell)
   cp -r images public/images
   
   # Or manually copy the images folder to public/images
   ```
   
   The app expects these images in `public/images/`:
   - logo.png
   - Natural.png
   - Local.png
   - Traditional.png
   - Wheat.png
   - Labneh.png
   - Laundry.png
   - Herbal.png
   - NaturalHand.png
   - Group 641.png (for the hero background)

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## Project Structure

```
src/
  components/
    Header.js          # Navigation header
    Hero.js            # Hero banner section
    Shop.js            # Main shop page component
    ProductCard.js     # Individual product card component
    FilterSidebar.js   # Filter sidebar component
    RecommendedProducts.js  # Recommended products section
    Footer.js          # Footer component
  App.js               # Main app component
  App.css              # App styles
  index.js             # Entry point
  index.css            # Global styles
  shop.css             # Shop-specific styles
public/
  images/              # Image assets
  index.html           # HTML template
```

## Features

- React component-based architecture
- Interactive product cards with click states
- Filter sidebar with checkboxes and slider
- Search functionality
- Keyword tags with removal
- Pagination controls
- Responsive design

## Notes

- The images folder should be copied to `public/images/` for the app to work correctly
- All original functionality has been preserved and converted to React hooks and state management

