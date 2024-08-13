# Banner Management Feature

## Description
This project includes a banner management feature implemented with React and Node.js. The feature allows users to create, manage, and display banners with the following capabilities:

- **Banner Creation :** Users can input banner details including name, description, display status, timer (hour, minute, second), and a clickable link.
- **Dynamic Display :** Banners are dynamically displayed based on user input, including the remaining time formatted as a reverse countdown clock.
- **Toggle Functionality :** Banners can be toggled on or off using a switch control.
- **Data Management :** The feature includes functionality to fetch, add, and delete banner data from a MySQL database.

## Key Features:
- **Reverse Countdown Timer:** Shows the remaining time in a reverse clock format.
- **Banner Details:** Includes a description and a clickable link.
- **Toggle Display:** Allows users to enable or disable banners dynamically.
- **CRUD Operations:** Create, Read, Update, and Delete operations for managing banner data in the database.

## Technologies Used:

- **Frontend:** React for user interface development.
- **Backend:** Node.js with Express for server-side logic.
- **Database:** MySQL for data storage.
- **APIs:** RESTful APIs for data interaction between frontend and backend.

## Setup Instructions:
- Clone the repository.
- Install dependencies with npm install.
  ```
  npm install
  ```
- Configure your MySQL database and update the connection settings.
- Start the server (backend) .
  ```
  cd backend
  npm start
  ```
- To Run Frontend.
  ```
  cd frontend
  npm start
  ```

## Usage:
Navigate to the dashboard page to create and manage banners.
Use the toggle switch to enable or disable banners.
View and interact with the countdown timer and banner details in main page.

## Screenshot
Dashboard

![show_banner](https://github.com/user-attachments/assets/158a5c37-ea3a-40a7-9caf-06c3a2342df0)

Main Page

![show_banner_main_page](https://github.com/user-attachments/assets/299f81ca-c920-4e32-a3c7-203f35080229)
