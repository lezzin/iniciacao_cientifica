"use strict";

var header = document.querySelector(".header.dynamic");

if (header) {
    var currentPagesHme = location.href.includes("index.html");
    var number = currentPagesHme ? 400 : 150;

    addEventListener("scroll", () => {
        (scrollY > number) ? header.classList.add("active") : header.classList.remove("active");
    })
}

var btn = document.querySelector("#btn");

if (btn) {
    var menu = document.querySelector("nav");
    btn.addEventListener("click", () => menu.classList.toggle("active"));
}
