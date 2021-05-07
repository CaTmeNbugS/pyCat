import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slider} from './route-animations';


@Component({
  selector: 'web-application',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider,
  ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const buttons = document.querySelectorAll<HTMLElement>('.ripplrEffect');
    buttons.forEach((btn) => {
      btn.addEventListener('mousedown', function (event){
          const x = event.clientX - btn.offsetLeft;
          const y = event.clientY - btn.offsetTop;
          const ripple = document.createElement('span');
          ripple.style.left = x + `px`;
          ripple.style.top = y + `px`;
          ripple.classList.add('ripple');
          this.appendChild(ripple);


          setTimeout(() => {
             ripple.remove();
         }, 1000);

      });
    });
  }
  constructor() {
  }
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  };
  showMenu() {
    const line = document.querySelectorAll('.chtMenu');
    const navMenu = document.querySelector('.navMenu');
    navMenu.classList.toggle('show');
    line[0].classList.toggle('close');
    line[2].classList.toggle('Close');
    line[1].classList.toggle('Close');
  }
}
