import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'promo';
  welcomeMsg = 'Bonjour tout le monde';
  user = {
    id: 0,
    name: 'Michel François',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
    jobTitle: 'Customer Division Assistant'
  };

  test(e) {
    console.log('user : ', this.user.name);
    console.log(e);
  }

  test1(e) {
    console.log('mouseOver');
    console.log(e);
  }

  changeText(text) {
    console.log('coucou : ', text);
  }

  logInputValue(val) {
    console.log('la valeur saisie dans le champ texte coucou est  : ', val);
  }
}
