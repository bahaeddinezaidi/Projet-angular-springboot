import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  loggedInUsername: string = '';

  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit() {
    this.updateLoggedInUsername();
  }

  updateLoggedInUsername() {
    const user = this.authService.getLoggedInUser();
    if (user) {
      this.loggedInUsername = user.username;
    }
  }
  logout() {
    // Ask for confirmation before logout
    this.authService.confirmLogout().subscribe((confirmed) => {
      if (confirmed) {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    });

}
}
