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
  //   const buttons = document.querySelectorAll<HTMLElement>('.ripplrEffect');
  //   buttons.forEach((btn) => {
  //     btn.addEventListener('mousedown', function (event){
  //         const x = event.clientX - btn.offsetLeft;
  //         const y = event.clientY - btn.offsetTop;
  //         const ripple = document.createElement('span');
  //         ripple.style.left = x + `px`;
  //         ripple.style.top = y + `px`;
  //         ripple.classList.add('ripple');
  //         this.appendChild(ripple);


  //         setTimeout(() => {
  //            ripple.classList.add('remove');
  //        }, 1000);
  //        setTimeout(() => {
  //         ripple.remove();
  //     }, 1500);

  //     });
  //   });
  }
  constructor() {
  }
  spreadM = false;
  spreadMenu(){
    const bar = document.querySelector<HTMLElement>('.nv_bar')
    bar.classList.toggle('spr')
    this.spreadM = !this.spreadM;
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  };
}
