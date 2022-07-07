import { oneTaskListItem } from './todoObjectClass.js';
const listContainer = document.querySelector('.listContainer');


const createTodoListComponents = (todoListComponent, TaskID) => {
// create list element
  const oneTask = document.createElement('li');
  listContainer.appendChild(oneTask);

// create div for the checkbox and input values
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('taskdiv');
  oneTask.appendChild(taskDiv);

// checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('checkboxitem');
  checkbox.checked = false;
  taskDiv.appendChild(checkbox);

  // input
  const inputText = document.createElement('input');
  inputText.setAttribute('value', todoListComponent.description);
  inputText.setAttribute('disabled', '');
  taskDiv.appendChild(inputText);

  // ellipsis button
  const ellipsis = document.createElement('button');
  ellipsis.setAttribute('type', 'button');
  ellipsis.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;
  oneTask.appendChild(ellipsis);

  // delete button
  const deleteButton = document.createElement('button');
  deleteButton.className = "deletebutton";
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('id', TaskID);
  deleteButton.innerHTML = `<i class='fas fa-trash-alt'></i>`;
  // hide delete button
  deleteButton.style.display = 'none';
  oneTask.appendChild(deleteButton);


  ellipsis.addEventListener('click', (e) => {
    // get ellipsis grandparent
    const ellipsisGrandParent = e.target.parentNode.parentNode;
    // select the delete button and display
    ellipsisGrandParent.querySelector('.deletebutton').style.display = 'block';
    ellipsis.style.display = 'none';
    inputText.disabled = false;
    inputText.focus();
  });
// delete from to do list
  deleteButton.addEventListener('click', (e) => {
    const deleteItem = new oneTaskListItem();
    deleteItem.removeFromToDo(TaskID);
  });

  // edit text Item
  inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
    // make the current input text the actual input value
      inputText.placeholder = inputText.value;
      ellipsis.style.display = 'flex';
      deleteButton.style.display = 'none';
      inputText.removeAttribute('disabled');
      const listTask = new oneTaskListItem();
      listTask.editItem(TaskID, inputText.value);
      // set input field back to disabled
      inputText.setAttribute('disabled', '');
    }
  });
};

console.log(JSON.parse(localStorage.getItem('todotasks')))

export default createTodoListComponents;