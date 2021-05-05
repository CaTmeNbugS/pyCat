import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  ngOnInit(): void {
    const buttons = document.querySelectorAll<HTMLElement>(".ripplrEffect");
    buttons.forEach((btn) => {
      btn.addEventListener("mousedown", function (event) {
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
    const search = document.querySelector<HTMLElement>(".searchContainer");
    const menu = document.querySelector<HTMLElement>(".menuContainer");
    const width = document.querySelector<HTMLElement>("body");
    const label = document.querySelector<HTMLElement>(".labelContainer");
    const navMenu = document.querySelector<HTMLElement>(".navMenu");
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
  showFilterMenu() {
    const filterMenu = document.querySelector<HTMLElement>(".filterMenu");
    filterMenu.classList.toggle('showFilter');
  }
}