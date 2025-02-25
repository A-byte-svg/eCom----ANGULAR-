
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../../Models/product';
import { HighlightDirective } from '../../../../CustomDirectives/highlight.directive';
import { DisableProductDirective } from '../../../../CustomDirectives/disable-product.directive';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,HighlightDirective,DisableProductDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product:Product;
}
