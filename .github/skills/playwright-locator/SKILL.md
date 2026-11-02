---
name: playwright-locator
description: Analyze supplied HTML and return the most robust, unique Playwright locator using Playwright locator best practices.
---

# Playwright Locator Advisor

When the user supplies HTML, return the single most reliable Playwright locator for the intended element. Reason from the DOM and accessibility tree, not from visual styling or attribute availability. The locator must be short, stable through UI refactors, and unique within the supplied markup.

## Decision process

1. Identify the target element. Prefer an actionable control (`button`, `link`, input, menu item, checkbox) or the element explicitly requested by the user.
2. Determine its implicit or explicit ARIA role and accessible name. Accessible names can come from text content, `<label>`, `aria-label`, `aria-labelledby`, `alt`, or `title` when it is exposed to assistive technology.
3. Check whether the candidate locator is unique. If equivalent elements repeat, scope through a stable parent with semantic meaning.
4. Choose the highest-ranked locator that is both meaningful and unique. Do not select a lower-ranked locator merely because it is shorter.

## Locator preference

Use the first applicable option:

1. **`getByRole()`** for links, buttons, dialogs, headings, tabs, menu items, and other elements with a meaningful role and accessible name.
2. **`getByLabel()`** for inputs, textareas, selects, checkboxes, radios, and switches when their associated label is their clearest identity.
3. **`getByPlaceholder()`** for inputs and textareas only when the placeholder is meaningful, stable, and no better label is available.
4. **`getByText()`** for a stable, concise, visible text node when role and label locators are unsuitable.
5. **`getByTestId()`** for a stable `data-testid` when no user-facing locator reliably identifies the element.
6. **CSS** for a stable semantic or purpose-built attribute when the options above cannot work.
7. **Relative XPath** only when CSS cannot express a necessary parent, ancestor, or sibling relationship.

## Quality rules

- Prefer user-facing semantics over implementation details. Never choose a class, DOM position, generated ID, or styling attribute when an accessible locator exists.
- Treat `aria-label` and `aria-labelledby` as accessible names. Ignore labels hidden from the accessibility tree and decorative content marked `aria-hidden='true'`.
- Use `{ name: '...' }` with `getByRole()`. Add `exact: true` only when it prevents a genuine text collision.
- For repeated controls, scope with a stable ancestor instead of `nth()`. Example:

  ```javascript
  page.getByRole('row', { name: 'Ada Lovelace' }).getByRole('button', { name: 'Edit' })
  ```

- Do not use `nth()`, XPath indexes, absolute XPath, tag-only selectors, text selectors embedded in CSS, or generated-looking identifiers such as `id='react-aria123'`.
- Do not use `getByText()` for long, dynamic, ambiguous, or non-user-facing text.
- Do not use a placeholder when a visible label or accessible name is available and stable.
- Do not propose a locator that may match multiple targets. When the provided HTML lacks enough context to make it unique, return the best locator plus a concise JavaScript comment describing the required scope.
- If no stable locator is possible, return only a concise JavaScript comment explaining the missing stable identifier. Never invent an attribute, text value, or relationship.

## Output contract

- Return only one fenced `javascript` code block; include no prose outside it.
- Return one valid Playwright expression beginning with `page.`, unless a comment is necessary because uniqueness cannot be established.
- Use single quotes for all JavaScript string literals.
- Preserve visible text and accessible names exactly, except trim leading and trailing whitespace.

## Examples

```html
<a class="gb_8" aria-label="Gmail " href="https://mail.google.com/">Gmail</a>
```

```javascript
page.getByRole('link', { name: 'Gmail' })
```

```html
<label for="email">Email address</label>
<input id="email" type="email" placeholder="name@example.com">
```

```javascript
page.getByLabel('Email address')
```

```html
<button data-testid="remove-user"><svg aria-hidden="true"></svg></button>
```

```javascript
page.getByTestId('remove-user')
```
