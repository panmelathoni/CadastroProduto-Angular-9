import { Product } from './../products/product.model';
import { Injectable } from '@angular/core';
import{ MatSnackBar} from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl =" http://localhost:3001/products";

  constructor(private snackbar: MatSnackBar, private http : HttpClient) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{

    //post para inserir um novo produto no backend
    return this.http.post<Product>(this.baseUrl, product)
  }
}
