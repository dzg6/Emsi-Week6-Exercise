# Mork's Donuts
Made by Mark Reynolds

---
Readme is under construction.

Server did get any code commenting or refactoring due to time constraint

But it all works :P

---
Due to this being an assignment and under a short timeframe I was not able to get around to polishing every line of code, comments, or bugs. However, I still managed to build a working application and server.


## Concept:
This is an assignment for Emsi week 6. To create a donut shop online ordering system/POS. The user can create, update, and delete donuts. Place orders with POS, and refund any orders.

The Python server serves the api's requested and updates the orders and donut inventory which are stored in CSV files located in the <em>server/db</em> folder

<br />

## Install Instructions
To run this application you will need to run a python server and npm application.

### Python Server Install Instructions
In the <em>server</em> folder run
````
py install setup.py
````
Then run app.py in the python folder to start your server
````
py app.py
````

### NPM Install Instructions
In the <em>marks-donuts</em> folder run
````
npm install
````
````
npm start
````
Now go to http://localhost:3000/ in your preferred browser.
NOTE: Application was only tested on firefox and chrome.


## Python Dependcies 

* flask
* pandas
* flask_restful
* flask_cors
* pathlib
* requests

## NPM Dependcies 

* React
* Redux
* React-router