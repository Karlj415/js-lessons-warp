# JavaScript Full‑Stack Course
**Format:** Markdown (`.md`) – copy‑paste directly into a file (e.g.,
`JS-Fullstack-Course.md`)

---  

## Table of Contents

| Module | Lesson | Topics Covered | Resources | Challenge |
|--------|--------|----------------|-----------|-----------|
| **0** | [Course Overview & Setup](#0-course-overview--setup) | Goals, 
tools, workflow | — | — |
| **1** | [JavaScript Basics](#1-javascript-basics) | Syntax, variables, 
data types, operators |  |  |
| **2** | [Control Flow & Functions](#2-control-flow--functions) |
Conditionals, loops, functions, arrow syntax |  |  |
| **3** | [Working with the DOM](#3-working-with-the-dom) | Selecting 
elements, events, UI updates |  |  |
| **4** | [Asynchronous JavaScript](#4-asynchronous-javascript) |
Callbacks, Promises, async/await, fetch API |  |  |
| **5** | [Modern JavaScript (ES6+)](#5-modern-javascript-es6) | Modules, 
destructuring, spread/rest, optional chaining |  |  |
| **6** | [Testing & Debugging](#6-testing--debugging) | Chrome DevTools, 
unit testing with Jest |  |  |
| **7** | **Front‑End Frameworks** – React | JSX, components, state, 
hooks, routing |  |  |
| **8** | **State Management** – Redux / Context | Store, reducers, 
actions, middleware |  |  |
| **9** | **Build Tools** – Webpack, Vite, Babel | Bundling, 
code‑splitting, environment variables |  |  |
| **10** | **Version Control & CI** – Git & GitHub Actions | Branching, PR 
workflow, automated testing |  |  |
| **11** | **Node.js Fundamentals** | Runtime, modules, npm, REPL |  |  |
| **12** | **Express.js API Development** | Routing, middleware, error 
handling, REST |  |  |
| **13** | **Databases** – MongoDB & PostgreSQL | CRUD, Mongoose, pg, 
migrations, indexing |  |  |
| **14** | **Authentication & Authorization** | JWT, OAuth2, session 
handling, bcrypt |  |  |
| **15** | **Testing Back‑End** – Mocha/Chai & Supertest | Unit, 
integration, end‑to‑end API tests |  |  |
| **16** | **Deploying Full‑Stack Apps** | Vercel, Netlify, Render, Docker 
basics, CI/CD pipelines |  |  |
| **17** | **Advanced Topics** – GraphQL, WebSockets, Server‑Side 
Rendering, TypeScript | Schema design, real‑time, performance |  |  |
| **18** | **Capstone Project** | Full‑stack app from spec → production |
|  |

---

## 0. Course Overview & Setup

### What You’ll Learn

* **Front‑end**: Vanilla JS → modern ES6+ → React ecosystem.
* **Back‑end**: Node.js, Express, databases, authentication, testing,
  deployment.
* **Full‑stack**: Connecting front‑end to APIs, state management, CI/CD.

### Prerequisites

* Basic computer literacy.
* No prior coding experience required – we start from zero.

### Tools to Install

| Tool | Why | Install Link |
|------|-----|--------------|
| **Node.js (v20+)** | Runtime for JS on the server, npm package manager |
https://nodejs.org/ |
| **Visual Studio Code** | Code editor with great extensions |
https://code.visualstudio.com/ |
| **Git** | Version control | https://git-scm.com/ |
| **Google Chrome (or any modern browser)** | Debugging & testing |
https://www.google.com/chrome/ |
| **Postman / Insomnia** | API testing | https://www.postman.com/ |
| **Docker (optional)** | Containerised deployment |
https://www.docker.com/ |

### Suggested VS Code Extensions

* **ESLint** – Linting.
* **Prettier - Code formatter**.
* **Live Server** – Quick static server for front‑end work.
* **REST Client** – Send HTTP requests inside VS Code.

---

## 1. JavaScript Basics

### 1.1 What is JavaScript?

* A high‑level, interpreted language that runs in browsers and on the
  server (Node.js).
* Enables interactive web pages, server APIs, desktop apps (Electron),
  etc.

### 1.2 Syntax & Data Types

| Concept | Explanation | Example |
|---------|-------------|---------|
| **Variables** (`let`, `const`, `var`) | Block‑scoped (`let`, `const`) vs 
function‑scoped (`var`). | `let age = 30; const PI = 3.14;` |
| **Primitive Types** | `Number`, `String`, `Boolean`, `null`, 
`undefined`, `Symbol`, `BigInt`. | `const name = "Alice";` |
| **Objects & Arrays** | Collections of key/value pairs or ordered lists. 
| `const user = {id:1, name:"Bob"}; const nums = [1,2,3];` |

### 1.3 Resources

| Type | Title | Link |
|------|-------|------|
| Article | *MDN – JavaScript basics* |
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps |
| Video | *JavaScript Crash Course – Traversy Media* |
https://www.youtube.com/watch?v=hdI2bqOjy3c |
| Interactive | *freeCodeCamp – Basic JavaScript* |
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structurehttps://www.freecodecam.org/learn/javascript-algorithms-and-data-structures/basic-javascript/ |

### 1.4 Challenge

> **Build a “Hello, World!” webpage**
> * Create an `index.html` with a `<button>` that, when clicked, shows an
    alert saying “Hello, World!” using an external `script.js`.
> * Commit your work to a new Git repository and push to GitHub.

---

## 2. Control Flow & Functions

### 2.1 Conditionals

* `if / else`, `switch`, ternary operator.

### 2.2 Loops

* `for`, `while`, `do…while`, `for…of`, `for…in`.

### 2.3 Functions

* Declaration vs expression, default params, rest parameters.
* Arrow functions & lexical `this`.

### 2.4 Resources

| Type | Title | Link |
|------|-------|------|
| Article | *MDN – Functions* |
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions |
| Video | *Understanding JavaScript Functions – Academind* |
https://www.youtube.com/watch?v=U1WvN7uA2Zc |
| Playground | *JSFiddle – try out loops* | https://jsfiddle.net/ |

### 2.5 Challenge

> **FizzBuzz** – Write a function `fizzBuzz(n)` that returns an array from
`1` to `n` where multiples of 3 are replaced by `"Fizz"`, multiples of 5
by `"Buzz"`, and multiples of both by `"FizzBuzz"`.
> * Add unit tests using **Jest** (install locally).

---

## 3. Working with the DOM

### 3.1 Selecting Elements

* `document.getElementById`, `querySelector`, `querySelectorAll`.

### 3.2 Manipulating Content

* `textContent`, `innerHTML`, `classList`, attributes.

### 3.3 Event Handling

* `addEventListener`, event delegation, keyboard & mouse events.

### 3.4 Resources

| Type | Title | Link |
|------|-------|------|
| Article | *MDN – Introduction to the DOM* |
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Intrhttps://developer.mozilla.orgen-US/docs/Web/API/Document_Object_Model/Introduction |
| Video | *DOM Manipulation – The Net Ninja* |
https://www.youtube.com/watch?v=0ik6X4DJAoE |
| Project | *Todo List (vanilla JS)* |
https://codepen.io/pen?template=YzXKQbL |

### 3.5 Challenge

> **Dynamic Todo List** – Build a UI that lets the user add, toggle
(complete/incomplete), and delete todo items. Persist the list to
`localStorage` so it survives page reloads.

---

## 4. Asynchronous JavaScript

### 4.1 Callbacks

* Classic async pattern, “callback hell”.

### 4.2 Promises

* `new Promise`, `.then()`, `.catch()`, `.finally()`.

### 4.3 Async / Await

* Syntactic sugar over promises, error handling with `try/catch`.

### 4.4 Fetch API

* GET, POST, handling JSON, error status.

### 4.5 Resources

| Type | Title | Link |
|------|-------|------|
| Article | *MDN – Using Fetch* |
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch |
| Video | *JavaScript Async/Await – Fireship* |
https://www.youtube.com/watch?v=V_Kr9OSfDeU |
| Interactive | *JavaScript Promises – JavaScript.info* |
https://javascript.info/promise-basics |

### 4.6 Challenge

> **GitHub Profile Viewer** – Fetch a GitHub user’s public data
(`https://api.github.com/users/:username`) and display avatar, name, bio,
and repo count. Add a loading spinner and graceful error messages (e.g.,
user not found).

---

## 5. Modern JavaScript (ES6+)

| Feature | Description | Example |
|---------|-------------|---------|
| **Modules** (`import` / `export`) | Split code into reusable files. |
`export function sum(a,b){return a+b;}` |
| **Destructuring** | Pull values from arrays/objects. | `const {name, 
age}=person;` |
| **Spread / Rest** | Expand or collect elements. | `const arr=[...a, 
...b];` |
| **Optional Chaining** | Safe property access (`obj?.prop`). |
`user?.address?.city` |
| **Nullish Coalescing** (`??`) | Default when value is 
`null`/`undefined`. | `const name = input ?? "Guest";` |
| **Class Syntax** | OOP style (`class Person {}`) | `class Car { 
constructor(m){this.model=m;} }` |

### 5.1 Resources

| Type | Title | Link |
|------|-------|------|
| Article | *ES6 Features – freeCodeCamp* |
https://www.freecodecamp.org/news/es6-guide/ |
| Video | *ES6 Crash Course – Traversy Media* |
https://www.youtube.com/watch?v=NCwa_xi0Uuc |
| Playground | *Babel REPL* (try ES6+ code) | https://babeljs.io/repl |

### 5.2 Challenge

> **Refactor the Todo List** – Move all DOM manipulation into separate
modules, use destructuring for state objects, and convert any callbacks to
`async/await`.

---

## 6. Testing & Debugging

### 6.1 Chrome DevTools

* Elements panel, Sources (breakpoints), Network, Performance.

### 6.2 Unit Testing with Jest

* Installation (`npm i -D jest`), test file conventions, assertions
  (`expect`).

### 6.3 Debugging with VS Code

* Launch configurations, `debugger;` statements.

### 6.4 Resources

| Type | Title | Link |
|------|-------|------|
| Article | *Debugging JavaScript – MDN* |
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browhttps://developer.mozilla.org/enUS/docs/Learn/Tools_and_testing/Cross_browser_testing/Debugging |
| Video | *Jest Testing Tutorial – The Net Ninja* |
https://www.youtube.com/watch?v=7r4xVDI2vho |
| Cheatsheet | *VS Code Debugging* |
https://code.visualstudio.com/docs/editor/debugging |

### 6.5 Challenge

> **Write Tests for FizzBuzz** – Cover normal cases, edge cases (e.g., `n 
= 0`, negative numbers). Ensure coverage > 90%.

---

## 7. Front‑End Framework – **React**

### 7.1 Why React?

* Component‑based UI, Virtual DOM, huge ecosystem.

### 7.2 Core Concepts

| Concept | Description |
|---------|-------------|
| **JSX** | HTML‑like syntax compiled to `React.createElement`. |
| **Components** | Functional (hooks) or class‑based. |
| **State & Props** | Local UI state (`useState`) and immutable data flow. 
|
| **Lifecycle & Effects** | `useEffect` replaces `componentDidMount` etc. 
|
| **Routing** | `react-router-dom` for SPA navigation. |
| **Styling** | CSS Modules, styled‑components, Tailwind (optional). |

### 7.3 Setting Up a Project

```bash
# Using Vite (lightweight) – recommended
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

### 7.4 Resources

| Type | Title | Link |
|------|-------|------|
| Official Docs | *React – Getting Started* |
https://reactjs.org/docs/getting-started.html |
| Video | *React Crash Course – Traversy Media* |
https://www.youtube.com/watch?v=w7ejDZ8SWv8 |
| Tutorial | *Building a Weather App with React* |
https://www.codecademy.com/learn/react-101 |

### 7.5 Challenge

> **Movie Search App** – Use the OMDb API (`http://www.omdbapi.com/`) to
let users search movies, display results as cards, and view a details
modal. Implement debounced input (300 ms) to avoid excessive API calls.

---

## 8. State Management – **Redux / Context API**

### 8.1 Redux Basics

* Store, reducers, actions, middleware (`redux-thunk`).

### 8.2 When to Choose Context vs Redux

| Situation | Recommended |
|-----------|--------------|
| Small app, limited global state | React Context + `useReducer` |
| Complex app, many async flows, devtools needed | Redux Toolkit |

### 8.3 Redux Toolkit (RTK)

* `configureStore`, `createSlice`, `createAsyncThunk`.

### 8.4 Resources

| Type | Title | Link |
|------|-------|------|
| Docs | *Redux Toolkit – Essentials* |
https://redux-toolkit.js.org/tutorials/essentials |
| Video | *Redux Toolkit Crash Course – Fireship* |
https://www.youtube.com/watch?v=9zySeKj7cz8 |
| Example | *Github Issues Tracker (React + Redux)* |
https://github.com/reduxjs/redux-templates/tree/master/react-issues |

### 8.5 Challenge

> **Clone the Movie Search App** – Move the API fetching logic into Redux
Toolkit slices, store search results, and use selectors to retrieve data
in components. Add a “favorites” feature stored in Redux.

---

## 9. Build Tools – **Webpack, Vite, Babel**

### 9.1 Why Build Tools?

* Bundle JS, transpile modern syntax, handle assets, enable HMR.

### 9.2 Webpack Basics

* Entry, output, loaders (`babel-loader`, `css-loader`), plugins
  (`HtmlWebpackPlugin`).

### 9.3 Vite – Fast Development Server

* Zero‑config for React/Vue.

### 9.4 Babel

* Transpile ES6+ to browser‑compatible code.

### 9.5 Resources

| Type | Title | Link |
|------|-------|------|
| Article | *Webpack 5 Crash Course – Scotch.io* |
https://scotch.io/tutorials/webpack-5-tutorial |
| Video | *Vite Introduction – The Net Ninja* |
https://www.youtube.com/watch?v=5jB6M9G_0bM |
| Docs | *Babel – Getting Started* | https://babeljs.io/docs/en/ |

### 9.6 Challenge

> **Migrate a React project** – Start from a `create-react-app` app, eject
it, and re‑configure using Webpack + Babel manually. Compare bundle sizes.


---

## 10. Version Control & CI – **Git & GitHub Actions**

### 10.1 Git Essentials

* `clone`, `branch`, `commit`, `merge`, `rebase`, `.gitignore`.

### 10.2 GitHub Flow

* Pull‑request based workflow, code reviews, protected branches.

### 10.3 CI with GitHub Actions

* Run linting, unit tests, build on every push/PR.

### 10.4 Resources

| Type | Title | Link |
|------|-------|------|
| Guide | *Pro Git Book* (online) | https://git-scm.com/book/en/v2 |
| Video | *GitHub Actions Tutorial – Traversy Media* |
https://www.youtube.com/watch?v=R8_veQiYBjI |
| Workflow Example | *Node.js CI Workflow* |
https://github.com/actions/setup-node#example-workflow-file |

### 10.5 Challenge

> **Add CI** – Create a GitHub repository for the Movie Search app, write
a workflow that installs dependencies, lints with ESLint, runs Jest tests,
and builds the production bundle.

---

## 11. Node.js Fundamentals

### 11.1 Runtime Overview

* Event loop, non‑blocking I/O, V8 engine.

### 11.2 Modules

* CommonJS (`require`, `module.exports`) vs ES Modules (`import`,
  `export`).

### 11.3 npm & npx

* Managing dependencies, scripts, `npx` for one‑off commands.

### 11.4 REPL & Debugging

* `node`, `node --inspect`, Chrome DevTools for server code.

### 11.5 Resources

| Type | Title | Link |
|------|-------|------|
| Docs | *Node.js – Official Docs* | https://nodejs.org/en/docs/ |
| Video | *Node.js Crash Course – Traversy Media* |
https://www.youtube.com/watch?v=fBNz5xF-Kx4 |
| Article | *Understanding the Event Loop* |
https://nodejs.dev/learn/the-nodejs-event-loop |

### 11.6 Challenge

> **CLI Todo App** – Build a command‑line tool that lets you add, list,
complete, and delete todos stored in a local JSON file. Use `commander`
for argument parsing.

---

## 12. Express.js API Development

### 12.1 Setting Up an Express Server

```bash
npm init -y
npm i express cors dotenv
```

```js
// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({status: 'OK'}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
```

### 12.2 Routing & Middleware

* Router modules, route parameters, `next()`, error‑handling middleware.

### 12.3 Responding with JSON, status codes, validation (Joi).

### 12.4 Resources

| Type | Title | Link |
|------|-------|------|
| Docs | *Express – Guide* | https://expressjs.com/en/guide/routing.html |
| Video | *Express.js Crash Course – Traversy Media* |
https://www.youtube.com/watch?v=L72fhGm1tfE |
| Tutorial | *Build a REST API with Express & MongoDB* |
https://dev.to/dcodeyt/build-a-rest-api-with-nodejs-express-and-mongodb-3g0https://dev.to/dcoeyt/build-a-rest-api-with-nodejs-express-and-mongodb-3g03 |

### 12.5 Challenge

> **Simple Blog API** – Implement RESTful endpoints for posts: `GET 
/posts`, `POST /posts`, `GET /posts/:id`, `PUT /posts/:id`, `DELETE 
/posts/:id`. Use an in‑memory array to store posts; later replace with a
DB (next module). Add validation and proper HTTP response codes.

---

## 13. Databases – **MongoDB** & **PostgreSQL**

### 13.1 MongoDB (NoSQL)

* Document model, collections, ObjectId.
* **Mongoose** ODM – schemas, models, validation.

```bash
npm i mongoose
```

```js
import mongoose from 'mongoose';
await mongoose.connect(process.env.MONGO_URI);
const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  body: String,
  author: String,
  createdAt: {type: Date, default: Date.now}
});
export const Post = mongoose.model('Post', postSchema);
```

### 13.2 PostgreSQL (SQL)

* Relational, ACID, powerful query language.

```bash
npm i pg
```

```js
import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const getPosts = async () => {
  const { rows } = await pool.query('SELECT * FROM posts ORDER BY 
created_at DESC');
  return rows;
};
```

### 13.3 Migrations & Seed Data

* **MongoDB**: `mongoose-seed` or manual scripts.
* **PostgreSQL**: `node-pg-migrate` or **Knex**.

### 13.4 Resources

| Type | Title | Link |
|------|-------|------|
| MongoDB Docs | *Mongoose Quick Start* |
https://mongoosejs.com/docs/index.html |
| Postgres Docs | *node-postgres (pg) guide* | https://node-postgres.com/ 
|
| Video | *SQL vs NoSQL – The Net Ninja* |
https://www.youtube.com/watch?v=HXV3zeQKqGY |
| Tutorial | *Full‑Stack MERN App* |
https://www.freecodecamp.org/news/mern-stack-tutorial/ |
| Tutorial | *Full‑Stack with Express, PostgreSQL & React* |
https://www.digitalocean.com/community/tutorial_series/how-to-build-a-full-https://www.diitalocean.com/community/tutorial_series/how-to-build-a-full-stack-application-with-react-express-and-postgresql |

### 13.5 Challenge

> **Persist Blog API** – Replace the in‑memory posts from Module 12 with a
real database:
> * Option A: MongoDB + Mongoose.
> * Option B: PostgreSQL + `pg`.  
    > Implement **pagination** (`limit`/`skip` or `OFFSET/FETCH`) and **search
    by title**.

---

## 14. Authentication & Authorization

### 14.1 Password Hashing

* `bcryptjs` or `argon2`.

```bash
npm i bcryptjs jsonwebtoken
```

```js
import bcrypt from 'bcryptjs';
const hashed = await bcrypt.hash(password, 12);
const match = await bcrypt.compare(candidatePassword, hashed);
```

### 14.2 JWT (Stateless)

* Sign tokens, set expiration, protect routes via middleware.

```js
import jwt from 'jsonwebtoken';
const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: 
'1d'});
```

### 14.3 Sessions (Stateful)

* `express-session`, store in Redis for production.

### 14.4 OAuth2 / Social Login

* Passport.js strategies (`google`, `github`, etc.).

### 14.5 Resources

| Type | Title | Link |
|------|-------|------|
| Article | *JWT Authentication in Node.js* |
https://jasonwatmore.com/post/2020/07/18/nodejs-api-authentication-with-jwthttps://jasonwatmore.com/post2020/07/18/nodejs-api-authentication-with-jwt |
| Video | *Passport.js Tutorial – Traversy Media* |
https://www.youtube.com/watch?v=6FOq4cUdHkM |
| Guide | *OWASP Authentication Cheat Sheet* |
https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.hhttps://cheatsheetseries.owap.org/cheatsheets/Authentication_Cheat_Sheet.html |

### 14.6 Challenge

> **Secure Blog API** – Add user registration and login endpoints. Protect
the blog CRUD routes so only authenticated users can create/update/delete,
while anyone can read. Use JWT stored in an HTTP‑only cookie.

---

## 15. Testing Back‑End – **Mocha**, **Chai**, **Supertest**

### 15.1 Setup

```bash
npm i -D mocha chai supertest
```

Create `test/` folder. Example test:

```js
// test/posts.test.js
import request from 'supertest';
import { app } from '../src/server.js'; // your Express instance
import { expect } from 'chai';

describe('GET /api/posts', () => {
  it('should return an array of posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });
});
```

Run with `npm test` (add script `"test": "mocha"`).

### 15.2 Types of Tests

* **Unit** – isolated functions (e.g., utils).
* **Integration** – API endpoints with a test DB (use an in‑memory DB like
  `mongodb-memory-server` or a separate test schema).
* **End‑to‑End** – can be done later with Cypress or Playwright.

### 15.3 Resources

| Type | Title | Link |
|------|-------|------|
| Docs | *Mocha – Getting Started* | https://mochajs.org/#getting-started 
|
| Video | *Testing Node.js APIs with Mocha & Supertest* |
https://www.youtube.com/watch?v=Vj8t8UOZfF0 |
| Article | *Testing Express Apps – Scotch.io* |
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai |

### 15.4 Challenge

> **Test Coverage for Blog API** – Write unit tests for utility functions
(e.g., password hashing), integration tests for each route, and achieve at
least 80 % code coverage (use `nyc`/`c8`).

---

## 16. Deploying Full‑Stack Apps

### 16.1 Front‑End Hosting

* **Vercel**, **Netlify**, **Cloudflare Pages** – automatic builds from
  Git, preview URLs.

### 16.2 Back‑End Hosting

| Platform | Typical Use | Quick Start |
|----------|-------------|-------------|
| **Render** | Managed Node/Express services, automatic TLS |
`render.yaml` + push to GitHub |
| **Heroku** (legacy) | Simple dynos, free tier (until 2023) | `Procfile` 
(`web: npm start`) |
| **Fly.io** | Global containers, edge‑deployed | `flyctl launch` |
| **Docker + VPS** | Full control, production‑grade | Build Dockerfile, 
`docker compose up -d` |

### 16.3 Environment Variables & Secrets

* Use platform UI, `.env` files (never commit).

### 16.4 CI/CD Integration

* GitHub Actions can trigger deployments (Vercel CLI, Render deploy hook).


### 16.5 Resources

| Type | Title | Link |
|------|-------|------|
| Guide | *Deploy a MERN App to Render* |
https://render.com/docs/deploy-mongodb |
| Video | *Deploying Full‑Stack React + Node App to Vercel* |
https://www.youtube.com/watch?v=F3N2D8eYt7c |
| Article | *Dockerizing a Node.js App* |
https://nodejs.dev/learn/how-to-dockerize-a-nodejs-web-application |

### 16.6 Challenge

> **Deploy the Complete Project** – Take your final full‑stack app
(front‑end React + back‑end Express + DB) and deploy:
> * Front‑end on Vercel (or Netlify).
> * Back‑end on Render (or Fly.io).
> * Connect the front‑end to the live API.
> * Add a health‑check endpoint (`/api/health`) and confirm it returns
    `200`.

---

## 17. Advanced Topics

| Topic | Why It Matters | Starter Resources |
|-------|----------------|-------------------|
| **GraphQL** (Apollo Server & Client) | Efficient data fetching, type 
safety | https://www.apollographql.com/docs/react/ |
| **WebSockets** (`socket.io`) | Real‑time chat, notifications |
https://socket.io/docs/v4/ |
| **Server‑Side Rendering (SSR) & Next.js** | SEO, faster first paint |
https://nextjs.org/learn |
| **TypeScript** (strict typing) | Safer codebases, IDE assistance |
https://www.typescriptlang.org/docs/ |
| **Performance Optimizations** (lazy loading, code‑splitting, caching) |
Faster UX, lower bandwidth | https://web.dev/performance/ |
| **Security Hardening** (Helmet, rate limiting, CSP) | Protect against 
common attacks |
https://expressjs.com/en/advanced/best-practice-security.html |
| **Microservices & Message Queues** (RabbitMQ, Kafka) | Scaling large 
systems | https://www.youtube.com/watch?v=8G4A0J7uGKY |

### Mini‑Challenge

> Pick **one** advanced topic, integrate a tiny prototype into your
existing project, and write a short blog post (≈ 500 words) explaining
design decisions and lessons learned.

---

## 18. Capstone Project – **Full‑Stack “Event Planner”**

### 18.1 Project Description

Build a production‑ready web application that lets users:

1. **Create an account** (email + password).
2. **Log in** (JWT stored in HTTP‑only cookie).
3. **Create, edit, delete, and view events** (title, date, location,
   description).
4. **Invite other registered users** to an event (many‑to‑many
   relationship).
5. **RSVP** (attending / not attending).
6. **Real‑time chat** for each event (WebSockets).

### 18.2 Feature Checklist

| Category | Feature |
|----------|---------|
| **Auth** | Register, login, password reset (email stub). |
| **API** | RESTful endpoints for events, invitations, RSVP. |
| **DB** | Use PostgreSQL (or MongoDB) with relational join tables (or 
embedded docs). |
| **Front‑End** | React + React Router + Redux Toolkit (or Context). |
| **Real‑Time** | `socket.io` integration for event chat rooms. |
| **Testing** | Unit + integration tests (≥80 % coverage). |
| **CI/CD** | GitHub Actions lint → test → build → deploy. |
| **Deployment** | Front‑end on Vercel, back‑end on Render. |
| **Docs** | `README.md` with setup, architecture diagram, API spec 
(OpenAPI/Swagger). |
| **Accessibility** | Basic WCAG compliance (ARIA labels, focus 
management). |
| **Performance** | Code‑splitting, lazy loading of chat component. |
| **Monitoring** | Simple health endpoint + logging (Morgan). |

### 18.3 Suggested Directory Structure

```
event-planner/
│
├─ client/                # React app (Vite)
│   ├─ src/
│   │   ├─ components/
│   │   ├─ pages/
│   │   ├─ store/
│   │   └─ App.jsx
│   └─ vite.config.js
│
├─ server/                # Express API
│   ├─ src/
│   │   ├─ controllers/
│   │   ├─ models/
│   │   ├─ routes/
│   │   ├─ middleware/
│   │   └─ index.js
│   ├─ .env.example
│   └─ Dockerfile
│
├─ .github/
│   └─ workflows/
│       └─ ci.yml
│
├─ docker-compose.yml
└─ README.md
```

### 18.4 Deliverables

* Public GitHub repo (with proper `.gitignore`).
* Live URLs for front‑end and back‑end.
* Documentation (setup, API reference, deployment instructions).

### 18.5 Evaluation Criteria

| Area | Points |
|------|--------|
| **Correctness** (features work as described) | 30 |
| **Code Quality** (readability, linting, DRY) | 20 |
| **Testing** (coverage, meaningful tests) | 15 |
| **CI/CD** (automated pipeline) | 10 |
| **Security** (hashed passwords, JWT, input validation) | 10 |
| **Documentation & UX** (README, UI polish) | 15 |

---

## How to Use This Markdown File

1. **Copy** the entire content into a file named `JS-Fullstack-Course.md`.

2. Open the file in VS Code (or any markdown viewer) to follow the
   curriculum step‑by‑step.
3. For each module:
    * Read the *Resources* section.
    * Complete the *Challenge* (most have starter code suggestions).
    * Commit your progress regularly (use the Git workflow from Module 10).


Happy coding! 🚀  
