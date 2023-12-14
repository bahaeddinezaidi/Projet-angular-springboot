import { ChangeDetectorRef, Component} from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/entities/bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-allblocs',
  templateUrl: './allblocs.component.html',
  styleUrls: ['./allblocs.component.css']
})
export class AllblocsComponent {
  blocs!: Bloc[];
  HoveredFoyer!: number  ;
  constructor(private blocService: BlocService, private router:Router,private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllBlocs();
  }

  getAllBlocs() {
    this.blocService.getAllBlocs().subscribe(
      data => {
        this.blocs = data;
        console.log(this.blocs);
      },
      error => {
        console.error(error);
      }
    );
  }
  
  deleteBloc(id: number) {
    this.blocService.deleteBloc(id).subscribe(
      () => {
     
        this.getAllBlocs();
      },
      error => {
        console.error(error);
      }
    );
  }

  editBloc(id: number) {
    console.log('Édition du bloc avec ID :', id);
  }
  navigateToAddBloc() {
    this.router.navigate(['/add-bloc']);
  }
  setHoveredFoyer(id: number) {
    console.log('Hovered Foyer ID:', id);
    this.HoveredFoyer = id;
    this.cdr.detectChanges();

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  // clearHoveredFoyer() {
  //   this.HoveredFoyer = null;
  // }
  navigateToFoyer() {
    this.router.navigate(['foyer-info']);
  }
 

}
