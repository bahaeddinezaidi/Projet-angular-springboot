import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    const { username, password } = this.form;
  
    this.authService.login(username, password).subscribe(
      data => {
        this.authService.setLoggedInUser(data);
        const loggedInUser = this.authService.getLoggedInUser(); // Récupérer l'utilisateur connecté
        this.roles = loggedInUser.roles; // Supposons que les rôles soient stockés dans une propriété 'roles' de l'utilisateur
        if (this.roles.includes('ROLE_USER')) {
          this.router.navigate(['/etudiant']); // Rediriger vers l'interface utilisateur
        } else   {
          this.router.navigate(['/admin']); // Rediriger vers l'interface admin
        } 
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

