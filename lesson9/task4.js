const person = {
  firstName: "Марія",
  lastName: "Януль",
  age: 31,
};

person.email = "mariia.yanul@example.com";

delete person.age;

console.log(person);
