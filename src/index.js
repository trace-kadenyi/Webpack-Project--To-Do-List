import addTask from './list.js';
import displayTasks from './displaytasks.js';
import deleteTask from './deletetask.js';
import './style.css';

const listContainer = document.querySelector('.listContainer');
// main container - array of objects
const tasks = JSON.parse(window.localStorage.getItem('todotasks')) ? JSON.parse(window.localStorage.getItem('todotasks')) : [];  

const taskItem = () => {
  const addListItem = document.querySelector('#add');
  // add event listener to input section
  addListItem.addEventListener('change', () => {
  // create object container for task
  const onetaskitem = {
    index: tasks.length + 1,
    description: addListItem.value,
    completed: false,
   };   
   // call the addTask function to push object to the array container
   addTask(tasks, onetaskitem);
   // save to local storage
   localStorage.setItem('todotasks', JSON.stringify(tasks));
 
  // create list item
  const oneTask = document.createElement('li');
  oneTask.className = 'onetask';
  oneTask.innerHTML = `
  <div class="taskdiv">
  <input class="checkbox" type="checkbox"/>
  <label id="${onetaskitem.index}" class="label">${onetaskitem.description}<i class="fa-solid fa-ellipsis-vertical fa-icon"></i></label></div>
  <div class="editdiv">
  <input id="${onetaskitem.index}" class="inputextedit" value="${onetaskitem.description}"></input><i class="fas fa-trash-alt fa-icon fa-lg deleted"></i></div>
  `;
  listContainer.appendChild(oneTask); 

  return listContainer;
});
}


// document.body.addEventListener('click', (e) => {
//   if(e.target.classList.contains('fa-icon')) {
//     console.log(e.target.parentNode.parentNode.parentNode);
//     let editIcon = document.querySelectorAll('.editdiv');
//     let taskDiv = document.querySelectorAll('.taskdiv');
//     // (e.target.parentNode.parentNode.parentNode).replaceChild(taskDiv, editIcons)
    
//     for(let i = 0; i < editIcon.length; i++) {
//       editIcon[i].style.display = 'flex';
//     }

//     taskDiv.forEach((taskObject) => {
//       taskObject.style.display = 'none';
//     })

//     // document.querySelector('.editdiv').style.display = 'block';
//     // deleteTask(e.target.parentElement.id);
//     // displayTasks(listContainer);
//   }
 
// })

document.body.addEventListener('click', (e) => {
  if(e.target.classList.contains('fa-icon')) {
    deleteTask(e.target.parentElement.id);
    displayTasks(listContainer);
  }
 
})

{/* <i class="fas fa-trash-alt deleted"></i> */}

window.onload = () => {
  displayTasks(listContainer);
};
// console.log(JSON.parse(window.localStorage.getItem('todotasks')));



taskItem();



