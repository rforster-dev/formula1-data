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

### Pages and functionality 
- [Home](https://f1data.project.russforster.co.uk/)
-- Hero banner with data coming from API
-- List of the first 3 races with description coming from API
-- List of all teams racing in season from API
- [All drivers](https://f1data.project.russforster.co.uk/all-drivers.html)
-- All drivers listed with information, in conjunction with filtering functionality to filter by which drivers finished a race with a particular status (dnf, engine failure etc) from APIs
- [Specific drivers](https://f1data.project.russforster.co.uk/driver-results.html?driver=max_verstappen)
-- Formulated page from query parameter of driver, and information from subsequent API call to get season data of said driver
- [Final championship standings](https://f1data.project.russforster.co.uk/championship-standings.html)
-- List the top 3 final standings in "podium" order, and lists final table standings from API
- [Race list](https://f1data.project.russforster.co.uk/season-list.html)
-- Lists all races from the season with the information about each race (winner, fastest lap etc) from API

### Individual components 
- Header
-- This is made up of header title and links
- Next race strapline
-- This contains the next {round}, of the {season} at the {location} on the {date}
- Error message
-- This is a conditional block that will only display the error message passed into it from failing API's
- Footer
-- This is made up of links

The deployed files are located within docs folder, so that github can host the site pages. A CNAME record has been applied to point to this github repo.

All built files for production get produced into the dist folder

This has been tested using Cypress, Lighthouse, and exploratory testing and all API calls are have error handling. It is WCAG 2.1 AA compliant and fully responsive.

## Getting started

- Clone the repo to your machine or visit  [https://f1data.project.russforster.co.uk](https://f1data.project.russforster.co.uk) to navigate around the website
- All uncompiled code is located in "src" folder
- There are various comments throughout the files for the purpose of demonstrating thought and approach particularly around error handling
- Component test scripts are located in cypress/components folder

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
Note: If you are having problems running this command in your editor, try navigating to the folder in command prompt and running from there

### Lints and fixes files
```
npm run lint
```

### Component testings
```
npx cypress run-ct / npx cypress open-ct
```

