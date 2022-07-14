/**
 * @jest-environment jsdom
 */

import { OneTaskListItem } from "../modules/todoObjectClass.js";
// import mockStore from "../__mocks__/mockLocalStore.js";

const mainArr = [];

// window.localStorage = mockStore;
const newItem = new OneTaskListItem(1, 'description', false);

describe('add tasks', () => {
    test('add one task', () => {
        document.body.innerHTML = `
            <label for="add" class="add"></label>
            <input 
                name="add"
                id="add"
                placeholder="Add to your list.."
            />
            <ul class="listContainer"></ul>`;
        
        newItem.addNewToDo(mainArr, "Go shopping");
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
        
        newItem.addNewToDo(mainArr, "Go shopping");
        newItem.addNewToDo(mainArr, "Practice Unit Testing");
        const listContainer = document.querySelectorAll('.listContainer li');
        expect(listContainer).toHaveLength(2);
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