
const rightWrapper = document.getElementById("rightWrapper")


const choresLibrary = [];

function Chores(title, description, dueDate, projectName, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.projectName = projectName;
    this.priority = priority;
}

function addChoresToLibrary(){
    event.preventDefault();
    const title = document.querySelector("#taskTitle").value
    const description = document.querySelector("#description").value
    const dueDate = document.querySelector("#dueDate").value
    const priority = document.querySelector('#priority').value
    const projectName = document.querySelector('#projectName').value
    
    const newChore = new Chores(title, description, dueDate, projectName, priority)
    choresLibrary.push(newChore);

    displayChores();    
}

function displayChores(){
    rightWrapper.innerHTML =""
    choresLibrary.forEach((newChore, index) => {
        const choreCard = document.createElement("div");
      
        choreCard.classList.add("card");

        choreCard.innerHTML =`
        <p>Title: ${newChore.title}</p>
        <p>Due Date: ${newChore.dueDate}</p>
        <p>Priority: ${newChore.priority}</p>
        <button class="removeButton" onclick="removeBook(${index})">Remove</button>
        `;
    
        rightWrapper.append(choreCard);
        console.log(choresLibrary)
    })

  
}

export {addChoresToLibrary, displayChores};






