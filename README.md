# CS-554 Assignment 7
## Websockets and a Worker
===

For this lab, you implement basic websocket usage through Socket.io

This lab is extremely open ended in terms of display, and specific implementation

**You will need to run two processes!**

## The Lightweight Server
===

You will run a server that renders a single page to the user.

The user will connect to a websocket on the server.

The single page will have a form that the user will submit with the following information:

- A username for the search (once sent, this field becomes readonly and cannot be changed)
- A search query so that users may search for images (cleared on submit)
- A message to submit with the search (cleared on submit)

When the user submits a message, you will send this information, as well as the username. through a websocket to the server.

Ther server will publish a message through Redis to tell a worker to "research the image" (see below)/

When the worker is done "researching", it will publish a message of results from pixabay, as well as the user who searched for it, and their message.

When the web site receives a new result, it will notify all users about the message, sender, and the results from pixabay.

Using Javascript, the web page will then append the images found to an area on the page, along with the user and a message they send.

**To test, just use multiple windows and different usernames!**

## Your Worker
===

You will make a file, **worker.js**, that performs a single task

When the worker is informaed to research for a message, it will search the [pixabay free api](https://pixabay.com/api/docs/) for images

After it downloads these results ("researching"), it will publish a message from pixabay, as well as the user who searched for it, and their message.

## Your Routes
===

You will only have 1 route!

### GET /

This route will send a static file that allows users to connect via websocket to the rest of the app

## General Requirements
===

1. Remember to submit your **package.json** file but not your **node_modules** folder.
2. Remember to check for errors, everywhere!
3. Remember to have valid HTML and CSS!
4. Remember to check tota11y for basic accessibility errors!
