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
    // document.body.innerHTML = `
    //         <label for="add" class="add"></label>
    //         <input 
    //             name="add"
    //             id="add"
    //             placeholder="Add to your list.."
    //         />
    //         <ul class="listContainer"></ul>`;

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
    // localStorage.clear();
    newItem.addNewToDo(mainArr, 'Go Mall');   
    newItem.editItem(3, "Go Market");    
    const MyToDo = new MyToDoList();
    const val = MyToDo.tasks[2].description;
    expect(val).toBe('Go Market');
  });
});