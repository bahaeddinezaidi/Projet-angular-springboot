import { TypeChambre } from "./TypeChambre";
import { Bloc } from "./bloc";

export interface Chambre {
    idChambre?: number;
    numChambre: number;
    typeChambre: TypeChambre; 
    bloc?: Bloc; 
  }