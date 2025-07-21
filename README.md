# Student Enrollment System

A responsive full-stack web application designed to manage course enrollments, track student subject completions, and handle dynamic academic data efficiently.

---

## Overview

This project simplifies the process of enrolling students into academic courses and tracking their progress through an intuitive interface. Built using modern web technologies, it enables real-time updates, persistent data management, and a smooth user experience for both students and administrators.

---

## Tech Stack

**Frontend:**
- HTML5
- CSS3
- JavaScript (ES6+)

**Backend:**
- Node.js
- Express.js

**Database:**
- MySQL

**Other Tools:**
- Git & GitHub for version control
- Postman for API testing

---

## Features

- **User-friendly enrollment forms** with real-time validation
- **Course management**: Add, update, and remove academic courses
- **Student tracking**: Monitor subjects enrolled and completed
- **Responsive UI** for accessibility across desktop and mobile
- **Backend API** with RESTful architecture using Express.js
- **MySQL integration** for persistent and relational data handling

---


## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CountessOreo/Student-Enrollment-System.git
   cd Student-Enrollment-System

2. **Install dependencies:**
  ```bash
  npm install
  ```

3. **Configure MySQL:**
- Create a MySQL database (e.g., student_enrollment)
- Import the provided SQL schema if available (e.g., schema.sql)
- Update database credentials in config.js or .env file

4. **Start the server:**
  ```bash
  node app.js
  ```

5. **Access the app:**
- Open your browser and go to http://localhost:3000

### Project Structure
   ```bash
   Student-Enrollment-System/
   │
   ├── public/              # Static assets (CSS, JS, Images)
   ├── views/               # Frontend pages (EJS or HTML)
   ├── routes/              # Express route handlers
   ├── models/              # Database queries
   ├── config/              # DB connection config
   ├── app.js               # Main Express app entry
   ├── package.json
   └── README.md
   ```
