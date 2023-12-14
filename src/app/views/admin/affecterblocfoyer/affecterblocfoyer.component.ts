import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-affecterblocfoyer',
  templateUrl: './affecterblocfoyer.component.html',
  styleUrls: ['./affecterblocfoyer.component.css']
})
export class AffecterblocfoyerComponent {
  affecterForm!: FormGroup;
  showSuccessAlert: boolean = false;

  constructor(
    private fb: FormBuilder,
    private blocService: BlocService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.affecterForm = this.fb.group({
      idBloc: ['', Validators.required],
      idFoyer: ['', Validators.required],
    });
  }

  affecterBlocAFoyer() {
    if (this.affecterForm.valid) {
      const { idBloc, idFoyer } = this.affecterForm.value;
      this.blocService.affecterBlocAFoyer(idBloc, idFoyer).subscribe(
        () => {
          console.log('Bloc affecté au foyer avec succès');
          this.showSuccessAlert = true;
          setTimeout(() => {
            this.router.navigate(['admin/allblocs']);
          }, 1000);
        },
        error => {
          console.error('Erreur lors de l\'affectation du bloc au foyer', error);
        }
      );
    }
  }
}

