import { OneTaskListItem } from './todoObjectClass.js';
import MyToDoList from './mainContainerClass.js';

const createTodoListComponents = (todoListComponent) => {
  const listContainer = document.querySelector('.listContainer');
  const addInput = document.querySelector('#add');
  addInput.value = '';
  // create list element
  const oneTask = document.createElement('li');
  listContainer.appendChild(oneTask);
  // create div for the checkbox and input values
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('taskdiv');
  taskDiv.setAttribute('id', todoListComponent.index);
  oneTask.appendChild(taskDiv);
  // checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', todoListComponent.index);
  checkbox.classList.add('checkboxitem');
  checkbox.checked = `${todoListComponent.completed ? 'checked' : ''}`;
  taskDiv.appendChild(checkbox);
  // input
  const inputText = document.createElement('input');
  inputText.className = 'inputtext';
  inputText.setAttribute('type', 'text');
  inputText.setAttribute('id', todoListComponent.index);
  inputText.setAttribute('value', todoListComponent.description);
  inputText.setAttribute('disabled', '');
  taskDiv.appendChild(inputText);
  // ellipsis button
  const ellipsis = document.createElement('button');
  ellipsis.setAttribute('type', 'button');
  ellipsis.classList.add('editButton');
  ellipsis.classList.add(todoListComponent.index);
  ellipsis.innerHTML = '<i class="fa-solid fa-ellipsis-vertical fa-icon fa-lg"></i>';
  oneTask.appendChild(ellipsis);
  // delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.classList.add(todoListComponent.index);
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('id', todoListComponent.index);
  deleteButton.innerHTML = `<i id="${todoListComponent.index}" class="fas fa-trash-alt fa-icon fa-lg"></i>`;
  // hide delete button
  deleteButton.style.display = 'none';
  oneTask.appendChild(deleteButton);
  ellipsis.addEventListener('click', (e) => {
    const siblingDeleteBtn = document.getElementsByClassName(
      `deleteButton ${todoListComponent.index}`,
    )[0];
    inputText.disabled = false;
    inputText.focus();
    ellipsis.style.display = 'none';
    siblingDeleteBtn.style.display = 'block';
  });
  // delete from to do list
  deleteButton.addEventListener('click', (e) => {
    const DeleteItem = new OneTaskListItem();
    DeleteItem.removeFromToDo(e.target.id);
  });
  // check items
  checkbox.addEventListener('change', (e) => {
    const checkedTasks = new OneTaskListItem();
    checkedTasks.checkTasks(e.target.id, e.target.checked);
  });

  // edit text Item
  inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      // make the current input text the actual input value
      inputText.placeholder = inputText.value;
      ellipsis.style.display = 'block';
      deleteButton.style.display = 'none';
      inputText.removeAttribute('disabled');
      const ListTask = new OneTaskListItem();
      ListTask.editItem(inputText.id, inputText.value);
      // set input field back to disabled
      inputText.setAttribute('disabled', '');
    }
  });
};
export default createTodoListComponents;
