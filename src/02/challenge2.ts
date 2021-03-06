interface TodoItems {
 id: number; 
 title: string; 
 status: string; 
 completedOn?: Date;
}

enum TodoItemsStatus {
  In_Progress = "In-Progress",
  Todo = "Todo",
  Done = "Done"
}

const todoItems : TodoItems[] = [
  { id: 1, title: "Learn HTML", status: "done", completedOn: new Date("2021-09-11") },
  { id: 2, title: "Learn TypeScript", status: "in-progress" },
  { id: 3, title: "Write the best app in the world", status: "todo" },
]

function addTodoItem(todo: string) : TodoItems {
  const id = getNextId(todoItems)

  const newTodo = {
      id,
      title: todo,
      status: TodoItemsStatus.Todo,
  }

  todoItems.push(newTodo)

  return newTodo
}

function getNextId<T extends {id: number}>(items: T[]) : number {
  return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))