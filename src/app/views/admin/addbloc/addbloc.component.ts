import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/entities/bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-addbloc',
  templateUrl: './addbloc.component.html',
  styleUrls: ['./addbloc.component.css']
})
export class AddblocComponent implements OnInit {
  blocForm!:FormGroup;
  showSuccessAlert: boolean = false;
  newblocc!:Bloc;
 

  constructor(private fb: FormBuilder, private blocService: BlocService, private router: Router) {}

  ngOnInit(): void {
    this.blocForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: ['', Validators.required],
    });
  }

  addBloc() {
    if (this.blocForm.valid) {
      this.newblocc = this.blocForm.value;
      console.log(this.newblocc);
  
      this.blocService.addBloc(this.newblocc).subscribe(
        (addedBloc) => {
          console.log('Bloc ajouté avec succès :', addedBloc);
          this.showSuccessAlert = true;
  
          setTimeout(() => {
            this.router.navigate(['admin/allblocs']);
          }, 2000);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du bloc :', error);
  
          // Log the complete error response
          if (error instanceof HttpErrorResponse) {
            console.error('Complete error response:', error);
          }
        }
      );
    }
  }
  

}
