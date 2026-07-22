type Task = {
    id: number;
    title: string;
    completed: boolean;
}


const form = document.getElementById("task-form") as HTMLFormElement;
const input = document.getElementById("task-input") as HTMLInputElement;
const list = document.getElementById("task-list") as HTMLUListElement;
const exportButton = document.getElementById("export") as HTMLButtonElement;

let tasks: Task[] = [];
let nextId=1 ;

function createSampleTask(): void{
    const samples: Omit <Task,"id">[]=[
        {title: "Buy Groceries", completed: true},
        {title: "Finish typescript homework", completed: false},
        {title: "Call the dentist", completed: true},
        {title: "Buy medicine", completed: true},
];
samples.forEach((sample)=>{
    tasks.push({id: nextId++,title: sample.title, completed: sample.completed})
});

}

function renderTask(): void{
    list.innerHTML="";
    tasks.forEach((task)=>{
        const li= document.createElement("li");

        const checkbox= document.createElement("input");
        checkbox.type= "checkbox";
        checkbox.checked= task.completed;

        checkbox.addEventListener("change",()=>{
            task.completed= checkbox.checked;
        })

        const span= document.createElement("span");
        span.textContent= task.title;

        li.append(checkbox,span);
        list.append(li);


    });
}

function addTask(title:string):void{
    tasks.push({id: nextId++,title:input.value,completed:false})
    renderTask();
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    addTask(input.value)
    input.value= "";
    input.focus();

});

exportButton.addEventListener("click",()=>{
    console.log(tasks)
})

createSampleTask();
renderTask();
// console.log(tasks);



