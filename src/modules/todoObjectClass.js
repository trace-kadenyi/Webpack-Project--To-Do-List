import createTodoListComponents from './createTasksAndEvents.js';
import MyToDoList from './mainContainerClass.js';

// initiate new instance of main class container
const MyToDo = new MyToDoList();
// call the ul element that contains all list items
const listContainer = document.querySelector('.listContainer');

// instantiate another class - carries the objects in the array and the necessary methods
class OneTaskListItem {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  // add
  addNewToDo(mainArr, newToDo) {
    this.description = newToDo;
    this.index = mainArr.length + 1;
    this.completed = false;
    // create task object
    mainArr.push({
      index: this.index,
      description: this.description,
      completed: this.completed,
    });
    // save to local storage
    localStorage.setItem('todotasks', JSON.stringify(mainArr));
    // update the length of the container
    createTodoListComponents(this, mainArr.length + 1);
  }

  // remove
  removeFromToDo(index) {
    MyToDo.tasks = MyToDo.tasks.filter((task) => task.index !== index);
    // update local storage
    localStorage.setItem('todotasks', JSON.stringify(MyToDo.tasks));
    // set container to empty in order to update the index
    listContainer.innerHTML = '';
    // update index
    this.updateToDoIndex();
    // display results
    this.displayToDoList();
  }

  // update Index
        updateToDoIndex = () => {
          // map through the array of objects
          MyToDo.tasks = MyToDo.tasks.map((node, index) => {
            // increase the index of each task by one after the deletion of an item
            node.index = index + 1;
            return node;
          });
          // save changes to local storage
          localStorage.setItem('todotasks', JSON.stringify(MyToDo.tasks));
        }

        // display
        displayToDoList = () => {
          // select each task
          MyToDo.tasks.forEach((task, index) => {
            // call this function to create each task anew and update the index numbers
            createTodoListComponents(task, index + 1);
          });
          // save changes to local storage
          localStorage.setItem('todotasks', JSON.stringify(MyToDo.tasks));
        }

        // edit
        editItem = (id, inputValue) => {
          // loop through array of objects and adjust task description
          for (let i = 0; i < MyToDo.tasks.length; i += 1) {
            if (MyToDo.tasks[i] === id) {
              MyToDo.tasks[i].description = inputValue;
            }
          }
          // save changes to local storage
          localStorage.setItem('todotasks', JSON.stringify(MyToDo.tasks));
        }
}

export { MyToDo, OneTaskListItem };
