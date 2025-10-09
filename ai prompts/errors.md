Cause of bug
CSS selector mismatch: The navbar markup in 
src/components/Header.jsx
 used classes like header__nav and header__logo, but your stylesheet 
css/main.css
 defines navbar styles for .nav, .nav__list, .nav__link, .nav__logo-link, .nav__logo-text, and .nav__actions. Because the selectors didn’t match, no navbar styles were applied.
Fix implemented
Updated 
Header.jsx
 to match CSS:
Replaced header__* classes and structure with the existing .nav structure defined in 
css/main.css
.
New structure in 
src/components/Header.jsx
:
Wrapper: header.header > .container > nav.nav
Logo: Link.nav__logo-link > span.nav__logo-text
Menu: div.nav__menu > ul.nav__list > li > Link.nav__link
Actions: div.nav__actions wrapping the 
LanguageSwitcher
This aligns the component with the stylesheet, so the navbar styling now applies.

Notes
Language switcher styling: The buttons in 
src/components/LanguageSwitcher.jsx
 are plain. If you want them styled like the rest of the site, we can apply existing button classes (e.g., btn btn--secondary) or add a small style block for .language-switcher—say the word and I’ll update it.