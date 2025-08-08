const users = [
  { name: "Аня", email: "anya@example.com", age: 25 },
  { name: "Ігор", email: "ihor@example.com", age: 30 },
  { name: "Марина", email: "maryna@example.com", age: 28 },
];

for (const { name, email, age } of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
