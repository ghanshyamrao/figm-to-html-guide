---
sidebar_position: 2
---

# Font Setup

Properly setting up fonts enhances the visual appeal and readability of your React project. This guide will help you import and use custom fonts in your project.

## Steps to Set Up Fonts

### 1. Choose Your Fonts

Select the fonts you want to use from a font service like [Google Fonts](https://fonts.google.com/) or download font files (.ttf or .otf) from a font provider.

### 2. Download Font Files

If downloading fonts:
- Obtain the font files, typically in `.ttf` or `.otf` format.

If using a font service:
- Follow the service’s instructions to include the fonts in your project, often by adding a link or `@import` rule to your CSS.

### 3. Import Font Files

You have two main options for importing fonts into your project:

#### Option 1: Directly in CSS

1. **Create a Fonts Directory**: Place your downloaded font files in a folder called `fonts` within your project directory.

2. **Define the Font Face**: Add the `@font-face` rule in your CSS file to import the fonts.

#### Option 2: Using a CSS-in-JS Solution

If using Styled Components or Emotion, import fonts directly in your JavaScript files.

### Example CSS Setup

Here’s how to set up custom fonts using CSS:

```css
/* Import the custom font */
@font-face {
  font-family: 'CustomFont';
  src: url('./fonts/CustomFont-Regular.ttf') format('truetype');
  /* Add additional font weights and styles if necessary */
}

/* Apply the custom font */
body {
  font-family: 'CustomFont', sans-serif;
}

h1 {
  font-family: 'CustomFont', sans-serif;
  font-size: 2rem;
}

p {
  font-family: 'CustomFont', sans-serif;
  font-size: 1rem;
}
```

### Integrating Live Examples

wip....
<!-- 
- **[CodePen](https://codepen.io/pen/)**: Create a live demo and share the link.
- **[JSFiddle](https://jsfiddle.net/)**: Another option for live code demos.
- **[Codesandbox](https://codesandbox.io/)**: For more complex setups, especially if you use React. -->
