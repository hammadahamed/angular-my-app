import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentRecipe: Recipe;

  setRecipe(recipe: Recipe) {
    this.currentRecipe = recipe;
  }

}
