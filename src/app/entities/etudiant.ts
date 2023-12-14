export interface Etudiant {
    nomEtudiant: string;
    cin: number;
    dateNaissence: string | null; // Modifiez le nom de la propriété à 'dateNaissence' si vous souhaitez la conserver comme une chaîne de caractères
    ecole: string;
  }