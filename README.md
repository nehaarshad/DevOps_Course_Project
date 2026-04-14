# Simple Blogging Web App

This project is a simple blogging web application built using React and Sequelize ORM.  
It implements a blog management system with Users, Blogs, and Comments, including relationships between them.

---

## Features

### Users
- Display all users with their blogs and comments
- Search user with blog and comment details
- Create, update, and delete users

---

### Blogs
- Display all blogs with comments (by user ID)
- Search blogs using user ID and blog ID
- Create, update, and delete blogs

---

### Comments
- Display comments using user ID and blog ID
- Search comment using user, blog, and comment ID
- Create, update, and delete comments

---

##  Relationships
- One User → Many Blogs (one-to-many)
- One Blog → One User
- Comments belong to both User and Blog

---

##  CI/CD Pipeline
This project uses GitHub Actions to automate:
- Building Docker images
- Pushing images to Docker Hub
- Deploying application to AWS EC2

---

## ▶Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode  
Open http://localhost:3000

### `npm run build`
Builds the app for production

### `npm test`
Runs tests in watch mode

---

##  Deployment
- Docker image is built automatically using GitHub Actions
- Image is pushed to Docker Hub
- Application is deployed on AWS EC2

---

## Changelog

- Initial project setup by Neha Arshad
- Updated README and CI/CD pipeline by Hafsa Sarfaraz
- Contributions by Areej Fatima and Momina
- UI improvements and styling updates
- Added Docker and GitHub Actions integration

---

## Team Contributions

- Neha Arshad – Project initialization
- Hafsa Sarfaraz – CI/CD and documentation
- Areej Fatima – Development contributions
- Momina – UI improvements (background color)
- Iram – GitHub collaboration and feature branch work

---

##  Proof of Deployment
- GitHub Actions pipeline executed successfully
- Docker image pushed to Docker Hub
- Application deployed on AWS EC2