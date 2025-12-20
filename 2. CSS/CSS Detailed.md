# CSS Detailed

# **📌 Chapter 1: Introduction to CSS**

### **What is CSS?**

CSS (Cascading Style Sheets) is used to style and design web pages. It controls the layout, colors, fonts, spacing, responsiveness, animations, etc.

### **Why is CSS Important in Real Projects?**

- Separates structure (HTML) from design (CSS)
- Makes UI consistent across pages
- Enables responsive websites
- Allows animations, transitions, modern layouts
- Used in all modern frameworks (React, Angular, Vue)

---

# **📌 Chapter 2: CSS Boilerplate (Basic Structure)**

Basic structure of a CSS file:

```css
/* This is a CSS Boilerplate */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

```

### **💡 Explanation**

- → universal selector (applies to all elements)
- `margin: 0; padding: 0;` → resets default browser spacing
- `box-sizing: border-box;` → makes layout predictable

This is included in almost every project.

---

# **📌 Chapter 3: Types of CSS**

## **① Inline CSS (Highest Priority)**

Applied directly into HTML element.

```html
<h1 style="color: red;">Hello</h1>

```

## **② Internal CSS (Medium Priority)**

Defined inside `<style>` tag in `<head>`.

```html
<style>
  h1 { color: blue; }
</style>

```

## **③ External CSS (Lowest Priority)**

This is industry standard.

```
<link rel="stylesheet" href="style.css">

```

✔ Best practice

✔ Keeps code clean

✔ Used in all major projects

---

# **📌 Chapter 4: CSS Selectors**

Selectors decide *which elements* you want to style.

## **1. Universal Selector**

```css
* { margin: 0; padding: 0; }

```

## **2. Element Selector**

```css
p { color: blue; }

```

## **3. Class Selector**

```css
.box { background: yellow; }

```

```html
<div class="box"></div>

```

## **4. ID Selector**

```css
#title { font-size: 30px; }

```

IDs should be unique.

## **5. Grouping Selector**

```css
h1, p, span {
  color: green;
}

```

## **6. Descendant Selector**

```css
div p { color: purple; }

```

## **7. Child Selector**

```css
div > p { color: red; }

```

## **8. Sibling Selector**

```css
h1 + p  /* next sibling */
h1 ~ p  /* all siblings */

```

---

# **📌 Chapter 5: CSS Properties**

Core properties used everywhere:

- width / height
- color / background-color
- font-size / font-weight
- padding
- margin
- border
- display
- position
- flex
- units
- text properties
- box model

---

# **📌 Chapter 6: Units in CSS**

## **1. px (Pixels)**

Fixed, doesn't shrink in responsive design.

## **2. % (Percentage)**

Relative to parent element.

## **3. vw / vh (Viewport Width & Height)**

Responsive unit.

- `100vw` = full width of screen
- `100vh` = full height of screen

Used for hero sections.

## **4. em**

Relative to parent font-size.

```css
div { font-size: 20px; }
p { font-size: 2em; }  /* 40px */

```

## **5. rem**

Relative to root `<html>` font-size.

This is used in REAL PROJECTS because it is consistent.

---

# **📌 Chapter 7: Colors & Backgrounds**

## **Color formats**

- color names → `red`, `blue`
- rgb → `rgb(255,0,0)`
- rgba → `rgba(0,0,0,0.5)`
- hex → `#ff0000`

## **Background properties**

```css
background-color
background-image
background-repeat
background-size
background-position

```

Example:

```css
background: url("banner.jpg") center/cover no-repeat;

```

---

# **📌 Chapter 8: Font & Text Properties**

## **Font Family**

Two main types:

- Serif → fonts with edges
- Sans-serif → clean modern fonts

```css
font-family: "Poppins", sans-serif;

```

## **Font Properties**

```css
font-size
font-weight
font-style
line-height
text-align
text-transform
text-decoration
letter-spacing
word-spacing

```

Example:

```css
p {
  text-transform: uppercase;
  text-decoration: underline;
  line-height: 1.6;
}

```

---

# **📌 Chapter 9: Box Model (VERY IMPORTANT)**

Every element has:

```
margin
border
padding
content

```

## Padding

Inside spacing

## Margin

Outside spacing

## Border

Line around element

```css
border: 2px solid black;
padding: 20px;
margin: 10px;

```

---

# **📌 Chapter 10: Display Property**

### **1. Block**

Takes full width

Examples: div, h1, p

### **2. Inline**

Takes only required width

Examples: span, a

❌ Cannot change width/height of inline elements

### **3. Inline-block**

Can change width + height while staying inline

### **4. None**

Hide element completely

---

# **📌 Chapter 11: CSS Positioning**

## **1. Static** (default)

## **2. Relative**

Moves from its normal position — but still occupies space.

## **3. Absolute**

Moves freely using `top`, `left`, `right`, `bottom`

🔥 Absolute works inside the nearest *relative parent*

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 20px;
  left: 30px;
}

```

## **4. Fixed**

Sticks to viewport (used for navbar)

```css
position: fixed;
top: 0;

```

## **5. Sticky**

Behaves like relative + fixed

Used for sticky headers.

---

# **📌 Chapter 12: FLEXBOX (Most Used in Industry)**

Flexbox makes layout easy and responsive.

Apply on *parent*:

```css
.container {
  display: flex;
}

```

## **Main Flex Properties**

### **1️⃣ flex-direction**

```
row (default)
column
row-reverse
column-reverse

```

### **2️⃣ justify-content**

Aligns items on **main axis** (horizontal)

```
center
space-between
space-around
flex-start
flex-end

```

### **3️⃣ align-items**

Aligns items on **cross axis** (vertical)

```
center
flex-start
flex-end
baseline

```

### **4️⃣ gap**

Space between flex items

```css
gap: 20px;

```

---

# **📌 Chapter 13: Flexbox Child Properties**

### **flex-grow**

Expand item

### **flex-shrink**

Shrink item

### **flex-basis**

Initial width

Shortcut:

```css
flex: 1;

```

---

# **📌 Chapter 14: CSS Grid (Advanced Layout)**

(Used in dashboards, ecommerce layouts)

Enable grid:

```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;

```

Grid items can span rows/columns:

```css
grid-column: span 2;
grid-row: span 2;

```

---

# **📌 Chapter 15: Pseudo Classes**

Change style based on **state**.

### Common examples:

```css
a:hover
input:focus
button:active
li:first-child
li:last-child
p:nth-child(2)

```

---

# **📌 Chapter 16: Pseudo Elements**

Affects **part** of an element.

### Examples:

```css
p::first-line
p::first-letter
h1::before
h1::after
::selection

```

Example:

```css
h1::before {
  content: "✨ ";
}

```

---

# **📌 Chapter 17: CSS Shadows**

### Text Shadow

```css
text-shadow: 2px 2px 5px black;

```

### Box Shadow

```css
box-shadow: 0 4px 10px rgba(0,0,0,0.3);

```

---

# **📌 Chapter 18: CSS Transitions (Smooth Animation)**

Used for hover effects.

```css
button {
  transition: 0.3s;
}
button:hover {
  transform: scale(1.1);
}

```

---

# **📌 Chapter 19: CSS Transform**

```css
transform: scale()
transform: rotate()
transform: translate()
transform: skew()

```

---

# **📌 Chapter 20: CSS Animations**

```css
@keyframes move {
  from { left: 0; }
  to { left: 100px; }
}

.box {
  animation: move 2s infinite;
}

```

---

# **📌 Chapter 21: Responsive Design**

### **Most important real-life concepts**

### **1. Media Queries**

```css
@media (max-width: 768px) {
  .container { flex-direction: column; }
}

```

### **2. Mobile-first design**

Write CSS for small screens first.

### **3. Using relative units**

Use `%`, `vw`, and `rem` instead of `px`.

### **4. Flexbox + Grid for layouts**

---

# **📌 Chapter 22: CSS Variables (Used in Real Projects)**

```css
:root {
  --main-color: #007bff;
  --font-size: 16px;
}

button {
  color: var(--main-color);
  font-size: var(--font-size);
}

```

---

# **📌 Chapter 23: Modern CSS Features**

- `clamp()` for responsive font-size
- Aspect ratio
- Container queries
- Backdrop-filter (blur background)
- Scroll behavior
- Dark mode with CSS variables

---

# **📌 Chapter 24: Best Practices in Industry**

✔ Use external CSS

✔ Use rem for font sizes

✔ Use flexbox/grid instead of float

✔ Use classes, avoid styling IDs

✔ Use CSS variables

✔ Use meaningful class names (BEM Naming)

Example:

```
header__logo
card__title
button--primary

```

---

# **📌 Chapter 25: Complete CSS Cheat Sheet (Revision)**

- Selectors ✔
- Units ✔
- Box model ✔
- Colors & background ✔
- Font & text ✔
- Display ✔
- Position ✔
- Flexbox ✔
- Grid ✔
- Pseudo classes ✔
- Pseudo elements ✔
- Transitions ✔
- Animations ✔
- Media queries ✔
- Variables ✔