import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.seriouseats.com/images/2017/05/20170501-sandwich-recipe-roundup-01.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.seriouseats.com/images/2017/05/20170501-sandwich-recipe-roundup-01.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
