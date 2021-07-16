import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { DeclarationResponse } from '../scripts'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private declaration: AuthService) {}

  declarations: DeclarationResponse[] = [];

  ngOnInit(): void {
    this.declaration.getDeclarations().subscribe((declaration:DeclarationResponse[]) => {
      this.declarations = declaration
    });
  }
}
