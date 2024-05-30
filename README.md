# CCC - Front-end Development by React Final Project
<p>Create Career College - React Final Project by Henry Wat</p>

---

## Tutor: Pascal Zirn
## Submission Date: 31 May 2024

### Technologies:
- VSCode
- Node.js
- React JS

---

# Basic Blog

## Objective
Fetch data from https://jsonplaceholder.typicode.com/postsLinks and create a basic list of blog posts. The first 5 post titles will be displayed initially, clicking the "Load More" button will display the next 5 post topics.

## Resources
- Mdn Web Docs: [Getting Started with REACT](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [REACT](https://react.dev/)
- [Create REACT App](https://create-react-app.dev/)

### Screenshot
![Index Page](/screen/screen1.png)
![Load More Posts](/screen/screen2.png)

## Instruction to run this program (Z shell)
1. Install Node.js if necessary
```
https://nodejs.org/en/download/current
```
or
```
brew install node
```
2. Install creat-react-app package if missing.
*npm - Node Package Manager is a software library (registry)*
```
npm install create-react-app
```
3. Create basic_blog REACT App
*npx - Node Package eXecute is simply an NPM package runner.*

```
npx create-react-app basic_blog
```
4. Starts the development server.
*The URL is 'http://localhost:3000' incase the page not loaded automatically.*
```
cd basic_blog
npm start
```

### Other commands for reference:
Bundles the app into static files for production.
```
npm run build
```
Starts the test runner.
```
npm test
```
Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!
```
npm run eject
```

Directory Structure:
basic_blog
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html ***=> change title of page***
│   └── manifest.json
├── components ***=>create and store components here if too many***
└── src ***=> most often use***
    ├── App.css ***=> CSS of the component***
    ├── App.js ***=> App() funtion returns JSX expression***
    ├── App.test.js
    ├── index.css ***=> CSS of the web page***
    └──  index.js ***=> import App.js and call App() function***

