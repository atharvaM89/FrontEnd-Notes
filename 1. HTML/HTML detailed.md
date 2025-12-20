# HTML detailed

# **1. Introduction to HTML**

### **1.1 What is HTML?**

- **Definition**: HTML (HyperText Markup Language) is the **standard markup language used to create web pages**. It structures content and tells browsers how to display text, images, links, and other elements.
- **Core Concept**: HTML is **not a programming language**, but a **markup language** — it describes **what content is**, not **how it behaves**.

**Analogy**: Think of HTML as the **skeleton of a human body**. CSS is the **skin, hair, and clothes**, and JavaScript is the **muscles and brain** that make it move and respond.

---

### **1.2 History of HTML**

| Version | Year | Key Features |
| --- | --- | --- |
| HTML 1.0 | 1991 | Basic structure, headings, paragraphs, links. |
| HTML 2.0 | 1995 | Forms, tables, text alignment. |
| HTML 3.2 | 1997 | Scripts, applets, style support. |
| HTML 4.01 | 1999 | Separation of content and presentation, CSS support. |
| XHTML 1.0 | 2000 | XML-based stricter syntax. |
| HTML5 | 2014 | Multimedia support (audio/video), semantic tags, canvas, APIs. |

---

### **1.3 Purpose of HTML**

- Structuring web content.
- Ensuring accessibility for users and search engines.
- Providing semantic meaning for SEO and screen readers.
- Serving as a foundation for styling (CSS) and interactivity (JS).

---

### **1.4 Structure of an HTML Document**

Every HTML page follows this **basic structure**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML document.</p>
</body>
</html>

```

**Explanation:**

- `<!DOCTYPE html>` → Declares the document as HTML5.
- `<html>` → Root element of an HTML page.
- `<head>` → Metadata: title, CSS links, scripts.
- `<body>` → Visible content of the page.

---

### **1.5 HTML vs XHTML vs HTML5**

| Feature | HTML | XHTML | HTML5 |
| --- | --- | --- | --- |
| Syntax | Lenient, forgiving | Strict, XML-compliant | Lenient + advanced features |
| Case sensitivity | Not case-sensitive | Case-sensitive | Not case-sensitive |
| Closing tags | Optional for some | Mandatory | Optional for some |
| Multimedia support | Limited | Limited | Native audio/video |
| APIs | None | None | Canvas, Geolocation, Web Storage, etc. |

**Key takeaway:** HTML5 is modern, powerful, and backward-compatible.

---

# **2. Basic HTML Elements**

### **2.1 Headings**

- HTML provides **6 levels of headings**: `<h1>` (largest) to `<h6>` (smallest).
- **Semantic importance**: Search engines and screen readers use headings for structure.

```html
<h1>Main Title</h1>
<h2>Subsection</h2>
<h3>Sub-subsection</h3>

```

**Best Practices:**

- Use headings hierarchically (`h1` → `h2` → `h3`).
- Avoid skipping levels for better accessibility.

**Mini Quiz:**

1. Which tag represents the largest heading?
2. Why are headings important for SEO?

---

### **2.2 Paragraphs**

- `<p>` is used to define a paragraph of text.
- Browsers automatically add spacing before and after paragraphs.

```html
<p>This is a paragraph of text, explaining a concept in detail.</p>

```

**Pitfall:** Avoid using `<br>` for spacing; use proper paragraph structure.

---

### **2.3 Text Formatting Tags**

| Tag | Purpose | Example |
| --- | --- | --- |
| `<b>` | Bold text (visual) | `<b>Bold</b>` |
| `<strong>` | Strong importance (semantic + bold) | `<strong>Important</strong>` |
| `<i>` | Italic text (visual) | `<i>Italic</i>` |
| `<em>` | Emphasis (semantic + italic) | `<em>Emphasized</em>` |
| `<u>` | Underline | `<u>Underlined</u>` |
| `<mark>` | Highlighted text | `<mark>Highlighted</mark>` |
| `<small>` | Smaller text | `<small>Fine print</small>` |

**Tip:** Use semantic tags (`strong`, `em`) over visual tags (`b`, `i`) for accessibility.

---

### **2.4 Lists**

### **2.4.1 Ordered List**

```html
<ol>
    <li>HTML Basics</li>
    <li>CSS Basics</li>
    <li>JavaScript Basics</li>
</ol>

```

### **2.4.2 Unordered List**

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

```

### **2.4.3 Definition List**

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>

```

**Quiz:** When would you use a `<dl>` instead of `<ul>`?

---

### **2.5 Links**

- `<a>` (anchor) tag creates hyperlinks.
- **Attributes**:
    - `href` → destination URL
    - `target` → `_blank` (new tab), `_self` (same tab)
    - `title` → tooltip

```html
<a href="https://www.google.com" target="_blank" title="Go to Google">Visit Google</a>

```

**Tip:** Always use descriptive text for accessibility.

---

### **2.6 Images**

- `<img>` displays images; it's a **void/self-closing tag**.
- **Attributes**:
    - `src` → image URL
    - `alt` → alternative text for accessibility
    - `width` / `height` → size
    - `title` → tooltip

```html
<img src="logo.png" alt="Company Logo" width="200" height="100" title="Logo">

```

**Best Practice:** Always include `alt` for SEO & accessibility.

---

### **2.7 Tables**

- Used for **tabular data**, not for layout.
- Core tags: `<table>`, `<tr>` (row), `<td>` (cell), `<th>` (header), `<caption>`.

```html
<table border="1">
    <caption>Student Marks</caption>
    <tr>
        <th>Name</th>
        <th>Math</th>
        <th>Science</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>90</td>
        <td>85</td>
    </tr>
</table>

```

- **Advanced attributes**:
    - `colspan` → merge columns
    - `rowspan` → merge rows

```html
<td colspan="2">Merged Cell</td>

```

**Pitfall:** Never use tables for page layout; it's bad for accessibility and SEO.

# **3. Forms and Input Elements**

HTML forms allow **user interaction and data submission** to web servers. They are **core to web applications**, from login pages to search bars.

---

### **3.1 The `<form>` Tag**

- Container for all form elements.
- **Key Attributes**:
    
    
    | Attribute | Purpose | Example |
    | --- | --- | --- |
    | `action` | URL where form data is sent | `<form action="/submit">` |
    | `method` | HTTP method (`GET` or `POST`) | `<form method="POST">` |
    | `autocomplete` | Enable/disable autofill | `autocomplete="off"` |
    | `novalidate` | Skip browser validation | `<form novalidate>` |

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Submit</button>
</form>

```

**Explanation:**

- `id` + `for` in `<label>` improves accessibility.
- `method="POST"` sends data securely.
- `<button type="submit">` triggers form submission.

---

### **3.2 Input Elements**

### **3.2.1 Text Input**

```html
<input type="text" name="username" placeholder="Enter your username" required>

```

- `placeholder` → shows hint text.
- `required` → field must be filled before submission.

### **3.2.2 Password**

```html
<input type="password" name="password" placeholder="Enter password" required>

```

- Masks input for privacy.

### **3.2.3 Radio Buttons**

```html
<label><input type="radio" name="gender" value="male"> Male</label>
<label><input type="radio" name="gender" value="female"> Female</label>

```

- Allows **single selection** among multiple options.

### **3.2.4 Checkboxes**

```html
<label><input type="checkbox" name="hobby" value="reading"> Reading</label>
<label><input type="checkbox" name="hobby" value="sports"> Sports</label>

```

- Allows **multiple selections**.

### **3.2.5 Email & Number**

```html
<input type="email" name="email" placeholder="Enter your email">
<input type="number" name="age" min="1" max="120">

```

- Browser performs **basic validation** automatically.

### **3.2.6 Date Picker**

```html
<input type="date" name="dob">

```

- Native calendar selection in HTML5.

### **3.2.7 Textarea**

```html
<textarea name="message" rows="5" cols="30" placeholder="Type your message"></textarea>

```

- Multi-line input.

### **3.2.8 Dropdown (Select)**

```html
<label for="country">Country:</label>
<select name="country" id="country">
    <option value="india">India</option>
    <option value="usa">USA</option>
    <option value="uk">UK</option>
</select>

```

### **3.2.9 Button**

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>

```

---

### **3.3 Form Validation Basics**

- HTML5 offers **built-in validation** via input types and attributes.
- **Common Attributes**:
    - `required` → mandatory field
    - `pattern` → regex validation
    - `min`, `max`, `maxlength`, `minlength`
- Example: Only allow 5-digit numbers:

```html
<input type="text" pattern="\d{5}" title="Enter 5 digits" required>

```

**Best Practices:**

- Always use `label` for accessibility.
- Use semantic input types for better UX and validation.
- Combine **HTML validation** with **server-side validation** for security.

---

# **4. HTML5 Semantic Elements**

Semantic HTML gives **meaning** to the content, helping browsers, developers, and assistive technologies understand the structure.

---

### **4.1 Common Semantic Tags**

| Tag | Purpose | Example |
| --- | --- | --- |
| `<header>` | Introductory content, navigation, logo | `<header><h1>Website Title</h1></header>` |
| `<footer>` | Bottom of the page, contact info | `<footer>&copy; 2025 Company</footer>` |
| `<nav>` | Navigation links | `<nav><a href="/">Home</a></nav>` |
| `<main>` | Main content of the page | `<main><article>...</article></main>` |
| `<section>` | Thematic grouping | `<section><h2>About Us</h2></section>` |
| `<article>` | Self-contained content | `<article><h2>Blog Post</h2></article>` |
| `<aside>` | Side content, ads, or references | `<aside>Related Articles</aside>` |

**Visual Analogy**:

- `<header>` → **roof**
- `<footer>` → **basement**
- `<nav>` → **hallways**
- `<main>` → **living room**
- `<aside>` → **side table**

---

### **4.2 Advantages of Semantic HTML**

1. **Improves accessibility**: Screen readers can navigate easily.
2. **SEO-friendly**: Search engines understand content hierarchy.
3. **Cleaner code**: Easier to maintain.
4. **Future-proofing**: Modern browsers support semantic tags natively.

---

### **4.3 Example: Semantic Page Structure**

```html
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>
    <main>
        <section>
            <h2>About Us</h2>
            <p>Company information goes here.</p>
        </section>
        <article>
            <h2>Latest Blog Post</h2>
            <p>Blog content here.</p>
        </article>
    </main>
    <aside>
        <h3>Related Links</h3>
        <p>Links to resources.</p>
    </aside>
    <footer>
        <p>&copy; 2025 My Company</p>
    </footer>
</body>

```

# **5. Multimedia in HTML5**

HTML5 provides **native support for multimedia**, eliminating the need for plugins like Flash.

---

### **5.1 Audio Element (`<audio>`)**

- Used to embed audio files.
- **Key Attributes**:
    
    
    | Attribute | Purpose |
    | --- | --- |
    | `src` | Path to audio file |
    | `controls` | Show play/pause controls |
    | `autoplay` | Start playing automatically |
    | `loop` | Repeat audio indefinitely |
    | `muted` | Start muted |

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

```

**Explanation:**

- `<source>` allows multiple file formats for browser compatibility.
- Fallback text ensures users see a message if unsupported.

**Best Practices:**

- Always provide `controls`.
- Avoid `autoplay` on mobile to improve UX.
- Include captions for accessibility.

---

### **5.2 Video Element (`<video>`)**

- Used to embed video content.
- **Attributes**:
    
    
    | Attribute | Purpose |
    | --- | --- |
    | `src` | Path to video |
    | `controls` | Show play/pause, volume |
    | `autoplay` | Auto-play video |
    | `loop` | Replay video |
    | `muted` | Start muted |
    | `poster` | Thumbnail before play |

```html
<video width="640" height="360" controls poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support HTML5 video.
</video>

```

**Tip:** Use multiple formats (`mp4`, `webm`) for **cross-browser support**.

---

### **5.3 Embedding YouTube Videos (`<iframe>`)**

- `<iframe>` embeds external content, like YouTube.

```html
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
</iframe>

```

**Best Practices:**

- Always include `title` for accessibility.
- Use `allowfullscreen` for better UX.
- Keep iframes **responsive** using CSS (`max-width: 100%; height: auto;`).

---

# **6. HTML5 APIs Overview**

HTML5 provides **APIs** for advanced web functionality.

---

### **6.1 Canvas API**

- `<canvas>` is used for **drawing graphics via JavaScript**.
- Attributes: `width`, `height`.

```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
  Your browser does not support the canvas element.
</canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "red";
  ctx.fillRect(20, 20, 150, 50);
</script>

```

**Use-Cases:**

- Games, charts, interactive graphics.

**Analogy:** Canvas is like a **digital painting board** for JavaScript.

---

### **6.2 SVG (Scalable Vector Graphics)**

- XML-based graphics that scale without losing quality.

```html

```

[](data:image/svg+xml;utf8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%20stroke%3D%22green%22%20stroke-width%3D%224%22%20fill%3D%22yellow%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A)

**Use-Cases:**

- Icons, logos, infographics.

**Difference from Canvas:**

- Canvas = **pixel-based**, immediate rendering.
- SVG = **vector-based**, DOM elements.

---

### **6.3 Geolocation API**

- Get user location using the browser.

```html
<button onclick="getLocation()">Get Location</button>
<p id="demo"></p>

<script>
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation not supported.";
  }
}

function showPosition(position) {
  document.getElementById("demo").innerHTML =
    "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
</script>

```

**Note:** Requires user permission.

---

### **6.4 Web Storage (localStorage & sessionStorage)**

- **localStorage**: Stores data permanently (until cleared)
- **sessionStorage**: Stores data for current session only

```html
<script>
localStorage.setItem("username", "Atharva");
alert("Saved: " + localStorage.getItem("username"));

sessionStorage.setItem("sessionData", "12345");
alert("Session: " + sessionStorage.getItem("sessionData"));
</script>

```

# **7. Meta Information and Head Elements**

The `<head>` section contains **metadata** — data about your webpage that is **not directly visible** to users but essential for browsers, SEO, and functionality.

---

### **7.1 Common `<head>` Elements**

| Tag | Purpose | Example |
| --- | --- | --- |
| `<title>` | Page title shown in browser tab | `<title>My Website</title>` |
| `<meta charset="UTF-8">` | Defines character encoding | UTF-8 supports most languages |
| `<meta name="viewport">` | Responsive design | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| `<meta name="description">` | SEO description | `<meta name="description" content="Best HTML tutorials">` |
| `<link rel="stylesheet">` | Link external CSS | `<link rel="stylesheet" href="style.css">` |
| `<link rel="icon">` | Favicon for browser tab | `<link rel="icon" href="favicon.ico">` |
| `<style>` | Internal CSS | `<style> body { background: #f0f0f0; } </style>` |
| `<script>` | Inline JS or external JS | `<script src="script.js"></script>` |

**Best Practices:**

- Place `<meta charset>` first to avoid character issues.
- Always include a `<title>` for SEO and accessibility.
- Keep `<head>` organized for maintainability.

---

### **7.2 SEO-Related Meta Tags**

- `description`: Summarizes page content for search engines.
- `keywords`: Optional, not widely used anymore.
- `robots`: Control indexing.

```html
<meta name="robots" content="index, follow">

```

- `viewport`: Essential for **mobile-first design**.

---

# **8. Attributes, Global Attributes, and Events**

### **8.1 Global Attributes**

Global attributes can be used on **any HTML element**:

| Attribute | Purpose |
| --- | --- |
| `id` | Unique identifier for element |
| `class` | Apply CSS styles or JS actions |
| `style` | Inline CSS styling |
| `title` | Tooltip text on hover |
| `hidden` | Hide element visually |
| `draggable` | Allow element to be dragged |
| `tabindex` | Control keyboard navigation |

**Example:**

```html
<p id="intro" class="text-highlight" title="Introduction Paragraph">Welcome!</p>

```

---

### **8.2 Event Attributes**

HTML elements can **react to user actions** using event attributes:

| Event | Description | Example |
| --- | --- | --- |
| `onclick` | Mouse click | `<button onclick="alert('Clicked!')">Click Me</button>` |
| `onmouseover` | Mouse hover | `<p onmouseover="this.style.color='red'">Hover me</p>` |
| `onload` | Fires when page/element loads | `<body onload="init()">` |
| `onchange` | Input value changes | `<input onchange="validate()">` |

**Best Practices:**

- Avoid inline JS; use **external scripts** for maintainability.
- Keep event handlers **semantic and meaningful**.

---

# **9. Advanced HTML Concepts**

### **9.1 HTML Entities**

- Special characters represented by **entities**:

```html
&lt;   <!-- < -->
&gt;   <!-- > -->
&amp;  <!-- & -->
&quot; <!-- " -->
&apos; <!-- ' -->

```

**Tip:** Essential for code snippets or special symbols in HTML.

---

### **9.2 Block vs Inline Elements**

| Type | Description | Examples |
| --- | --- | --- |
| Block | Takes full width, starts on a new line | `<div>`, `<p>`, `<section>`, `<h1>` |
| Inline | Takes only required width, stays inline | `<span>`, `<a>`, `<strong>`, `<em>` |

**Analogy:** Block = a **full-width building**, Inline = a **room inside a building**.

---

### **9.3 Deprecated Tags**

- Older HTML tags that should **not be used** in modern websites:

| Tag | Reason | Modern Alternative |
| --- | --- | --- |
| `<font>` | Styling text | CSS (`color`, `font-family`) |
| `<center>` | Center content | CSS (`text-align: center`) |
| `<big>` / `<small>` | Font size changes | CSS (`font-size`) |
| `<u>` | Underline (semantic vs visual) | CSS (`text-decoration`) |

**Tip:** Always use **CSS for presentation**, HTML for **structure**.

---

### **9.4 Accessibility (ARIA Attributes)**

- ARIA (Accessible Rich Internet Applications) attributes enhance usability for **screen readers**.
- Common ARIA attributes:
    
    
    | Attribute | Purpose |
    | --- | --- |
    | `role` | Describe element role |
    | `aria-label` | Accessible label |
    | `aria-hidden` | Hide element from screen readers |

**Example:**

```html
<nav role="navigation" aria-label="Main Menu">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

```

# **11. HTML Quick Revision & Cheatsheet**

This section summarizes **all essential HTML elements, attributes, and best practices**.

---

### **11.1 Basic Structure**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <!-- Visible content -->
</body>
</html>

```

---

### **11.2 Common HTML Tags**

| Category | Tags | Notes |
| --- | --- | --- |
| Headings | `<h1>`–`<h6>` | Hierarchy matters for SEO |
| Text | `<p>`, `<span>`, `<strong>`, `<em>`, `<b>`, `<i>`, `<u>`, `<mark>` | Use semantic tags for meaning |
| Links & Images | `<a>`, `<img>` | Always include `alt` for images, `title` for links |
| Lists | `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>` | Use appropriate list type |
| Tables | `<table>`, `<tr>`, `<td>`, `<th>`, `<caption>` | Avoid for layout; only for data |
| Forms | `<form>`, `<input>`, `<textarea>`, `<select>`, `<option>`, `<label>`, `<button>` | Use proper input types and labels |
| Multimedia | `<audio>`, `<video>`, `<source>`, `<iframe>` | Include `controls`, multiple formats |
| Semantic | `<header>`, `<footer>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` | Improves SEO & accessibility |
| Metadata | `<title>`, `<meta>`, `<link>`, `<style>`, `<script>` | Place in `<head>` |
| Others | `<div>`, `<span>` | Generic containers, use semantic alternatives where possible |

---

### **11.3 Global Attributes**

| Attribute | Purpose |
| --- | --- |
| `id` | Unique identifier |
| `class` | Group elements for styling |
| `style` | Inline CSS (avoid if possible) |
| `title` | Tooltip text |
| `hidden` | Hide element visually |
| `draggable` | Enable dragging |
| `tabindex` | Keyboard navigation |

---

### **11.4 Input Types (HTML5)**

| Type | Usage |
| --- | --- |
| text | Single-line text |
| password | Masked input |
| email | Email validation |
| number | Numeric input |
| date | Calendar picker |
| radio | Single-choice selection |
| checkbox | Multiple-choice selection |
| file | Upload files |
| url | URL validation |
| color | Color picker |
| range | Slider |

---

### **11.5 Multimedia Attributes**

| Attribute | Element | Usage |
| --- | --- | --- |
| controls | audio/video | Show player controls |
| autoplay | audio/video | Start automatically |
| loop | audio/video | Repeat indefinitely |
| muted | audio/video | Start muted |
| poster | video | Thumbnail image |
| src | audio/video | Media source URL |

---

### **11.6 Semantic vs Non-Semantic**

| Feature | Semantic | Non-Semantic |
| --- | --- | --- |
| Meaning | Yes | No |
| Examples | `<header>`, `<footer>`, `<article>` | `<div>`, `<span>` |
| SEO | Better | Poor |
| Accessibility | Better | Poor |

### **11.7 HTML Best Practices**

1. **Semantic HTML**: Use meaningful tags.
2. **Accessibility**: Alt text, ARIA labels, labels for form inputs.
3. **Responsive Design**: Use `<meta viewport>` and CSS media queries.
4. **Avoid Inline CSS/JS**: Keep HTML structure clean.
5. **Validation**: Use W3C Validator to avoid errors.
6. **SEO Optimization**: Proper headings, meta description, title tags.

---

# **12. Real-World HTML Examples**

### **12.1 Blog Page Structure**

```html
<header>
    <h1>My Blog</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>
<main>
    <article>
        <h2>Latest Post</h2>
        <p>Content of the blog post...</p>
    </article>
    <aside>
        <h3>Related Posts</h3>
        <ul>
            <li><a href="#">Post 1</a></li>
            <li><a href="#">Post 2</a></li>
        </ul>
    </aside>
</main>
<footer>
    <p>&copy; 2025 My Blog</p>
</footer>

```

### **12.2 Contact Form Example**

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>

    <button type="submit">Send</button>
</form>

```

---

---

# **13. Mini HTML Cheatsheet**

- **Doctype**: `<!DOCTYPE html>`
- **Root**: `<html lang="en">`
- **Head**: `<head>` → meta, title, links
- **Body**: `<body>` → visible content
- **Text**: `<p>`, `<span>`, `<strong>`, `<em>`
- **Links**: `<a href="">`
- **Images**: `<img src="" alt="">`
- **Lists**: `<ul>`, `<ol>`, `<li>`
- **Tables**: `<table>`, `<tr>`, `<td>`, `<th>`
- **Forms**: `<form>`, `<input>`, `<textarea>`, `<select>`, `<button>`
- **Media**: `<audio>`, `<video>`, `<iframe>`
- **Semantic**: `<header>`, `<footer>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`
- **Global Attributes**: `id`, `class`, `style`, `title`, `hidden`, `draggable`
- **Events**: `onclick`, `onmouseover`, `onchange`, `onload`