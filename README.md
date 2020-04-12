## TYPESCRIPT

`npx create-react-app my-app --template typescript`

## BOOTSTRAPT

`npm install react-bootstrap bootstrap`

<br />
En App.tsx

`import "bootstrap/dist/css/bootstrap.min.css";`

## REDUX

`npm install redux react-redux --save`

`npm install @types/react-redux`

<br />
//chrome dev tool redux

`npm install --save redux-devtools-extension`

```
import { createStore, compose } from "redux";

// import the root reducer
import rootReducer from "./reducers";

declare global {
interface Window {
**REDUX_DEVTOOLS_EXTENSION_COMPOSE**?: typeof compose;
}
}

const composeEnhancers = window.**REDUX_DEVTOOLS_EXTENSION_COMPOSE** || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
```

### REDUX-SAGA

`npm install redux-saga --save`

```
import { createStore, compose, applyMiddleware } from "redux";
// import the root reducer
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export default store;
```

## AXIOS

`npm install axios --save`

```
import axios from "axios";

export default axios.create({ baseURL: "https://api.github.com/" });

```

## TESTING -> cypress, jest, react-testing-library

### jest and react-testing-library

`yarn add @types/jest react-testing-library`

`npm install --save-dev @testing-library/react`

`npm install --save-dev react-test-renderer @testing-library/jest-dom`

Test Example App.test.tsx

```
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("renders learn react link", () => {
  const { getByText, debug } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  debug();
});
```

`npm run test`

### cypress

`npm install cypress --save-dev`

Configure Cypress

```
{
  "baseUrl": "http://localhost:3000"
}
```

Cypress Test Example app.spec.js

```
describe("App Page", () => {
  it("Render Learn react Link", () => {
    cy.visit("/");
    cy.get("a").should("have.text", "Learn React");
  });
});
```

Open cypress:
`npx cypress open`

## ROUTER

npm install react-router-dom
npm install @types/react-router-dom --save

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
