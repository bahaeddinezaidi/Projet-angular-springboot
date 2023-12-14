import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-edit-bloc',
  templateUrl: './edit-bloc.component.html',
  styleUrls: ['./edit-bloc.component.css']
})
export class EditBlocComponent implements OnInit {
  blocForm!: FormGroup;
    blocId: number = 0;
    showSuccessAlert: boolean = false;
  
    constructor(
      private fb: FormBuilder,
      private blocService: BlocService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      this.blocForm = this.fb.group({
        idBloc: [''], 
        nomBloc: ['', Validators.required],
        capaciteBloc: ['', Validators.required],
      
      });
  
      this.loadBlocData();
    }
  
    loadBlocData() {
        const idFromRoute = this.route.snapshot.paramMap.get('id');
        this.blocId = +idFromRoute!;
      if (this.blocId !== null) {
        this.blocService.getBloc(this.blocId).subscribe(
          (bloc) => {
            this.blocForm.patchValue({
              idBloc: bloc.idBloc,
              nomBloc: bloc.nomBloc,
              capaciteBloc: bloc.capaciteBloc,
              // Mettez à jour avec d'autres champs si nécessaire
            });
          },
          (error) => {
            console.error('Erreur lors du chargement des données du bloc :', error);
            // Gérer l'erreur, afficher un message à l'utilisateur, etc.
          }
        );
      }
    }
  
    updateBloc() {
      if (this.blocId !== null && this.blocForm.valid) {
        const updatedBloc = this.blocForm.value;
        this.blocService.updateBloc(this.blocId, updatedBloc).subscribe(
          (result) => {
            console.log('Bloc mis à jour avec succès :', result);
  
            // Afficher l'alerte de succès
            this.showSuccessAlert = true;
  
            // Rediriger vers la liste des blocs après 3 secondes
            setTimeout(() => {
              this.router.navigate(['admin/allblocs']);
            }, 1000);
          },
          (error) => {
            console.error('Erreur lors de la mise à jour du bloc :', error);
            // Gérer l'erreur, afficher un message à l'utilisateur, etc.
          }
        );
      }
    }

}
