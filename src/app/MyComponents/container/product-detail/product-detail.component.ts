import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { SetBackground} from '../../../CustomDirectives/set-background.directive';
import { AppHoverDirective } from '../../../CustomDirectives/app-hover.directive';
import { DisableProductDirective } from '../../../CustomDirectives/disable-product.directive';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule,SetBackground,AppHoverDirective,DisableProductDirective],  
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input()
  productListComp: ProductListComponent = undefined;
  product: Product 
  ngOnInit(){
    this.product=this.productListComp.selectedProduct;
  }
}