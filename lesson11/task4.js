class TodoService {
  static async getTodo(id = 1) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      if (!response.ok) throw new Error("Не вдалося отримати todo");
      return await response.json();
    } catch (error) {
      console.error("TodoService error:", error.message);
    }
  }
}

class UserService {
  static async getUser(id = 1) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!response.ok) throw new Error("Не вдалося отримати user");
      return await response.json();
    } catch (error) {
      console.error("UserService error:", error.message);
    }
  }
}

(async () => {
  const [todo, user] = await Promise.all([
    TodoService.getTodo(),
    UserService.getUser(),
  ]);
  console.log("Todo:", todo);
  console.log("User:", user);

  const fastest = await Promise.race([
    TodoService.getTodo(),
    UserService.getUser(),
  ]);
  console.log("Fastest:", fastest);
})();
