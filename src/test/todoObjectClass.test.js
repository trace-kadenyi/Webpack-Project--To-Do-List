/**
 * @jest-environment jsdom
 */

import { OneTaskListItem } from '../modules/todoObjectClass.js';

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
    document.body.innerHTML = `
            <label for="add" class="add"></label>
            <input 
                name="add"
                id="add"
                placeholder="Add to your list.."
            />
            <ul class="listContainer"></ul>`;

    newItem.addNewToDo(mainArr, 'Go shopping');
    newItem.addNewToDo(mainArr, 'Practice Unit Testing');
    const listContainer = document.querySelectorAll('.listContainer li');
    expect(listContainer).toHaveLength(2);
  });

  test('Remove one task', () => {
    newItem.removeFromToDo(1);
    const listContainer = document.querySelectorAll('.listContainer li');
    expect(listContainer).toHaveLength(2);
  });
});