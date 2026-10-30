const text = document.getElementById("text");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", ()=>{
    main()
});

text.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        main()
    }
})

function main(){
    if(text.value.trim() != ""){
        let task = document.createElement("li");
        let doneBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        task.innerHTML = text.value;
        doneBtn.innerHTML = "✅"
        deleteBtn.innerHTML = "❌"

        task.appendChild(doneBtn)
        task.appendChild(deleteBtn)
        list.appendChild(task);

        text.value = "";
    }
}