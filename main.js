const todoList = document.querySelector("#todoList");
const addBtn=document.querySelector("#addBtn");
const input=document.querySelector("#listItem");
let completedCount = 0;
const todoArray=[];
addBtn.addEventListener("click",addToList);


function addToList(){
    const text=input.value;
    //Checks that the input isn't empty
    if(text !== ""){
        //adds the new input to the array and the HTML list
        todoArray.push(text);
        const item = document.createElement("li");
        todoList.appendChild(item);
        const itemLabel=document.createElement("span");
        itemLabel.innerText=text;
        item.appendChild(itemLabel);
        //Eventlistener checks for clicks on the list, and updates number of finished tasks
        itemLabel.addEventListener("click",
            function(){
                console.log("clicked on text");
                item.setAttribute("class", "completed");
                completedCount++;
                console.log(completedCount);
                document.querySelector("#nbrFinishedTasks").innerHTML = "Number of finished tasks: "+completedCount;
            }
        );
        //Clear the input and warning text, and updates number of tasks in list.
        input.value="";
        document.querySelector("#warningText").innerHTML = " ";
        document.querySelector("#nbrTasks").innerHTML ="Number of tasks: "+ todoArray.length;
        
    }else{
        //Warning text is shown if the input is empty.
        document.querySelector("#warningText").innerHTML="You need to write something!";
    }
};
