---
title: 'Mastering Framer Motion'
description: 'A deep dive into creating complex animations and interactions in React applications.'
pubDate: '2025-11-10'
heroImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
category: 'Tutorial'
---

## Getting Started

Framer Motion is a powerful animation library for React. It makes it easy to create complex animations with simple declarative code.

### Basic Animation

```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
/>
```

### Gestures

Framer Motion also supports gestures like hover, tap, and drag.

```jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
/>
```

## Advanced Techniques

For more complex animations, you can use `useAnimation` and `useMotionValue`.
