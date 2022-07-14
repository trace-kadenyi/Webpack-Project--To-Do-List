/**
 * @jest-environment jsdom
 */

import { OneTaskListItem } from '../modules/todoObjectClass.js';
import MyToDoList from '../modules/mainContainerClass.js';

const mainArr = [];
const newItem = new OneTaskListItem(1, 'description', false);

describe('add and remove tasks', () => {
  test('add one task', () => {
    document.body.innerHTML = `
            <label for="add" class="add"></label>
            <input 
                name="add"
                id="add"
                placeholder="Add to your list.."
            />
            <ul class="listContainer"></ul>`;

    newItem.addNewToDo(mainArr, 'Go shopping');
    const listContainer = document.querySelectorAll('.listContainer li');
    expect(listContainer).toHaveLength(1);
  });

  test('add two task', () => {
    newItem.addNewToDo(mainArr, 'Swimming lesson');
    newItem.addNewToDo(mainArr, 'Practice Unit Testing');
    const listContainer = document.querySelectorAll('.listContainer li');
    expect(listContainer).toHaveLength(3);
  });

  test('Remove one task', () => {
    newItem.removeFromToDo(1);
    const listContainer = document.querySelectorAll('.listContainer li');
    expect(listContainer).toHaveLength(2);
  });
});

describe('Edit task', () => {
  test('edit task', () => {
    newItem.addNewToDo(mainArr, 'Go Mall');
    newItem.editItem(3, 'Go Market');
    const MyToDo = new MyToDoList();
    const val = MyToDo.tasks[2].description;
    expect(val).toBe('Go Market');
  });

  test('verify checked tasks', () => {
    document.body.innerHTML = `
<main class="main-todo">
      <h3>Today's To Do <i class="fa-solid fa-arrows-rotate fa-icon"></i></h3>
      <label for="add" class="add"></label>
      <input 
          name="add"
          id="add"
          placeholder="Add to your list.."
      />
      <ul class="listContainer"></ul>
      <div class="clearlist">
          <p class="clear">Clear all completed</p>
      </div>
      
  </main>`;
    const MyTodo = new MyToDoList();
    expect(newItem.checkTasks(MyTodo.tasks[0], true)).toBe(true);
  });
});

describe('clear completed tasks', () => {
  test('clear all completed', () => {
    const clearItems = new OneTaskListItem();
    const myArray = [
      { index: 1, description: 'Watch a movie', completed: false },
      { index: 2, description: 'Wash my clothes', completed: false },
      { index: 3, description: 'Visit a friend', completed: true },
    ];
    expect(clearItems.clearTasks(myArray)).toHaveLength(2);
  });
});