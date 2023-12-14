import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/entities/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  etudiantForm!: FormGroup;
  etudiantName: string = ''; // Ajout de cette ligne pour déclarer et initialiser etudiantName
  showSuccessAlert: boolean = false;

  // Utilisez plutôt un objet Etudiant pour stocker les données du formulaire
  etudiant: Etudiant = {  nomEtudiant: '', cin: 0, dateNaissence: '', ecole: '' };

  constructor(
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router,

 
  ) {
  }

  ngOnInit(): void {
    this.etudiantForm = this.fb.group({
      nomEtudiant: ['', Validators.required],
      cin: ['', Validators.required],
      dateNaissance: ['', ],
      ecole: ['', Validators.required],
    });

    this.loadEtudiantData();
  }

  loadEtudiantData() {
    const nameFromRoute = this.route.snapshot.paramMap.get('name');
    this.etudiantName = nameFromRoute!;
  
    console.log('Before calling getEtudiantByName. etudiantName:', this.etudiantName);
  
    if (this.etudiantName !== null) {
      this.etudiantService.getEtudiantByname(this.etudiantName).subscribe(
        (etudiant) => {
          if (etudiant.dateNaissence !== null) {
            etudiant.dateNaissence = new Date(etudiant.dateNaissence).toLocaleDateString('en-CA');
          }         // Mettez à jour l'objet etudiant
          this.etudiant = etudiant;
  
          // Mettez à jour le formulaire avec les nouvelles données
          this.etudiantForm.patchValue({
            nomEtudiant: etudiant.nomEtudiant,
            cin: etudiant.cin,
            dateNaissance:etudiant.dateNaissence,
            ecole: etudiant.ecole,
            // Mettez à jour avec d'autres champs si nécessaire
          });
          console.log(this.etudiantForm.value.dateNaissance)
        },
        (error) => {
          console.error('Erreur lors du chargement des données de l\'étudiant :', error);
          console.log('After calling getEtudiantByName');
          // Gérer l'erreur, afficher un message à l'utilisateur, etc.
        }
      );
    }
  }
  

  updateEtudiant() {
    if (this.etudiantName !== null && this.etudiantForm.valid) {
      const dateNaissence=this.etudiantForm.value.dateNaissance
      
        const updatedEtudiant = {
          nomEtudiant: this.etudiantForm.value.nomEtudiant,
          cin: this.etudiantForm.value.cin,
          dateNaissence: dateNaissence , 
         ecole: this.etudiantForm.value.ecole
        };
        const datePipe = new DatePipe('en-US');
updatedEtudiant.dateNaissence = datePipe.transform(updatedEtudiant.dateNaissence, 'yyyy-MM-dd');
      console.log(updatedEtudiant);
      // const datePipe = new DatePipe('en-US');
      // updatedEtudiant.dateNaissance = datePipe.transform(updatedEtudiant.dateNaissance, 'yyyy-MM-dd');
      // console.log(updatedEtudiant.dateNaissance);
      


      this.etudiantService.updateEtudiant(this.etudiantName, updatedEtudiant).subscribe(
        (result) => {
          console.log('Étudiant mis à jour avec succès :', result);
          this.showSuccessAlert = true;

          setTimeout(() => {
           // Assuming you have the updatedEtudiant object with a 'nomEtudiant' property
              this.router.navigate(['etudiant/profile', updatedEtudiant.nomEtudiant]);

          }, 1000);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'étudiant :', error);
        }
      );
    }
    else {
      console.warn('Le formulaire est invalide.');
    }
  }
}