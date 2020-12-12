import { Persona } from './persona';
import { Certificazione } from './certificazione';
import { Titolodistudio } from './titolodistudio';

export class CV {
    public persona: Persona;
    public certificazioni: Array<Certificazione>;
    public titoli: Array<Titolodistudio>;

    CV(){
        
    }

}
