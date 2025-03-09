# Falcon

```markdown
# 🚀 React Component Library + TypeScript + Vite

<div align="center">

![Component Library](https://via.placeholder.com/800x400)

*A modern, customizable UI component library for React applications*

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

## ✨ Project Overview

This project is a modern React component library built with TypeScript and Vite. It showcases a collection of reusable UI components designed with modularity and customization in mind. The library features a variety of interactive components including buttons, chat interfaces, tag selectors, and timers.

## 🎯 Features

| Feature | Description |
|---------|-------------|
| 🖥️ **Interactive Component Showcase** | A visual demonstration of all available components |
| 📱 **Responsive Design** | Components adapt seamlessly to different screen sizes |
| 🎨 **Customizable Styling** | Each component accepts custom classNames and style props |
| 📘 **TypeScript Support** | Full type definitions for enhanced development experience |
| 🧩 **Modular Architecture** | Components can be used independently or combined |

## 🧰 Available Components

### 🔘 Button Component
- Multiple size variants (small, medium, large)
- Support for icons (left, right, or icon-only)
- State handling (hover, selected, disabled)
- Customizable styling

### 💬 Chat UI Components
- Chat bubbles with sender information
- Interactive tag selection within chat flows
- Support for multi-step conversation flows

### 🏷️ Tag Selector
- Single and multi-select modes
- Icon support for visual identification
- Customizable styling for selected/unselected states

### ⏱️ Timer Component
- Countdown functionality with customizable duration
- Visual progress indicator
- Label support

### 📦 Miscellaneous Components
- Square component (with customizable properties)
- More components in development

## 🚦 Getting Started

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to the project directory
cd [your-project-name]

# Install dependencies
npm install
# or
yarn
```

### Quick Start Guide

```bash
# Start the development server
npm run dev
# or
yarn dev

# Build for production
npm run build
# or
yarn build
```

## 📝 Usage Examples

```jsx
import { Button, ChatBubble, TagSelector, Timer } from './components';

function App() {
  return (
    <div className="container">
      {/* Button example */}
      <Button 
        text="Submit" 
        size="medium" 
        icon={<ArrowIcon />} 
      />
      
      {/* Chat bubble example */}
      <ChatBubble 
        text="Hello, world!" 
        senderName="John Doe" 
      />
      
      {/* Tag selector example */}
      <TagSelector 
        tags={[
          { label: "Option 1", icon: <Icon1 /> },
          { label: "Option 2", icon: <Icon2 /> }
        ]}
        multiSelect={false}
      />
      
      {/* Timer example */}
      <Timer 
        label="Countdown" 
        maxTime={60} 
      />
    </div>
  );
}
```

## 🎨 Component Customization

Each component accepts custom styling through className props, allowing them to adapt to your design system:

```jsx
<Button 
  text="Custom Button" 
  className="my-custom-class" 
  style={{ backgroundColor: '#3498db' }}
/>
```

## 🤝 Contributing

Components are actively evolving and open for customization. If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔧 ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // For stricter rules
    ...tseslint.configs.strictTypeChecked,
    // For stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## 🔌 Vite Plugins

Currently, two official Vite plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
```
