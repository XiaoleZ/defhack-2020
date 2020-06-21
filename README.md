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


