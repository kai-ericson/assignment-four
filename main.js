const todoList = document.querySelector("#todoList");
const addBtn=document.querySelector("#addBtn");
const input=document.querySelector("#listItem");
let completedCount = 0;
const todoArray=[];
addBtn.addEventListener("click",addToList);


function addToList(){
    console.log("button pressed!");
    const text=input.value;
    
    if(text !== ""){
        todoArray.push(text);
        const item = document.createElement("li");
        todoList.appendChild(item);

        const itemLabel=document.createElement("span");
        itemLabel.innerText=text;
        item.appendChild(itemLabel);

        itemLabel.addEventListener("click",
            function(){
                console.log("clicked on text");
                item.setAttribute("class", "completed");
                completedCount++;
                console.log(completedCount);
                document.querySelector("#nbrFinishedTasks").innerHTML = "Number of finished tasks: "+completedCount;
            }
        );

        input.value="";
        document.querySelector("#warningText").innerHTML = " ";
        document.querySelector("#nbrTasks").innerHTML ="Number of tasks: "+ todoArray.length;
        
    }else{
        document.querySelector("#warningText").innerHTML="You need to write something first!";
    }
};
