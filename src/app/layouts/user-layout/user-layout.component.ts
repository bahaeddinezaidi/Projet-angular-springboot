import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent {
  username!: string;

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    const loggedInUser = this.authService.getLoggedInUser();
    this.username = loggedInUser.username; 
  }

  logout(): void {
    this.authService.confirmLogout().subscribe((confirmed) => {
      if (confirmed) {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    });
  }
  onLinkClick() {
    console.log('Link clicked');
  }
  

}
