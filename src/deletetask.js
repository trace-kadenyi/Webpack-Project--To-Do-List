const deleteTask = (id) => {
    let filteredItems = JSON.parse(localStorage.getItem('todotasks')).filter((task) => task.index !== Number(id));
    console.log(filteredItems);
    console.log(id);
    localStorage.setItem('todotasks', JSON.stringify(filteredItems));
}

export default deleteTask;