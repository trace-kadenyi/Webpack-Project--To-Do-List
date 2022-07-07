import createTodoListComponents from "./createTasksAndEvents.js";
import myToDoList from "./mainContainerClass.js";

// initiate new instance of main class container
    let myToDo = new myToDoList();
// call the ul element that contains all list items
    const listContainer = document.querySelector('.listContainer');

// instantiate another class - carries the objects in the array and the necessary methods
    class oneTaskListItem {
        constructor(index, description, completed = false) {
        this.index = index;
        this.description = description;
        this.completed = completed;
        }
    
    // add 
        addNewToDo(newToDo) {
        this.description = newToDo;
        this.index = myToDo.tasks.length + 1;
        // create task object
        myToDo.tasks.push({
            index: this.index,
            description: this.description,
            completed: this.completed,
        });
        // save to local storage
        localStorage.setItem('todotasks', JSON.stringify(myToDo.tasks));
        // update the length of the container
        createTodoListComponents(this, myToDo.tasks.length + 1);
        }
    
    // remove
        removeFromToDo(index) {
        myToDo.tasks = myToDo.tasks.filter((task) => task.index !== index);
        // update local storage
        localStorage.setItem('todotasks', JSON.stringify(myToDo.tasks));
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
            myToDo.tasks = myToDo.tasks.map((node, index) => {
                // increase the index of each task by one after the deletion of an item
            node.index = index + 1;
            return node;
            });
            // save changes to local storage
            localStorage.setItem('todotasks', JSON.stringify(myToDo.tasks));
        }
    
    // display 
        displayToDoList = () => {
            // select each task
        myToDo.tasks.forEach((task, index) => {
            // call this function to create each task anew and update the index numbers
            createTodoListComponents(task, index + 1);
        });
        // save changes to local storage
        localStorage.setItem('todotasks', JSON.stringify(myToDo.tasks));
        }
    
    
    // edit 
        editItem = (id, inputValue) => {
            // loop through array of objects and adjust task description
            for(let i = 0; i < myToDo.tasks.length; i++) {
                if(myToDo.tasks[i] === id) {
                    task.description = inputValue;
                }
            }
        // save changes to local storage
        localStorage.setItem('todotasks', JSON.stringify(myToDo.tasks));
        }
    }

    export { myToDo, oneTaskListItem };
