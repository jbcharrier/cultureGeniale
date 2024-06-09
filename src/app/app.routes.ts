import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContenuComponent } from './contenu/contenu.component';
import { ProfilComponent } from './profil/profil.component';
import { FormulesComponent } from './formules/formules.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contenu', component: ContenuComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'formules', component: FormulesComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
