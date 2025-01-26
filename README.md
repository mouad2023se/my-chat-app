# Build a Secure Chat Application with React, Permit.io, and Firebase

This repository contains the project of a chat application using React, Firebase, and Permit.io for role-based access control (ReBAC). Users are assigned roles like Member and Moderator, with permissions to perform different CRUD operations in real-time chat rooms.

## Features

- Relationship-based access control (ReBAC) using Permit.io
- Real-time messaging with Firebase
- User authentication with Firebase Auth (Google login)
- Chat rooms with permissions: moderators and members
- CRUD actions with different permissions per role

## Technologies Used

- **React** – Frontend library for building UI
- **Firebase** – For real-time database and authentication
- **Permit.io** – Handles permissions and relationship-based access control
- **Cloud Functions** – Backend API for permission checks

## Setup and Installation

To run this project locally:

- **Clone the repository:**

  ```bash
  git clone https://github.com/mouad2023se/my-chat-app.git
  ```

- **Install dependencies:**

  ```bash
  npm install
  ```
- **Start the development server:**

  ```bash
  npm start
  ```
