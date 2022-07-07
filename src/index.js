import createTodoListComponents from './modules/createTasksAndEvents.js';
import { MyToDo, OneTaskListItem } from './modules/todoObjectClass.js';
import './style.css';

const addListItem = document.querySelector('#add');
// add event listener to add tasks to the list
addListItem.addEventListener('change', () => {
  const AddedItem = new OneTaskListItem();
  AddedItem.addNewToDo(MyToDo.tasks, addListItem.value);
});
// loop through the main array to create the task body dynamically
for (let i = 0; i <= MyToDo.tasks.length; i += 1) {
  MyToDo.tasks.forEach((task) => {
    if (task.index === i) {
      createTodoListComponents(task);
    }
  });
}
