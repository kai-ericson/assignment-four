let list = [];

function addToList(){
    let item = document.querySelector("#listItem").value;
    //console.log(item);
    list.push(item);
    
    fillList(list);
    
    for(let i of list){
        console.log(i);
    }
    
};

function fillList(list){
    let i = list.length-1;
    let ul=document.createElement("ul");
    //for(let i of list){
        let li = document.createElement("li");
        li.innerHTML = list[i];
        ul.appendChild(li);
        document.getElementById("todoList").appendChild(ul);
   // }
}