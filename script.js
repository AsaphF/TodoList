let tasks = []

function idGenerator (){

    var timestamp = new Date ()

    var id = timestamp.getHours().toString() + 
             timestamp.getMinutes().toString() +
             timestamp.getSeconds().toString() +
             timestamp.getMilliseconds().toString()
    
   return id
}

var taskDescription
var task


function createTask (){

         taskDescription = document.getElementById("newTask").value
        if(taskDescription === ""){
            alert("Please fill the blank space")
        }else{

             task = {
                id: idGenerator(),
                data:{
                    description: taskDescription
                } 
            }

            tasks.push(task)
            console.log(tasks)
            updateScreen()
     
        }

}

function updateScreen(){
    
    
    var list = "<ul>"
    for(i=0; i < tasks.length; i++) {

        list += `<li class="li">${tasks[i].data.description}</li>`;
        list += `<button id-data='${tasks[i].id}' onclick=deleteTask(this)>X</button>`;
        list += `<button id-newli=${tasks[i].id} onclick=edit(this)>E</button>`

      };
      
    list += "</ul>" 

    document.getElementById("list").innerHTML = list

    localStorage.setItem("lista", JSON.stringify(tasks))
    


}

 onload = function (){  

    const valor_no_localStorage = localStorage.getItem("lista")
    

    if(valor_no_localStorage != null){
        
       tasks = JSON.parse(valor_no_localStorage)
       
    }
    console.log(tasks)
    
    var list = "<ul>"

   for (i=0; i< tasks.length; i++){
    list += `<li class="li">${tasks[i].data.description}</li>`;
    list += `<button id-data=${tasks[i].id} onclick=deleteTask(this)>X</button>`;
    list += `<button id-newli=${tasks[i].id} onclick=edit(this)>E</button>`
      };
      
    list += "</ul>" 

    document.getElementById("list").innerHTML = list

    
}
   
function deleteTask(element){

    tasks = tasks.filter(task=> task.id != element.getAttribute("id-data"));
  
    updateScreen()
}
let newLi 
function edit(element){
   
     for(i=0; i < tasks.length; i++){
            if(tasks[i].id == element.getAttribute("id-newli")){
                document.getElementById("newdiv").classList.toggle("hidden")
                newLi = document.getElementById("newLi").value
                document.getElementsByClassName("li")[i].innerHTML = newLi  
                tasks[i].data.description = newLi
                document.getElementById("newLi").value = " " 
                localStorage.setItem("lista", JSON.stringify(tasks))
                onload()
                
        }
    }
}


