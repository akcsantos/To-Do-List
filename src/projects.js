const projects = [];

const rightWrapper = document.getElementById('rightWrapper');
// const taskTitle = document.getElementById('taskTitle')
// const description = document.getElementById('description')
// const dueDate = document.getElementById('dueDate')
// const priority = document.getElementById('priority')
// const projectName = document.getElementById('projectName')

function Projects(title, description, dueDate, projectName, priority){
    this.title = taskTitle;
    this.description = description;
    this.dueDate = dueDate;
    this.projectName = projectName;
    this.priority = priority;
}

function addToProjects(){
    event.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const projectName = document.getElementById('projectName').value;

    const newProject = new Projects(title, description, dueDate, projectName, priority)
    projects.push(newProject);

    displayProjects();

}

function displayProjects(){
    rightWrapper.innerHTML = "";
    projects.forEach(newProject, index => {
        const projectCard = document.createElement('div');

        projectCard.classList.add("card");

        projectCard.innerHTML = `
        <p>Title: ${newProject.title}}</p>
        <p>Project: ${newProject.taskName}}</p>
        <p>Due Date: ${newProject.dueDate}}</p>
        <p>Priority: ${newProject.priority}}</p>
        `

        rightWrapper.append(projectCard);

    })
}


export {addToProjects, displayProjects};


