import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { DeclarationResponse, getUrl } from '../scripts';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  declarations: DeclarationResponse[] = [];

  constructor(
    private backend: BackendService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.backend.getDeclarations().subscribe((declaration:DeclarationResponse[]) => {
      const values = JSON.parse(localStorage.getItem('favorite'));
      const declarations = declaration.filter(function (value) {
        return values.includes(value['_id']);
      });
      this.declarations = declarations;
    })
  }
  getUrl(){
    getUrl(this.route.snapshot.routeConfig.path, this.route.snapshot.queryParams)
  }
}
