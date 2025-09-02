function delayedLog(text, ms) {
  if (typeof text !== "string") {
    throw new TypeError("Перший аргумент має бути рядком");
  }
  if (typeof ms !== "number" || ms < 0) {
    throw new TypeError(
      "Другий аргумент має бути додатним числом (мілісекунди)"
    );
  }

  setTimeout(() => {
    console.log(text);
  }, ms);
}

delayedLog("Привіт через 1 секунду", 1000);
delayedLog("А це через 3 секунди", 3000);
delayedLog("А це через 10 секунд", 10000);
