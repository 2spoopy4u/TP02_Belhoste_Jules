import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
user: User = new User();
pwdCheck:string="";
isDisplayed :boolean = false;

checkAndSubmit($event: SubmitEvent) {
  let error = false;
  if (hasNumber(this.user.nom)) {
      alert("Le nom ne doit pas contenir de nombre")
      error = true;
  }
  if (hasNumber(this.user.prenom)) {
      alert("Le prénom ne doit pas contenir de nombre")
      error = true;

  }
  if (hasNumber(this.user.ville)) {
      alert("La ville ne doit pas contenir de nombre")
      error = true;


  }
  if (!hasNumber(this.user.cp)) {
      alert("Le code postal doit contenir des nombres")
      error = true;

  }
  if (this.user.mail.indexOf('@') < 0) {
      alert("Votre mail doit contenir un @")
      error = true;

  }
  if (this.pwdCheck != this.user.mdp) {
      alert("Veuillez entrer deux fois le même mot de passe")
      error = true;

  }
  if (error) {
    return false;
  }
  this.isDisplayed = true;
  return true;
}

}
function hasNumber(myString:string) {
  return /\d/.test(myString);
}