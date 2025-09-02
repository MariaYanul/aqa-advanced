export default class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this.#title;
  }
  set title(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError('"title" must be a non-empty string');
    }
    this.#title = value.trim();
  }

  get author() {
    return this.#author;
  }
  set author(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError('"author" must be a non-empty string');
    }
    this.#author = value.trim();
  }

  get year() {
    return this.#year;
  }
  set year(value) {
    const current = new Date().getFullYear();
    const n = Number(value);
    if (!Number.isInteger(n) || n < 1450 || n > current) {
      throw new RangeError(
        `"year" must be an integer between 1450 and ${current}`
      );
    }
    this.#year = n;
  }

  printInfo() {
    const info = `${this.title} — ${this.author}, ${this.year}`;
    console.log(info);
    return info;
  }

  static oldest(books) {
    if (!Array.isArray(books)) {
      throw new TypeError("Argument must be an array");
    }
    const onlyBooks = books.filter((b) => b instanceof Book);
    if (onlyBooks.length === 0) {
      throw new Error("Array must contain at least one Book instance");
    }
    return onlyBooks.reduce((min, b) => (b.year < min.year ? b : min));
  }
}
