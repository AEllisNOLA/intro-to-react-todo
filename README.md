## Checkpoint 2750

Completed. 
- Used create-react-app to initialize the boilerplate. 
- Created a Components folder with the <ToDoItem /> component. 
- <ToDoItem /> is successfully rendering on screen.

## Checkpoint 2751
Completed. 
- Added constructor/super and defined initial state. 
- Isolated items in the todoArray with .map() so that many arrays could be shown via one <ToDoItem /> line.
- Added props to that single <ToDoItem /> line to connect to the data from the initial state.
- In <ToDoItem /> component, created a checkbox. Hooked the checkbox and the hard-coded text to isCompleted and description, so that the data in the initial state is now showing.

## Checkpoint 2752 (part 1)
In Progress.
- Created event function toggleComplete() and gave it to <ToDo /> entry as a prop.
- Added onChange event listener to <ToDo /> component
- Added index parameter to toggleComplete() to know which checkbox is being clicked.
- Updated state by making a copy of todosArray and individualized tasks using their index. Ternary operator switches isCompleted now. Then the state is set to the new value of isCompleted.

PUSH!

## Checkpoint 2752 (part 2)
- Added text/submit form.
- Created handleSubmit() and handleChange()
- Added ability to submit new ToDos.


## Assignment 2752
- Added deleteToDo() method.
- Passed deleteToDo as <ToDoList /> prop
- Added delete button to <ToDoList /> component with event listener calling deleteToDo()
