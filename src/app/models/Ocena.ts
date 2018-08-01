import { TipOcene } from "../enum/tipOcene";

export class Ocena
{
    constructor(  
        public idOcene : number,
        public ocena: String,
        public datumOcene : Date,
        public tipOcene : TipOcene,
        public ucenik : number,
        public odeljenjePredmetNastavnik : number
    ){}


}