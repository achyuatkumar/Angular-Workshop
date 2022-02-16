import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];

  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((res) => (this.productList = res));
  }

  deleteProduct(productId: Number) {
    this.apiService
      .deleteProductApi(productId)
      .subscribe((res) =>
        this.productList = this.productList.filter((item) => item.id != productId)
      );
  }
}
