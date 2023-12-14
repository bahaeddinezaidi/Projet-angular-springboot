import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/entities/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{
  username!: string;
  etudiantData!: Etudiant;

  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService) { 
    console.log("profile marche")
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['name'];

      this.etudiantService.getEtudiantByname(this.username).subscribe(data => {
        this.etudiantData = data;
      });
    });
  }

  
  

}
