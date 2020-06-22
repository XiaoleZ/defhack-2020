This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tech Stack
* [React](https://reactjs.org/) - [React Available Scripts](https://github.com/XiaoleZ/defhack-2020/wiki/React-reference)
* [Material-UI.](https://medium.com/codingthesmartway-com-blog/getting-started-with-material-ui-for-react-material-design-for-react-364b2688b555)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [Sqlite](https://www.sqlite.org/index.html)

## Mental Health Project [Wiki](https://github.com/XiaoleZ/defhack-2020/wiki)

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

### Diagram
![pic](https://github.com/XiaoleZ/defhack-2020/blob/master/%3DDiagram.png)


## Team

### Memeber
[Xiaole Zeng](https://github.com/XiaoleZ),  [Christian Lo](https://github.com/ChrisChrisLoLo), [Myat Thu Ko](https://github.com/MyatThuKo), [Mella Liang](https://github.com/myliang47), [Serenity](https://github.com/Safox1)

### Team Time Zones 
HST, PST, MT, CST,  EST

### Team Build
* Slack
* Discord
* Google Drive
* Google Hangouts
