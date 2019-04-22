import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../shared/components/page-not-found/page-not-found.component';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {RecipesComponent} from '../recipes/recipes.component';
import {RecipeDetailComponent} from '../recipes/recipe-detail/recipe-detail.component';
import {RecipeIntroComponent} from '../recipes/recipe-intro/recipe-intro.component';
import {RecipeEditComponent} from '../recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent,
    children: [
      { path: '', component: RecipeIntroComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id/edit', component: RecipeEditComponent },
      { path: ':id/detail', component: RecipeDetailComponent }
    ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
