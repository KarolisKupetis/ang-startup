import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { CartManagerService } from '../services/cart-manager.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  @Input() productItem!: Product;

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.min(0)),
    description: new FormControl(),
    imageUrl: new FormControl(),
    category: new FormControl(),
  });

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private cartService: CartManagerService,
    private router: Router,
    private productService: ProductService
  ) {}

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  addItemToCart() {
    this.cartService.addItem(this.productItem);
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.productItem = data.product;
      this.productForm.patchValue(this.productItem);
    });
  }

  deleteItem(id: any) {
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        console.log('res');
        alert('product deleted');
      },
      (err) => {
        alert('did not delete');
      }
    );
  }

  onSubmit() {
    let newProduct: Product = new Product(
      0,
      this.productForm.value.name,
      this.productForm.value.description,
      this.productForm.value.price,
      this.productForm.value.imageUrl
    );

    if (this.productItem.id) {
      this.productService.update(newProduct, this.productItem.id);
    }

    this.productService.createProduct(newProduct).subscribe(
      (res) => {
        console.log('res');
        alert('product created');
      },
      (err) => {
        alert('something wrong');
      }
    );

    this.productForm.reset();
  }
}
