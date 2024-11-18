import "./styles.css";
import {addToProjects} from "./projects.js";
import {displayChores, addChoresToLibrary} from "./chores.js"
import {addProjectToLibrary, displayProjects} from "./scriptTrial.js"

const addButton = document.getElementById('addTaskButton');
const resetButton = document.getElementById('resetButton')
const dialog = document.querySelector('dialog');
const submitButton = document.getElementById('confirmButton')
const closeButton = document.getElementById('closeButton')
const taskTitle = document.getElementById('taskTitle')
const description = document.getElementById('description')
const dueDate = document.getElementById('dueDate')
const priority = document.getElementById('priority')
const projectName = document.getElementById('projectName')
const rightWrapper = document.getElementById('rightWrapper')

addButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    taskTitle.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
    projectName.value = "";
    dialog.close();
})

submitButton.addEventListener("click", () => {
    if (projectName.value === "projects"){
        addProjectToLibrary();
    }

    else if (projectName.value === "chores"){
        addChoresToLibrary();
    }
    
    
    
    taskTitle.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
    projectName.value ="";
    dialog.close();
})

resetButton.addEventListener("click", () =>{
    dialog.reset();
})

const projectsButton = document.getElementById('projectsButton')
const choresButton = document.getElementById('choresButton')

projectsButton.addEventListener("click", () => {
   
    displayProjects();
})

choresButton.addEventListener("click", () => {
    
    displayChores();
})