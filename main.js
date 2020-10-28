const aside = document.getElementsByTagName("aside");
const tagA = document.getElementsByTagName("a")[4];
const book3 = document.getElementsByTagName("book3");
const body = document.querySelector("body");
const book = document.querySelectorAll(".book");
const adv = document.querySelector(".adv");
const li = document.querySelectorAll("li");
adv.remove();
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

li[3].after(li[6]);
li[4].before(li[8])
li[49].before(li[55])
li[50].after(li[48])
li[54].before(li[51])

li[25].insertAdjacentHTML("afterend", "<li>Глава 8: За пределами ES6</li>")

book[0].before(book[1]);
book[2].before(book[4]);
book[2].before(book[3]);
book[2].before(book[5]);

tagA.textContent = "Книга 3. this и Прототипы Объектов";