import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  
  public displayedColumns: string[] = ['id', 'name', 'actions '];
  public dataSource!: Category[];

  constructor() { }

  ngOnInit(): void {
  }

  public editCategory(categoria: Category){

  }

  public deleteCategory(categoria: Category){

  }

}
