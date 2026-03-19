# Lab: Data Storage, Retrieval, and Charting

## Overview
This lab focuses on **storing user voting data**, **retrieving it across pages**, and **displaying the results using charts**. The voting interface remains on the main page while the results visualization is moved to a dedicated chart page.

Users should be able to return to the chart page at any time and view the **most recent voting results**, which are stored using **localStorage**.

---

# Problem Domain
The design team has decided to **move the voting chart off the main voting page** and place it on a **separate results page**.

This requires:

- Creating a **results page** that displays the chart
- Linking the voting page to the results page
- Storing the voting data so it can be accessed from both pages
- Rendering the chart using **Chart.js**

Voting occurs on `index.html`, and results are visualized on `chart.html`.

---

# Repository Setup

1. Create a **new repository using the provided template**.
2. Clone the repository locally.
3. Work within the existing file structure.

If working with a partner:

- Add your partner as a **repository collaborator**.
- Both partners should be able to **push and merge**.
- Ensure both partners contribute to **JavaScript and CSS**.

---

# File Responsibilities

### `index.html`
- The **voting page**.
- Users vote for items here.
- **Do NOT modify this file.**

### `chart.html`
- Displays voting results.
- Uses **Chart.js** to render the chart.
- **Do NOT modify this file.**

### `css/styles.css`
- Contains **all styling** for the application.
- Currently empty.
- Add layout, typography, colors, and visual improvements.

### JavaScript Files
- Complete all `//TODO` sections.
- Implement logic for:
  - storing vote data
  - retrieving vote data
  - generating the chart

---

# Core Requirements

## Data Storage
Use **localStorage** to save voting results so they persist between pages.

Example concept:
- Votes recorded on `index.html`
- Data stored in `localStorage`
- `chart.html` retrieves the data
- Chart.js displays results

Users should see the **latest voting data whenever they visit the results page**.

---

# Chart Requirements

Use **Chart.js** to visualize the voting results.

Typical workflow:

1. Retrieve vote data from `localStorage`
2. Format the data for Chart.js
3. Generate a chart on `chart.html`

---

# Development Guidelines

- Complete all `//TODO` items in the JavaScript files.
- Style the application using `styles.css`.
- Test frequently while building features.

Recommended workflow:

1. Implement localStorage functionality
2. Verify voting data is saved correctly
3. Retrieve the stored data on the results page
4. Render the chart
5. Add styling

---

# Pair Programming Guidelines

If working with a partner:

- Plan your approach before coding.
- Share responsibilities across both **CSS and JavaScript**.
- Switch roles periodically (driver / navigator).
- Communicate before pushing changes.

---

# Tips

- Use **localStorage** to share data between pages.
- Make **small incremental changes**.
- Test features as they are added.
- Keep commits frequent and descriptive.

---

# Lab Checklist

- [ ] Complete all `TODO` items in JavaScript
- [ ] Implement localStorage for vote persistence
- [ ] Retrieve stored data on the chart page
- [ ] Display voting results using Chart.js
- [ ] Style the application
- [ ] Deploy the application
- [ ] Do **NOT** modify the HTML files

---

# Important Rule

**Do NOT modify the HTML files (`index.html` or `chart.html`).**

All functionality must be implemented using **JavaScript and CSS only**.

---

# Deployment
Once the application is complete:

1. Push all changes to GitHub
2. Deploy using **GitHub Pages**
3. Verify that:
   - voting works
   - results persist
   - the chart displays correctly

---

# Technologies Used

- JavaScript
- LocalStorage API
- Chart.js
- CSS
- Git / GitHub
