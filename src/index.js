import './style.css';

const tasks = [
  {
    description: 'Go to the market',
    completed: false,
    index: 1,
  },
  {
    description: 'Do laundry',
    completed: false,
    index: 2,
  },
  {
    description: 'Go to the cinema',
    completed: false,
    index: 3,
  },
  {
    description: 'Visit my sick friend',
    completed: false,
    index: 4,
  },
];

const taskItem = () => {
  // call list container from html
  const listContainer = document.querySelector('.listContainer');
  // create unordered list
  const unorderedList = document.createElement('ul');
  unorderedList.className = 'listItems';
  listContainer.appendChild(unorderedList);
  // loop through the list
  for (let i = 0; i < tasks.length; i += 1) {
    const oneTask = document.createElement('li');
    oneTask.className = 'onetask';
    oneTask.innerHTML = `
    <input class="checkbox" type="checkbox"/>
    <label id="${tasks[i].index}" class="label">${tasks[i].description} <i class="fa-solid fa-ellipsis-vertical fa-icon"></i></label>`;
    unorderedList.appendChild(oneTask);
  }
  return listContainer;
};
taskItem();
