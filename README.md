# formula1website
This is a demonstration project using: 

- [https://ergast.com/](https://ergast.com/) api
- Tailwind UI
- VueJS
- Cypress.io

## About this project
| Version | Developer | Project link 
|--|--|--|
| v1.0 | Russ Forster | [https://f1data.project.russforster.co.uk](https://f1data.project.russforster.co.uk)
This is a VueJS website built using data sourced from [https://ergast.com/](https://ergast.com/) api. It is comprised of the following site structure:

- Home
- All Drivers
- Final championship standing
- Last season performance of each driver
- Race list

The deployed files are located within docs folder, so that github can host the site pages.

All built files for production get produced into the dist folder


### Improvements

- Enable Driver URL's are not query stringed, but on their own subfolder format (e.g /driver/{driver-name-here})
- Combine data from other sources
- Go back through other season history (2020, 2019 etc)
- Filter by more variables for Driver list

## Getting started

- Clone the repo to your machine
- Enjoy!

## Commands available

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Component testings
```
npx cypress run-ct / npx cypress open-ct
```
All component tests are ran located in cypress folder
