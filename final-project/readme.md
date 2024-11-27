### Final Project Outline

Quest Log

### Github Link

https://cameroncrameriu.github.io/N220/final-project/

### Major Features

**Login Form**

- DOM Refereneces:
  - Username input (string)
  - Password input (string)
  - Log In Button
- Logic

  - Check for Username: if empty, prompt user to input a username (if-else statement)
  - Check for Password: if empty, prompt user to input a password (if-else statement)
  - Check for both Username and Password: if both are empty, prompt user for both (if-else statement)
  - Check if passwork meets criteria:
    - 8 or more characters (if-else, .length)
    - 1 or more capital letters (if-else, create a function to check if uppercase letter(s) are present in the username)
    - 1 or more number (if-else, isNaN)
  - If password does not meet criteria, prompt user to change it. Include criteria in the propmpt. (if-else)

  **Dash Board**

- DOM References

  - Username Label (string)
  - Logout Button (function)
  - Show Tasks (function, objects, div)

- Logic

  - Make the username a variable and then display the variable in the HTML
  - Create a function to log out
  - Create a function that displays the tasks (objects)

  **Tasks**

- DOM References

  - Allow user to add new task (function, object)
  - Allow users to mark a task as complete (function, boolean, object)
  - Allow users to remove a task from the list (function, object, button)
  - Allow users to change the text of the task (function, string, object, input)
  - Allow users to assign an additional property of the task (function, button)

- Logic

  - Make a function to create a new object that holds all the traits of the task
  - Make a function that will cross out a task once it is complete (if-else, boolean)
  - Make a function that will enable a user to remove items from the list of tasks, which will also update the display
  - Make a function to edit and update text in a task

  **Additional Features**

- DOM References

  - Allow users to manage options for the additional property (function object, input, string)
  - Tie tasks to the user signed in (object)
  - Allow users to see only tasks that they have created (object)

- Logic
  - Make a function to allow user to create custom properties for the task and update the dipslay to show the custom task
  - Create an object that links the username to the objects that make up the chosen tasks
  - Display the linked objects when typing in the username
