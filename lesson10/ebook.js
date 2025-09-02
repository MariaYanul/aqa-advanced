import Book from "./book.js";

export default class EBook extends Book {
  #fileFormat;

  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this.#fileFormat;
  }
  set fileFormat(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError('"fileFormat" must be a non-empty string');
    }
    const allowed = ["pdf", "epub", "mobi", "azw", "txt"];
    const normalized = value.trim().toLowerCase();
    if (!allowed.includes(normalized)) {
      throw new RangeError(
        `Unsupported file format. Allowed: ${allowed.join(", ")}`
      );
    }
    this.#fileFormat = normalized;
  }

  printInfo() {
    const info = `${this.title} — ${this.author}, ${this.year} (format: ${this.fileFormat})`;
    console.log(info);
    return info;
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new TypeError("First argument must be an instance of Book");
    }
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}
