## TYPESCRIPT

`npx create-react-app my-app --template typescript`

## BOOTSTRAPT

`npm install react-bootstrap bootstrap`

<br />
En App.tsx

`import "bootstrap/dist/css/bootstrap.min.css";`

## REDUX-SAGA

`npm install redux react-redux --save`

`npm install @types/react-redux`

<br />
//chrome dev tool redux

`npm install --save redux-devtools-extension`

import { createStore, compose } from "redux";
<br />
// import the root reducer
import rootReducer from "./reducers";
<br />
declare global {
interface Window {
**REDUX_DEVTOOLS_EXTENSION_COMPOSE**?: typeof compose;
}
}
<br />
const composeEnhancers = window.**REDUX_DEVTOOLS_EXTENSION_COMPOSE** || compose;
<br />
const store = createStore(rootReducer, composeEnhancers());
<br />
export default store;

### REDUX-SAGA

npm install redux-saga --save

## HOOKS

### REDUX

import { useSelector, useDispatch } from "react-redux";
const store: any = useSelector(store => store);
const dispatch = useDispatch();
<Button onClick={() => dispatch({ type: "GET_PEOPLE", peopleId: 1 })}>
Action GET_PEOPLE
</Button>

## AXIOS

npm install axios --save

## TESTING -> cypress, jest, react-testing-library

### cypress

npm install cypress --save-dev
Open cypress: npx cypress open

### jest and

yarn add @types/jest react-testing-library
npm install --save-dev @testing-library/react react-test-renderer @testing-library/jest-dom
npm run test

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
