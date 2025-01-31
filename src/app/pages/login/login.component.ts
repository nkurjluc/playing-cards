import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  
  loginFormGroup = this.formBuilder.group({
    'username': ['',[Validators.required]],
    'password': ['',[Validators.required]]
  });

  invalidCredentials=false;

  login(){
    
  }

}
