const duomenys = {
  task: "make dinner",
  isDone: "false",
};
const listAllTask = (tasks) => {
  tasks.forEach((tasks) => {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = tasks.task;
    document.body.append(createDiv);
  });
};
const insertTask = () => {
  const taskInput = document.getElementById("task-input").value;
  const task = { task: taskInput, isDone: false };

  fetch("http://localhost:3000/insertTask", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

const getAllTasks = () => {
  fetch("http://localhost:3000/getTasks")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.tasks);
      listAllTask(data.tasks);
    });
};
