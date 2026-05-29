interface Task{
    id:number|string,
    title:string
    isCompleted:boolean,
    priority:"Low" | "Medium" | "High"
}
//nischalgv1
let tasks: Task[] = [];

function addTask(task : Task){
  let t=tasks.find(t => t.id === task.id)
  if(t){
    console.log("Task Already Exist");
    return;
  }
    tasks.push(task);
    console.log("Task Added Successfully");
}

function showTasks(){
    if(tasks.length===0){
        console.log("No tasks to display");
        return
    }
    tasks.forEach((t) => {
        console.log(`${t.id}: ${t.title} - ${t.isCompleted ? 'Completed' : 'Pending'} with ${t.priority} priority`);
    });
}

function deleteTask(id : number):void{
    tasks = tasks.filter(t => t.id !== id);
    console.log("Task deleted successfully");
}

function updateTask(task : Task){
    const index: number = tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
        tasks[index] = task;
    }
    console.log("Task updated successfully");
}

function showTaskwithId(id:number){
    const t: Task | undefined = tasks.find(t => t.id === id);
    if (t) {
        console.log(`${t.id}: ${t.title} - ${t.isCompleted ? 'Completed' : 'Pending'} with ${t.priority} priority`);
    } else {
        console.log("Task not found");
    }
}

addTask({
    id:1,
    title:"New Project",
    isCompleted:true,
    priority:"Low"
})

showTasks()
showTaskwithId(1)