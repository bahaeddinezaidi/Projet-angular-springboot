import { Component, Input, SimpleChanges } from '@angular/core';
import { Foyer } from 'src/app/entities/Foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyer-info',
  templateUrl: './foyer-info.component.html',
  styleUrls: ['./foyer-info.component.css']
})
export class FoyerInfoComponent {
  @Input() foyerId!: number ;
  foyer!: Foyer; 

  constructor(private foyerService: FoyerService) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['foyerId'] && !changes['foyerId'].firstChange) {
      this.retrieveFoyerDetails(this.foyerId);
    }
  }
  
  // ngOnInit() {
  //   // if (this.foyerId) {
  //   //   console.log(this.foyerId)
  //   //   this.retrieveFoyerDetails(this.foyerId);
    
  //   // }
  //   console.log(this.foyerId)
  //   this.retrieveFoyerDetails(this.foyerId);
   
  // }

  retrieveFoyerDetails(id: number) {
    this.foyerService.retrieveFoyer(id).subscribe(
      (data) => {
        this.foyer = data;
        console.log(this.foyer);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}


