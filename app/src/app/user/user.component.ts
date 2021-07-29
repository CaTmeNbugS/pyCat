import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BackendService } from '../backend.service';
import { getCookie, owner, DeclarationResponse } from '../scripts';

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
    console.log(user)
  }
  logOut(){
    this.backend.logOut();
    this.flashMsg.show('Вы вышли из аккаунта', {cssClass: 'alert', timeout: 5000});
    this.router.navigate(['/owner/auth'])
  }
}
