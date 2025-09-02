async function fetchTodoAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Помилка при завантаженні todo");
    }
    return await response.json();
  } catch (error) {
    console.error("Помилка fetchTodoAsync:", error.message);
  }
}

async function fetchUserAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("Помилка при завантаженні user");
    }
    return await response.json();
  } catch (error) {
    console.error("Помилка fetchUserAsync:", error.message);
  }
}

(async () => {
  try {
    const [todo, user] = await Promise.all([
      fetchTodoAsync(),
      fetchUserAsync(),
    ]);
    console.log("Promise.all results:");
    console.log("Todo:", todo);
    console.log("User:", user);
  } catch (e) {
    console.error("Помилка у Promise.all:", e.message);
  }

  try {
    const fastest = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
    console.log("Promise.race result:", fastest);
  } catch (e) {
    console.error("Помилка у Promise.race:", e.message);
  }
})();
