# Samuel Adjei Mensah — personal site

Static homepage for Samuel Adjei Mensah (Simiel): a software engineer, programming tutor, and AI enthusiast who is finishing college, learning data science and backend development, and open to collaborating on data projects. The page is a single screen that introduces him and links to the profiles he publishes.

## Key features

- Full-viewport landing layout: a narrow left rail, a top bar, the introduction, and a footer.
- Introduction line from the page: “Software Engineer, AI lover, Programming Tutor.”
- Outbound links to [LinkedIn](https://www.linkedin.com/in/simiel/), [GitHub](https://github.com/simiel), and [Twitter](https://twitter.com/Simielxx), with brand icons from a Font Awesome kit.
- Home, About, Projects, and Contact labels in the top bar. Each `href` is empty, so those labels stay on this page.
- Footer with the public email `simieldev@gmail.com` and the name Simiel.
- A blue palette stored in CSS custom properties (`--background-color`, `--light-blue`, `--mid-blue`, `--dark-blue`).
- At viewports of 900px and below, the icon row and page labels are hidden.

## Tech stack

- HTML
- CSS: Grid, Flexbox, custom properties, and one media query
- [Font Awesome](https://fontawesome.com/) kit, loaded from its CDN in `index.html`, for the brand icons

The stylesheet sets the typeface to Rubik. The repo does not include a webfont file or a font stylesheet, so Rubik appears when it is already installed and the browser’s fallback is used otherwise.

`linkedin-in.svg` is a LinkedIn glyph stored in the repo (the file header identifies it as a Font Awesome icon). `index.html` does not reference it. The icons on the page come from the Font Awesome kit script.

## Structure

```text
index.html         page markup
styles.css         layout, color tokens, and the 900px breakpoint
linkedin-in.svg    LinkedIn glyph, unused by the page
```

`.app` is a CSS grid with two columns (`90px` and the remaining width) and three rows (`90px`, flexible, `90px`). The left-hand cells draw the rail borders. The navigation bar is a flex row with space between the icons and the page labels. The introduction sits in the flexible center cell, and the footer is a centered flex row.

### Earlier `master` branch

`master` keeps an earlier React version of this same layout (commits from July 2021 through April 2022). The default branch is the static page added in January 2023.

That branch contains:

- A Create React App project named `portfolio`, split into `Nav`, `Home`, and `Footer` under `src/components/`.
- `react-icons` for the social marks and a menu button in the left rail.
- Tailwind CSS connected to Create React App through CRACO (`craco.config.js`, `tailwind.config.js`, and `@tailwind` directives in `src/index.css`).
- A `homepage` field set to `https://simiel.github.io/simiel`.
- npm scripts in `package.json`: `start` (`craco start`), `build` (`craco build`), `test` (`craco test`), `eject` (`react-scripts eject`), `predeploy` (`npm run build`), and `deploy` (`gh-pages -b master -d build`). The `gh-pages` package is not listed in `dependencies` or `devDependencies`.
- A menu button that stores open and closed state in `App`. That state is not passed into `Nav`. Under 900px the navigation is hidden in CSS, matching the static page.
- `src/App.test.js`, the Create React App sample that looks for the text “learn react”. The rendered page does not contain that text.

The React home line reads “Front End Developer, Backend Curious, Python Developer, Artificial Intelligence Lover, Maestro,” under the name Adjei Samuel. The static page on this branch uses the name Simiel | Samuel Adjei Mensah and the shorter introduction above.

## Getting started

Prerequisite: a current browser. The social icons also need network access to the Font Awesome kit.

This branch uses no environment variables and has no install step. Open `index.html` in a browser.

This branch defines no build or test command. On `master`, the commands in `package.json` are `npm start`, `npm test`, `npm run build`, `npm run eject`, and `npm run deploy` (which runs `predeploy` first).

## Project status

Personal homepage in progress. The default branch is one static screen. About, Projects, and Contact are labels on that screen. The page and the notes carried forward from the original README describe someone still in college, studying data science and backend development, and interested in data-project collaboration.

## What this demonstrates

- A full-viewport page specified by hand: CSS Grid for the frame, Flexbox for the bar and footer, and custom properties for the palette.
- A responsive rule that removes the navigation at 900px, kept consistent from the React version to the static page.
- A dependency-free front end that follows a component split (navigation, home, footer) first built with React 17 and `react-icons`.
- Tooling on the earlier branch for fitting Tailwind into Create React App with CRACO, and a GitHub Pages deploy script recorded in `package.json`.

## Contact

- Email: simieldev@gmail.com
- LinkedIn: https://www.linkedin.com/in/simiel/
- GitHub: https://github.com/simiel
- Twitter: https://twitter.com/Simielxx
