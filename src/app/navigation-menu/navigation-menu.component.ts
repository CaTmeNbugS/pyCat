import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  ngOnInit(): void {
    const buttons = document.querySelectorAll(".ripplrEffect");
    buttons.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        let x = event.clientX - btn.offsetLeft;
        let y = event.clientY - btn.offsetTop;

        let ripple = document.createElement("span");
        ripple.style.left = x + `px`;
        ripple.style.top = y + `px`;
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000);
      });
    })
    const search = document.querySelector(".searchContainer");
    const menu = document.querySelector(".menuContainer");
    const width = document.querySelector("body");
    const label = document.querySelector(".labelContainer");
    const filterContainer = document.querySelector(`.iconContainer`);
    search.style.marginLeft = width.offsetWidth / 2 - menu.offsetWidth - label.offsetWidth - search.offsetWidth / 2 + `px`;
    filterContainer.style.marginLeft = (width.offsetWidth - search.offsetWidth - label.offsetWidth - menu.offsetWidth -  filterContainer.offsetWidth) / 2 + `px`;
  }
  constructor() {
  }
  showMenu() {
    const line = document.querySelectorAll(".chtMenu");
    const navMenu = document.querySelector(".navMenu");
    navMenu.classList.toggle("show");
    line[0].classList.toggle("close");
    line[2].classList.toggle("Close");
    line[1].classList.toggle("Close");
  }
  showSearch() {
    const search = document.querySelector(".searchContainer");
    search.classList.toggle("Show");
  }
}