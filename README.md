# Payworks Tech Assignment

# Purpose

Project is a tech assignment that serves the purpose of showcasing developer's skills.
The project is a web app that communicates with Github's RESTful API. You can search for an organizations on github and view their repositories and its branches

## Main Technologies Used

- React/Redux
- reselect
- antd
- enzyme for testing

I used `react/redux` because I have good experience with it, `reselect`for its performance and it helps keep my redux store simple. Also, `antd` has a lot of cool and simple to use components, I used the project as an opportunity to get farmiliar with it.

## Project Structure

- `public` - public files
- `src` - source code
  - `components` - React components
  - `redux` - Contains state management code, I made use of the [ducks pattern](https://github.com/erikras/ducks-modular-redux)
  - `api` - Services for calling the github REST API

## Run Project

How to run project:

```
  git clone git@github.com:Chima1707/pwks-challenge.git
  npm install
  npm start
  then visit http://localhost:3000
```

There is a hosted version of the app at https://chima1707.github.io/pwks-challenge/

## Test Project

`npm test`

## Build Project

`npm run build`
