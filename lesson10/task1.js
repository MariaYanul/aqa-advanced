import Book from "./book.js";
import EBook from "./ebook.js";

const b1 = new Book("Колонія", "Макс Кідрук", 2023);
const b2 = new Book("Вибір", "Едіт Еґер", 2020);

const e1 = new EBook(
  "Книга Голокост. Нова Історія",
  "Лоренс Ріс",
  2024,
  "epub"
);

b1.printInfo();
b2.printInfo();
e1.printInfo();

b1.title = "Колонія (оновлене видання)";

const oldest = Book.oldest([b1, b2, e1]);
console.log("Найдавніша книга:", oldest.printInfo());

const e2 = EBook.fromBook(b2, "pdf");
console.log("Створено з Book -> EBook:", e2.printInfo());
