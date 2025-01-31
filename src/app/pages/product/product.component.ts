import { ProductService } from './../../services/product/product.service';
import { Component, inject, OnDestroy, OnInit, signal, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produit } from '../../models/produit.model';
import { ProductType } from '../../outils/produit.outils';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductConfirmationDialogComponent } from '../../components/delete-product-confirmation-dialog/delete-product-confirmation-dialog.component';


@Component({
    selector: 'app-product',
    standalone: true,
    imports: [ReactiveFormsModule, PlayingCardComponent, MatButtonModule, MatInputModule, MatSelectModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnDestroy{
  
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private readonly dialog = inject(MatDialog);

  private routeSubscription: Subscription | null = null;
  private formValuesSubscription: Subscription | null = null;
  
  formGroup = this.fb.group({
    name : ['',[Validators.required]],
    image : ['', [Validators.required]],
    type : [ProductType.AMSTEL,[Validators.required]],
    hp : [0,[Validators.required, Validators.min(1), Validators.max(200)]],
    figureCaption : ['', [Validators.required]],
    attackName : ['', [Validators.required]],
    attackStrength : [0, [Validators.required, Validators.min(1),Validators.max(200)]],
    attackDescription : ['',[Validators.required]]
  });

  product: Produit = Object.assign(new Produit(), this.formGroup.value);
  listProducts = Object.values(ProductType); 
  productId = -1;

  ngOnInit(): void {
    
    this.formValuesSubscription = this.formGroup.valueChanges.subscribe(data => {
      this.product = Object.assign(new Produit(), data);
    })

    this.routeSubscription = this.route.params.subscribe(params => {
      if(params['product']){ 
        this.productId = parseInt(params['product']);
        const productFound = this.productService.get(this.productId);

        if(productFound){
          this.product = productFound;
          this.formGroup.patchValue(this.product);
        }
      }     
    })  
  }

  ngOnDestroy(): void {
    this.formValuesSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();    
  }

  submit(event : Event){
    event.preventDefault();
    if(this.productId === -1){
      this.productService.add(this.product);
    } else {
      this.product.id = this.productId;
      this.productService.update(this.product);
    }
    this.navigateBack();
  }

  navigateBack(){
    this.router.navigate(['/home']);
  }
 
  isFieldValid(name: string){
    const formControl = this.formGroup.get(name);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched)
  }

  deleteProduct(){
    const dialogRef = this.dialog.open(DeleteProductConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(confirmation =>{
      if(confirmation){
        this.productService.delete(this.productId);
        this.navigateBack();
      }
    })
  }

  onFileChange(event : any){
    const reader = new FileReader();

    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        this.formGroup.patchValue({
          image: reader.result as string
        })
      };
    }
  }


}
