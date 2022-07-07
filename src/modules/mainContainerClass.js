// Main container class - Array of Objects
class myToDoList {
    constructor() {
        this.tasks = JSON.parse(window.localStorage.getItem('todotasks')) ? JSON.parse(window.localStorage.getItem('todotasks')) : [];
    }
}

export default myToDoList;