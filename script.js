const text = document.getElementById("text");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", ()=>{
    if(text.value.trim() != ""){
        let task = document.createElement("li");
        task.innerHTML = text.value;
        list.appendChild(task);

        text.value = "";
    }
});