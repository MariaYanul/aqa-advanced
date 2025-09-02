function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка при завантаженні todo");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Помилка fetchTodo:", error.message);
    });
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка при завантаженні user");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Помилка fetchUser:", error.message);
    });
}

Promise.all([fetchTodo(), fetchUser()]).then((results) => {
  const [todo, user] = results;
  console.log("Promise.all results:");
  console.log("Todo:", todo);
  console.log("User:", user);
});

Promise.race([fetchTodo(), fetchUser()]).then((result) => {
  console.log("Promise.race result:", result);
});
