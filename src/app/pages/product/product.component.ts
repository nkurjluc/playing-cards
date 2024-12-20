import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnDestroy{
  
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  routeSubscription: Subscription | null = null;
  
  name = new FormControl('',[Validators.required]);
  productId = signal<number | undefined>(undefined)

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.productId.set(params['id'] ? parseInt(params['id']) : undefined)
    })    
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  next(){
    let nextId = this.productId() || 0;
    nextId++;
    this.router.navigate(['/product/'+nextId])
  }

  submit(event : Event){
    event.preventDefault();
    console.log(this.name.value);
  }
 

}
