import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      address: ['',Validators.required],
      phoneNumber: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const newUser: User = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      address: this.registerForm.value.address,
      phoneNumber: this.registerForm.value.phoneNumber
    };

    this.authService.register(newUser).subscribe(
      response => {
        console.log('Registro exitoso');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error en el registro:', error);
      }
    );
  }
}
