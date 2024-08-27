---
sidebar_position: 4
---

# CSS Modules

A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. This approach minimizes the risk of conflicts by transforming class names into a unique format when compiled. CSS Modules allow for better maintainability and modularity of your CSS.

## Benefits of CSS Modules

- **Scoped Styles**: Styles are scoped to the component rather than being global, preventing conflicts and unintended style overrides.
- **Maintainability**: Easier to manage and maintain CSS as it is tightly coupled with the component it styles.
- **Modularity**: Encourages modular design by keeping styles with their respective components.
- **Auto-generated Unique Class Names**: Ensures that class names are unique across the application, avoiding clashes.

For more details on the benefits of CSS Modules, check out this [blog post on CSS Modules](https://blog.openreplay.com/benefits-of-css-modules/?ref=dailydev).

## How CSS Modules Work

CSS Modules work by transforming CSS class names into unique identifiers. When you use a CSS Module in your component, the class names you write are automatically scoped locally to that component. For example, a class name `.button` might be transformed into `.button__abc123` to ensure uniqueness.

## Basic Example

Here’s a simple example to demonstrate how CSS Modules are used in a React project.

### 1. Create a CSS Module

Create a file named `Button.module.css` with the following content:

```css
/* Button.module.css */
.button {
  background-color: #007acc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #005fa3;
}

.primary {
  background-color: #007acc;
}

.secondary {
  background-color: #e0e0e0;
  color: #333;
}
```
### 2. Create a Dynamic Button Component

Create a file named `DynamicButton.js` with the following content:

```jsx
import React from 'react';
import styles from './Button.module.css';

const DynamicButton = ({ primary }) => {
  return (
    <button className={primary ? styles.primary : styles.secondary}>
      Click Me
    </button>
  );
};

export default DynamicButton;


```