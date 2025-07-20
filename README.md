
# Trailblazers (MERN + ML)

A sleek, full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js) as part of a project during a bootcamp at Travelers. Designed and developed in under 48 hours, the app delivers a modern and seamless UI/UX.

To enhance product discovery, we integrated a K-Nearest Neighbors (KNN) machine learning model using scikit-learn and Flask. This model recommends similar items based on attributes such as category, price, and user ratings, offering intelligent suggestions tailored to each product page.


## Demo

https://youtu.be/iTqogSXyR9c

## Installation

Prerequisites
```bash
  python, node, & mongo
```

Clone repo using `HTTP` or `SSH`

```bash
  git clone https://github.com/harshpatel-0/ecommerce-web-app.git
```
```bash
  git@github.com:harshpatel-0/ecommerce-web-app.git
```
Import dummy data into `MongoDB` & check `MongoDB Compass`
```bash
  # In the root dir, run:
  mongoimport --uri "mongodb://localhost:27017" --db capstone --collection products --type csv --headerline --file .\electronics_store_dummy_data.csv
  # Might have to modify port depending on what it's running on
```

Install required dependencies with `npm` and `pip`

```bash
  cd server
  npm install
  pip install -r requirements.txt
```
```bash
  cd client
  npm install
```

## Run Locally

First order of business is to open `3` seperate terminals
```bash
  # Terminal 1 - boot up server
  cd server 
  node server.js 
```
```bash
  # Terminal 2 - run FLASK for ML model
  cd server 
  python app.py
```   
```bash
  # Terminal 3 - run web app
  cd client 
  npm run dev
```   

## Built with
- MongoDB
- Express.js
- React
- Node.js
- Flask
- Sckit-learn
- Pandas
- Seaborn
- TailwindCSS

## Authors

- [@harshpatel-0](https://www.github.com/harshpatel-0)
- [@stanleyzhengs0](https://www.github.com/stanleyzhengs0)

