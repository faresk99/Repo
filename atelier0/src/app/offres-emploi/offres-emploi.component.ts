import { Component, OnInit } from '@angular/core';
import { write } from 'fs';
import { emploi } from '../core/model/article';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  listeEmploi!:emploi[];
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi = [
      {reference:'Ent-1',titre:'poste QA',entreprise:'x',etat:true},
      {reference:'Ent-2',titre:'poste DEV',entreprise:'y',etat:false},
      {reference:'Ent-3',titre:'poste RH',entreprise:'z',etat:true},
      {reference:'Ent-4',titre:'poste RH',entreprise:'y',etat:false},
      {reference:'Ent-5',titre:'poste DEV',entreprise:'y',etat:true},
      {reference:'Ent-6',titre:'poste QA',entreprise:'y',etat:true},
      {reference:'Ent-7',titre:'poste DEV',entreprise:'y',etat:false}
    ]
  }

  x:number=0;
  bilan(){
    for(let i=0;this.listeEmploi.length;i++)
    {
      if(this.listeEmploi[i].etat==true)
      {
        this.x ++ ;
      }
    }
    return this.x ;
  }



  

}
