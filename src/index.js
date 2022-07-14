// import { MyToDo, OneTaskListItem } from './modules/todoObjectClass.js';
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
  MyToDo.tasks = MyToDo.tasks.filter((task) => task.completed === false);
  localStorage.setItem('todotasks', JSON.stringify(MyToDo.tasks));
  task.updateToDoIndex();
  task.displayToDoList();
});
window.onload = () => {
  task.displayToDoList();
};