import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecapComponent } from './recap/recap.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormComponent,HeaderComponent,FooterComponent,RecapComponent],
  //templateUrl: './app.component.html',
  template:`
  <body>
    <app-header></app-header>
    <app-form></app-form>
    <app-footer></app-footer>
  </body>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP02_Belhoste_Jules';
}
