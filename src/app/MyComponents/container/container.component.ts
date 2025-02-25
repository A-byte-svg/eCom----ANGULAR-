import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, ProductListComponent, ProductDetailComponent, CommonModule, FeaturedBrandsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  searchText: string = '';

  @ViewChild('productListComponent') productListComponent: ProductListComponent;
  setSearchText(value: string) {
    this.searchText = value
  }
}
