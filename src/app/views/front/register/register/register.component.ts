import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/entities/etudiant';
import { AuthService } from 'src/app/services/auth.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null,
    cin: null,
    dateNaissance: null as unknown as Date,
    ecole: null
  };
  isSignUpFailed = false;
  errorMessage = '';
  successMessage: string = ''

  constructor(private authService: AuthService, private etudiantService: EtudiantService, private router:Router) {}

  registerUser(): void {
    const { username, email, password, cin, dateNaissance, ecole } = this.form;
  
    this.authService.register(username, email, password, ['ROLE_USER']).subscribe(
      () => {
        this.isSignUpFailed = false;
        console.log('User registration successful');
        const formattedDateNaissance = new Date(dateNaissance).toISOString().split('T')[0];
        const etudiant: Etudiant = {
          nomEtudiant: username,
          cin: cin,
         dateNaissence: formattedDateNaissance,
          ecole: ecole
        };
  
        this.etudiantService.addEtudiant(etudiant).subscribe(
          () => {
            console.log('Etudiant added successfully');
  //           const alertElement = document.createElement('div');
  // alertElement.className = 'alert alert-success alert-custom';
  // alertElement.textContent = 'Votre enregistrement est effectué avec succès.';
  //document.body.appendChild(alertElement);

  setTimeout(() => {
    this.successMessage = 'Inscription réussie !';
    this.router.navigate(['/login']); 
  }, 1000);
          },
          err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          }
        );
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}


