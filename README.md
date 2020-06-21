This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
[React reference.](https://github.com/XiaoleZ/defhack-2020/wiki/React-reference)
[Material-UI.](https://medium.com/codingthesmartway-com-blog/getting-started-with-material-ui-for-react-material-design-for-react-364b2688b555)
## Mental Health Project

### Setup Guide
Requirements: Node.js, npm, yarn
Installation reference for Mac at [here](https://medium.com/@itsromiljain/the-best-way-to-install-node-js-npm-and-yarn-on-mac-osx-4d8a8544987a)

1. clone repository
2. cd api directory 
3. setup pipenv (requires pipenv to be installed)
4. activate the pipenv
5. create the database
6. pipenv install the requirements

```
git clone https://github.com/XiaoleZ/defhack-2020.git
cd defhack-2020/backend
pipenv shell
pipenv install
python3 create_tables.py
export FLASK_APP=api.py (different for windows)
```

### How to run
1. run React server
```
yarn start
```
2. Open another terminal and run to run flask server
```
yarn start-api
```
To see the application, access this url in your browser:
```
http://localhost:3000  *Frontend: React
http://localhost:5000  *Backend: Flask
```

* If you have `/bin/sh: react-scripts: command not found` try run `npm install`

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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
