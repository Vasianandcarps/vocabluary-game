let home = {
  garden: "сад",
  house: "дом",
};
let home1 = {
  сад: "garden",
  дом: "house",
};
let food = {
  apple: "яблоко",
  soup: "суп",
};
let food1 = {
  яблоко: "apple",
  суп: "soup",
};
let language = ["enRu", "ruEn"];
let languagec = prompt("Введите enRu или ruEn ");

function lang(...language) {
  for (let i = 0; i < language.length; i++) {
    switch (language[i]) {
      case "enRu":
        alert("с англиского  на русский ");
        document.write("<button onclick='check(home1)'>House</button>");
        document.write("<button onclick='check(food1)'>Food</button>");
        break;
      case "ruEn":
        alert("с русского на англиский");
        document.write("  <button onclick='check(home)'>Дом</button>");
        document.write("<button onclick='check(food)'>Еда</button>");
        break;
      default:
        alert("Язык введен не правильно");
        break;
    }
  }
}
function check(words) {
  let word;
  let ball = 0;
  let errors = 0;
  let translate;

  for (word in words) {
    alert("Слово: " + word);
    translate = prompt("Введите перевод, для завершения -'!'");
    if (translate == "!") break;
    if (translate == words[word]) {
      alert("Правильно!");
      ball++;
    } else {
      alert("Неправильно!");
      errors++;
    }
  }

  alert("Правильно: " + ball + ", неправильно: " + errors);
}

function vocabluary(words) {
  for (word in words) {
    document.write(word + ": " + words[word] + "<br>");
  }
}
lang(languagec);
