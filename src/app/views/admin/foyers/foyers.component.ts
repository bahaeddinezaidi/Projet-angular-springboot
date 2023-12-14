import { Component, OnInit } from '@angular/core';
import { Foyer } from 'src/app/entities/Foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyers',
  templateUrl: './foyers.component.html',
  styleUrls: ['./foyers.component.css']
})
export class FoyersComponent  implements OnInit{
  Foyers:Foyer[]=[];
  constructor(private foyerservice:FoyerService){}
  ngOnInit() 
  {
   this.retrieveAllFoyers();
  }
  retrieveAllFoyers(): void {
    this.foyerservice.retrieveAllFoyers().subscribe(
      (data: Foyer[]) => {
        this.Foyers = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  deleteFoyer(id:number){

  }

  

}
