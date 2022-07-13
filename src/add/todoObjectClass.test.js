/**
 * @jest-environment jsdom
 */


import { OneTaskListItem } from "../modules/todoObjectClass.js";
import mockStore from "../__mocks__/mockLocalStore.js";

const mainArr = [];

document.body.innerHTML = `
<label for="add" class="add"></label>
<input 
    name="add"
    id="add"
    placeholder="Add to your list.."
/>
<ul class="listContainer"></ul>`;

window.localStorage = mockStore;
const newItem = new OneTaskListItem(1, 'description', false);

describe('add tasks', () => {
    test('add one task', () => {
        newItem.addNewToDo(mainArr, "Go shopping");
        const taskContainer = document.querySelectorAll('.listContainer li');
        expect(taskContainer).toHaveLength(1);
    });
    // test('add task two', () => {
    //     newItem.addNewToDo('walk the dog');
    //     const taskContainer = document.querySelectorAll('.listContainer li');
    //     expect(taskContainer).toHaveLength(2);
    // });
    // test('add task three', () => {
    //     newItem.addNewToDo('study');
    //     const taskContainer = document.querySelectorAll('.listContainer li');
    //     expect(taskContainer).toHaveLength(3);
    // });
})