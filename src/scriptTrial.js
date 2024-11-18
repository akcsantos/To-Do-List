
const rightWrapper = document.getElementById("rightWrapper")


const projectLibrary = [];

function Project(title, description, dueDate, projectName, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.projectName = projectName;
    this.priority = priority;
}

function addProjectToLibrary(){
    event.preventDefault();
    const title = document.querySelector("#taskTitle").value
    const description = document.querySelector("#description").value
    const dueDate = document.querySelector("#dueDate").value
    const priority = document.querySelector('#priority').value
    const projectName = document.querySelector('#projectName').value
    
    const newProject = new Project(title, description, dueDate, projectName, priority)
    projectLibrary.push(newProject);

    displayProjects();    
}

function displayProjects(){
    rightWrapper.innerHTML =""
    projectLibrary.forEach((newProject, index) => {
        const projectCard = document.createElement("div");
      
        projectCard.classList.add("card");

        projectCard.innerHTML =`
        <p>Title: ${newProject.title}</p>
        <p>Due Date: ${newProject.dueDate}</p>
        <p>Priority: ${newProject.priority}</p>
        <button class="removeButton" onclick="removeBook(${index})">Remove</button>
        `;
    
        rightWrapper.append(projectCard);
        console.log(projectLibrary)
    })

  
}

export {addProjectToLibrary, displayProjects};






