## Project Description

This project is a program that displays a list of beer recipes and allows users
to view individual recipes.

## Technologies

React.js - used for building the user interface and managing the application
state. Zustand - a state management library based on React Hooks.

## Resources

Beer recipes are obtained from a public API at the following address:
https://api.punkapi.com/v2/beers?page=n, where n is the page number.

## Task Description

The main task is to create a program that displays a list of beer recipes and
provides the following functionalities:

Retrieving and displaying a list of recipes during initial loading. Displaying
15 recipes on the screen. Implemented lazy loading functionality: if the user
scrolls to the end of the list, an additional 5 recipes are loaded. If there are
no more recipes to show, an API request is made to retrieve the next 25 recipes.
Ability to select multiple recipes. The user can cancel the selection of a
recipe by clicking on it again. When the "Delete" button is pressed, the
selected recipes are removed from the displayed list of recipes.

## Additional Features

Implement a filter that allows users to conveniently view the list of selected
recipes. Add a "Go Back" button that allows users to return to the previous
page. Store the selected recipes in the local storage, so that users don't lose
them when the page is refreshed.

## Usage Instructions

To use this program, follow these steps:

1. Go to the page https://syroidnadiia.github.io/airo-medical/ in your web
   browser.

2. On this page, you will find the program with a web interface that can be used
   directly in the browser.

**If you want to open the project in a development environment, follow these
steps:**

1. Clone the project repository by running the command git clone
   https://github.com/SyroidNadiia/airo-medical.git. This command will create a
   local copy of the project on your computer.

2. Open the cloned project in your development environment, such as Visual
   Studio Code or IntelliJ IDEA.

3. Perform any necessary configurations and set up the development environment
   according to the project requirements.

- Navigate to the project directory: cd project-directory;
- Install the dependencies: npm install;

4. Run the project in your development environment and perform development,
   testing, or any other necessary actions: npm start;

5. Open a web browser and go to http://localhost:3000.

Author Nadiia Syroid

Thank you for using the project!
