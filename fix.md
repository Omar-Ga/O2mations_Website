Excellent! It seems like there are some styling inconsistencies on your "Our Solutions" page. Here is a detailed prompt you can provide to an AI to help resolve the issue, complete with code snippets for clarity.

***

### Prompt for AI Assistant:

"Hello, I have been working on a new version of my website and have encountered a styling issue on the 'Our Solutions' page (`solutions.html`). The layout appears broken compared to the original master version. I need your help to fix it.

The primary problem is that the detailed solution sections, which should be arranged in a two-column grid (text on one side, visual diagram on the other), are instead stacking vertically. Also, the visual diagrams themselves seem to be misaligned or not displaying as intended.

To help you fix this, I will provide the relevant HTML structure from `solutions.html` and the CSS from `css/solutions.css`.

#### **1. The Problematic HTML Structure in `solutions.html`**

The structure for each solution detail section seems to be missing the correct two-column layout. Here is the current, incorrect structure for the "Workflow & Process Automation" section:

```html
<!-- INCORRECT STRUCTURE from solutions.html -->
<section class="solution-detail">
    <div class="container">
        <div class="solution-detail__content">
            <div class="solution-detail__text">
                <!-- All text content is here -->
            </div>
            
            <div class="solution-detail__visual">
                <!-- The visual diagram is here -->
            </div>
        </div>
    </div>
</section>
```

#### **2. Analysis of the CSS in `css/solutions.css`**

I suspect the issue might be related to how the `.solution-detail__content` class is styled or how its child elements (`.solution-detail__text` and `.solution-detail__visual`) are being targeted.

Here is the relevant CSS from `css/solutions.css` which is intended to create the two-column layout:

```css
/* Relevant CSS from css/solutions.css */
.solution-detail__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
}
```

This CSS is designed to make `.solution-detail__content` a grid container, but for some reason, its children are not aligning correctly side-by-side.

#### **3. What I Need You to Do:**

Please review the provided HTML and CSS. Based on web development best practices, please provide the corrected HTML structure for the `solutions.html` page that will work with the existing CSS to restore the intended two-column layout.

Specifically, I need you to:
1.  **Analyze the relationship** between the CSS grid properties and the HTML structure.
2.  **Rewrite the HTML** for the `.solution-detail` sections to ensure the text content and visual diagrams are direct children of the `.solution-detail__content` grid container.
3.  **Ensure the fix is robust** and applies correctly to all three solution sections on the page ("Workflow & Process Automation", "Platform & Data Integration", and "Custom Automation Strategy").

Thank you!"