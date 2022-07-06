// display the list on the page
const displayTasks = (container) => {
  container.innerHTML = '';
    const allTasks = JSON.parse(localStorage.getItem('todotasks')).map((singletask) => 
      `
    <li class="onetask">
      <div class="taskdiv">
      <input class="checkbox" type="checkbox">
      <label id="${singletask.index}" class="label">${singletask.description} <i class="fa-solid fa-ellipsis-vertical fa-icon"></i></label></div>
    </li>
    <div class="editdiv">
  <input id="${singletask.index}" class="inputextedit" value="${singletask.description}"></input><i class="fas fa-trash-alt fa-icon fa-lg deleted"></i></div>
      `
    ).join('');
  
    container.innerHTML = allTasks;
 };

  export default displayTasks;