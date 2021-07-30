import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BackendService } from '../backend.service';
import { getCookie, owner, DeclarationResponse, getUrl } from '../scripts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: owner;
  declarations: DeclarationResponse[] = [];

  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private backend: BackendService,
    private flashMsg: FlashMessagesService,) { }

  ngOnInit(): void {
    const user = JSON.parse(getCookie('user'))
    this.user = user
    this.backend.getDeclarations().subscribe((declaration:DeclarationResponse[]) => {
      this.declarations = declaration.filter(function(element){
        if(element.owner.id == user.id ){
          return true
        }else{
          return false
        }
      })
    })
  }
  logOut(){
    this.backend.logOut();
    this.flashMsg.show('<h2 class="alert_text" >Вы вышли из аккаунта</h2>', {cssClass: 'alert', timeout: 5000});
    this.router.navigate(['/owner/auth'])
  }
  getUrl(){
    getUrl(this.route.snapshot.routeConfig.path, this.route.snapshot.queryParams)
  }
}
