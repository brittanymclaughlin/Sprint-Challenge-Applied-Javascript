# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead.

1. What is the DOM?
************************************************************************
The DOM stands for Document Object Model which can be viewed as a logical tree that treats HTML documents as the tree and each element or node is an object representing a part of the document. The DOM is a language independent interface that can be accessed and manipulated through different programming languages.
************************************************************************


2. What is an event?
************************************************************************
An event in JavaScript is the action of when a user or browser manipulates the page. 
************************************************************************


3. What is an event listener?
************************************************************************
An event listener is the block of code that listens to the actions of the user/browser for certain events and executes the function assigned to that certain event. 
************************************************************************


4. Why would we convert a NodeList into an Array?
************************************************************************
We would want to convert a Nodelist into an array because a nodelist may look like an array but it's not. Converting a nodelist into an array lets us run certain methods on the array as well as manipulate the array.
************************************************************************


5. What is a component?
*************************************************************************
A component is a bit of reusable code that can be used numerous times. It is used to keep code DRY and allows for your code to be more modular. 
*************************************************************************


### Git Set up

* [1] Fork the project into your GitHub user account
* [1] Clone the forked project into a directory on your machine
* [1] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [1] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [1] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [1] Following the instructions in the `Header/index.js` file, create the Header component.

* [1] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [1] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
