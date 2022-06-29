import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const CATEGORY_DATA = [
  {name: 'Educação', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Saúde', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-ddd'},
]

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {
  
  public displayedColumns: string[] = ['id','name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  public editCategory(categoria: Category) {
    
  }
  public deleteCategory(categoria: Category) {

  }
  public createNewCategory() {

  }


}
