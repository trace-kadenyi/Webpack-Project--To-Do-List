import { OneTaskListItem } from './modules/todoObjectClass.js';
import MyToDoList from './modules/mainContainerClass.js';

import './style.css';

const task = new OneTaskListItem();
const addListItem = document.querySelector('#add');
addListItem.addEventListener('change', () => {
  const MyToDo = new MyToDoList();
  const AddedItem = new OneTaskListItem();
  AddedItem.addNewToDo(MyToDo.tasks, addListItem.value);
});
const clearSelectedTasks = document.querySelector('.clear');
clearSelectedTasks.addEventListener('click', () => {
  const MyToDo = new MyToDoList();
  const task = new OneTaskListItem();
  const myArray = task.clearTasks(MyToDo.tasks);
  localStorage.setItem('todotasks', JSON.stringify(myArray));
  task.updateToDoIndex();
  task.displayToDoList();
});
window.onload = () => {
  task.displayToDoList();
};