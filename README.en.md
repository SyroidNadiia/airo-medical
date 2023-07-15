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

Retrieve and display a list of recipes during the initial loading. Display 15
recipes on the screen. Implement lazy loading: if the user scrolls to the end of
the list, load additional 5 recipes. If there are no more recipes to display,
make an API request to retrieve the next 25 recipes. Allow multiple recipe
selection. Users can select a recipe by right-clicking on it. If at least one
recipe is selected, a "Remove" button should appear. When the "Remove" button is
clicked, the selected recipes should be removed from the list. Allow users to
cancel the selection of a recipe by clicking on it again. Allow users to
navigate to an individual recipe page by clicking on a recipe card with the left
mouse button.

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
