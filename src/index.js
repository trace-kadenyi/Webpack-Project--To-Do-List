import createTodoListComponents from './modules/createTasksAndEvents.js';
import { myToDo, oneTaskListItem } from './modules/todoObjectClass.js';
import './style.css';

const addListItem = document.querySelector('#add');

addListItem.addEventListener('change', (e) => {
  const addedItem = new oneTaskListItem();
  addedItem.addNewToDo(addListItem.value);
})

for(let i = 0; i <= myToDo.tasks.length; i++) {
  myToDo.tasks.forEach((task) => {
    if(task.index === i) {
      createTodoListComponents(task);
    }
  })
}





