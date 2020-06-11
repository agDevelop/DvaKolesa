import { Component, OnInit } from "@angular/core";
import { Product } from "../../../../shared/models/product";
import { ProductService } from "../../../../shared/services/product.service";
@Component({
  selector: "app-favourite-products",
  templateUrl: "./favourite-products.component.html",
  styleUrls: ["./favourite-products.component.scss"],
})
export class FavouriteProductsComponent implements OnInit {
  favoruiteProducts: Product[];
  showDataNotFound = true;

  // Not Found Message
  messageTitle = "Желаемых товаров не найдено";
  messageDescription = "Пожалуйста, выберите желаемые товары!";

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getFavouriteProduct();
  }
  removeFavourite(product: Product) {
    this.productService.removeLocalFavourite(product);

    this.getFavouriteProduct();
  }

  getFavouriteProduct() {
    this.favoruiteProducts = this.productService.getLocalFavouriteProducts();
  }
}
