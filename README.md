# ToDo List Application

This is a simple ToDo List application built with React on the frontend and Node.js/Express for the backend. It allows users to create, manage tasks, and sign up/log in to their accounts. The app also includes a contact form and task status updates.

### Features
- Add Task: Users can add tasks to their to-do list.
- View Tasks: All tasks are displayed with options to mark them as completed or delete them.
- Sign Up: Users can create a new account with their name, email, and password.
- Login: Registered users can log in with their email and password.
- Contact Us: A contact form to reach out with any questions or issues.
- Task Status Update: Users can update the status of their tasks.

## Technologies Used 
- ###  Frontend:
  - React
  - React Router for page navigation
  - Axios for API requests
  - React-Bootstrap for UI components
  - Bootstrap for styling
- ### Backend:
  - Node.js with Express.js
  - MySQL for database management
  - CORS for cross-origin requests
## Project Structure
- ###  Frontend:
  - App.js: Main file that sets up routing for the app.
  - AddTask.js: Component for adding new tasks to the to-do list.
  - ToDoListDB.js: Component for displaying tasks from the database.
  - Login.js: Login component for user authentication.
  - SignUp.js: Sign-up component for new users.
  - ContactForm.js: Form to submit inquiries or feedback.

- ### Backend:
  - server.js: The main Express server file.
  - dbConnection.js: Manages database connection to MySQL.
  - Routes/tasks.js: Routes for handling tasks (CRUD operations).
 - Routes/auth.js: Routes for login and sign-up functionality.
 - Routes/tasks.js: Routes for handling tasks (CRUD operations).

## State Tree
App State
│
├── user (String)
│   └── Represents the currently logged-in user. (e.g., "John Doe" or "")
│
├── task (Array)
│   └── Array of task objects.
│       └── Each task has:
│           ├── taskid (Number)           - Unique identifier for the task.
│           ├── tasks (String)           - Description of the task.
│           ├── status (String)          - Task status (e.g., 'Pending', 'Completed').
│           └── any other task-specific properties (like priority, due date, etc.)
│
├── formData (Object)
│   └── Holds form data for task, login, and contact form submission.
│       ├── tasks (String)              - Task description input.
│       ├── name (String)               - Name input (e.g., for contact form or signup).
│       ├── email (String)              - Email input (e.g., for login or contact form).
│       ├── message (String)            - Message input (e.g., for contact form).
│       └── password (String)           - Password input (e.g., for login or signup).
│
├── errors (Object)
│   └── Stores validation errors for the forms.
│       ├── name (String)               - Error message for 'name' (e.g., "Name is required").
│       ├── email (String)              - Error message for 'email' (e.g., "Email is invalid").
│       ├── message (String)            - Error message for 'message' (e.g., "Message cannot be empty").
│       ├── password (String)           - Error message for 'password' (e.g., "Password is too short").
│       └── any other form-specific error messages.
│
└── contactForm (Object)
    └── Represents the state related to the contact form.
    └── name (String)           - The user's name entered in the contact form.
    └── email (String)          - The user's email entered in the contact form.
    └── message (String)        - The message entered in the contact form.
    └── errors (Object)         - Stores errors specific to the contact form.
        └── name (String)       - Error message for contact form 'name'.
        └── email (String)      - Error message for contact form 'email'.
        └── message (String)    - Error message for contact form 'message'.


## Wireframes / Screenshots
![alt text](<./client/public/images/wireframe-screenshot1.png>)
![alt text](<./client/public/images/wireframe-screenshot2.png>)
![alt text](<./client/public/images/Screenshot 2025-01-24 151210.png>)
![alt text](<./client/public/images/Screenshot 2025-01-24 151231.png>)
![alt text](<./client/public/images/Screenshot 2025-01-24 151415.png>)
![alt text](<./client/public/images/Screenshot 2025-01-24 151437.png>)
![alt text](<./client/public/images/Screenshot 2025-01-24 151451.png>)
![alt text](<./client/public/images/Screenshot 2025-01-24 151536.png>)
![alt text](<./client/public/images/Screenshot 2025-01-24 151601.png>)
![alt text](<./client/public/images/Screenshot 2025-01-24 151618.png>)
![alt text](<./client/public/images/Screenshot 2025-01-24 151632.png>)
## User Stories
- As a user I would like to be able to add objects to a list.
- As a user I would like to be able to delete objects from a list
- As a user I would like for the website to be easy to navigate. 

## Possible Improvement's
- Add more interactive features such as pictures or gifs.
- Make more appealing visually.
- work on overall styling of the app by completing additional list options.
## My linkedIn 
- [www.linkedin.com/in/reyes-lawson-b89a4b324](https://www.linkedin.com/in/reyes-lawson-b89a4b324)

## Installation

### Prerequisites

- Node.js installed on your local machine.

- MySQL installed and running.

### Backend Setup
1. Clone repository:

    git clone https://github.com/your-username/todo-list-app.git 

     cd todo-list-app/backend
  

2. Install dependencies:

    npm install 

3.  Create a new MySQL database and use the following schema:

  CREATE DATABASE todolistmanager;

  USE todolistmanager;

  CREATE TABLE tasks (

    taskid INT AUTO_INCREMENT PRIMARY KEY,

    tasks VARCHAR(255) NOT NULL,

    status VARCHAR(255) DEFAULT 

  );

  CREATE TABLE login (

   id INT AUTO_INCREMENT PRIMARY KEY,

   name VARCHAR(255),

   email VARCHAR(255) UNIQUE,

   password VARCHAR(255)

   );


  CREATE TABLE usermessages (

   id INT AUTO_INCREMENT PRIMARY KEY,

   name VARCHAR(255),

   email VARCHAR(255),

   message TEXT

  );


4. Update dbConnection.js with your MySQL credentials.

5. Run the backend server:

### Frontend Setup

1. Navigate to frontend folder:

  cd todo-list-app/frontend

2. Install dependencies:

  npm install

3. Run the frontend:

  npm start

4. The frontend will now be running on http://localhost:3000.



## Usage

- Login: Users can log in using their email and password.
- Sign Up: New users can register by providing their name, email, and password.
- Add Task: After logging in, users can add tasks to the to-do list.
- Contact Us: Users can send messages via the contact form.
- Task Status: Users can update the task status to mark them as completed.



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## My linkedIn 
- [www.linkedin.com/in/reyes-lawson-b89a4b324](https://www.linkedin.com/in/reyes-lawson-b89a4b324)

## License

[MIT](https://choosealicense.com/licenses/mit/)