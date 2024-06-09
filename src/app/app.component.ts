import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContenuComponent } from './contenu/contenu.component';
import { ProfilComponent } from './profil/profil.component';
import { FormulesComponent } from './formules/formules.component';
import { InscriptionComponent } from './inscription/inscription.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContenuComponent,
    ProfilComponent,
    FormulesComponent,
    InscriptionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cultureGeniale';
}
