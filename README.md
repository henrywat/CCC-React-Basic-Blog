# CCC - Front-end Development by React Final Project
<p>Create Career College - React Final Project by Henry Wat</p>

---

## Tutor: Pascal Zirn
## Submission Date: 31 May 2024

### Technologies:
- w3.css
- Node.js
- React JS
- JSX - a language of HTML-in-JavaScript
---

# Basic Blog

## Objective
Fetch data from https://jsonplaceholder.typicode.com/postsLinks and create a basic list of blog posts. The first 5 post titles will be displayed initially, clicking the "Load More Posts" button will display the next 5 post topics.

## Resources
- Mdn Web Docs: [Getting Started with REACT](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [REACT](https://react.dev/)
- [Create REACT App](https://create-react-app.dev/)

### Screenshot
![Compile Successfully](/screen/screen3.png)
![Index Page](/screen/screen1.png)
![Load More Posts](/screen/screen2.png)
![Console](/screen/screen4.png)

## Instruction to run this program (Z shell)

**1. Install Node.js**
```
https://nodejs.org/en/download/current
```
or
```
brew install node
```

**2. Install creat-react-app package if missing.**
```
npm install create-react-app
```
>npm - Node Package Manager is a software library (registry)

**3. Create basic_blog REACT App**
```
npx create-react-app basic_blog
```
>npx - Node Package eXecute is simply an NPM package runner.

**4. Starts the development server.**
```
cd basic_blog
npm start
```

### Other commands for reference:
- Bundles the app into static files for production.
```
npm run build
```
- Starts the test runner.
```
npm test
```
- Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!
```
npm run eject
```

Directory Structure:
```
basic_blog
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html   => change title of page
│   └── manifest.json
├── components       => create and store components here if too many
└── src => most often use
    ├── App.css      => CSS of the component
    ├── App.js       => App() funtion returns JSX expression
    ├── App.test.js
    ├── index.css    => CSS of the web page***
    └── index.js     => import App.js and call App() function
```
