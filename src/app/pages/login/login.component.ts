import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Credentials, LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
  private formBuilder = inject(FormBuilder);
  private loginServive = inject(LoginService);
  private router = inject(Router);

  private loginSubscription: Subscription | null = null;
  
  loginFormGroup = this.formBuilder.group({
    'username': ['',[Validators.required]],
    'password': ['',[Validators.required]]
  });

  invalidCredentials=false;

  login(){
    this.loginSubscription = this.loginServive.login(
      this.loginFormGroup.value as Credentials).subscribe({
      next: (result: User | null | undefined)=> {
        this.navigateHome();
      },
      error: error =>{
        console.log(error);
        this.invalidCredentials = true;
      }
    })
  }

  navigateHome(){
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
      this.loginSubscription?.unsubscribe();
  }

}
