import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriaComponent } from './categoria/categoria.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'**', component: PageNotFoundComponent},
  {path:'./category', component: CategoriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }