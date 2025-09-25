# Dark Mode Implementation

This document explains how dark mode was implemented in the Issue Tracker application.

## Implementation Approach

The dark mode implementation uses Tailwind CSS's built-in dark mode functionality with the `class` strategy. This approach allows us to:

1. Toggle dark mode by adding/removing the `dark` class to the root HTML element
2. Use Tailwind's `dark:` variant to apply different styles in dark mode
3. Maintain a single CSS file while supporting both themes

## Key Components

### 1. Tailwind Configuration

In `tailwind.config.js`, we've enabled dark mode with the `class` strategy:

```js
module.exports = {
  darkMode: 'class',
  // ... other configuration
}
```

### 2. Dark Mode Toggle

The dark mode toggle is implemented in `App.jsx`:

```jsx
const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);
```

### 3. Dark Mode Styling

For each component, we've added dark mode variants to existing Tailwind classes. For example:

```jsx
// Light mode only
<button className="bg-white text-gray-900">Button</button>

// With dark mode support
<button className="bg-white text-gray-900 dark:bg-gray-700 dark:text-white">Button</button>
```

## Color Palette

We've used Tailwind's default color palette with appropriate adjustments for dark mode:

| Element | Light Mode | Dark Mode |
|--------|------------|-----------|
| Background | `bg-white` | `bg-gray-800` |
| Text | `text-gray-900` | `text-white` |
| Borders | `border-gray-200` | `border-gray-700` |
| Cards | `bg-white` | `bg-gray-800` |
| Status Badges | `bg-{color}-100 text-{color}-800` | `bg-{color}-900 text-{color}-200` |

## Components Updated for Dark Mode

1. **App.jsx** - Header with dark mode toggle button
2. **IssueList.jsx** - Table, filters, and pagination
3. **IssueDetail.jsx** - Information cards and raw data display
4. **CreateIssueForm.jsx** - Form elements and controls
5. **EditIssueForm.jsx** - Form elements and controls

## User Experience

- The dark mode toggle is placed in the header for easy access
- All UI elements have appropriate contrast in both modes
- Consistent styling across all components
- Smooth transitions between themes

## Benefits

1. **Accessibility**: Improved readability in low-light environments
2. **User Preference**: Allows users to choose their preferred theme
3. **Eye Strain**: Reduces eye strain during extended use
4. **Battery Life**: Can reduce battery consumption on OLED screens

## Future Improvements

1. **System Preference**: Automatically detect and respect system dark mode preference
2. **Persistence**: Save user's theme preference in localStorage
3. **Animations**: Add smooth transitions when switching themes