import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "Burger",
      "Stuffs stuffed in between the roasted burgers",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSQPL7QWUeiVr3vXoFWUhA26UPJfFeTLbatHvNCy9kw&s"
    ),
    new Recipe(
      "Pizza",
      "Just some maidhaa maavu roasted in a mocrove with kand kanda veggies",
      "https://images.indulgexpress.com/uploads/user/imagelibrary/2018/11/2/original/285A5419.JPG?w=700&dpr=1.1"
    )
  ];

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
