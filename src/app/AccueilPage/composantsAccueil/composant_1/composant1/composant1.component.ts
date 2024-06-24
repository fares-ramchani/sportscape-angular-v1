import { Component } from '@angular/core';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.css']
})
export class Composant1Component {
  title='carousel';
  selectedIndex = 0;
  images=[
    {
      imageSrc:
      '../../../../../assets/images/accueil/composant1/componant1img1.png',
      imageAlt:'photo not found',
    },
    {
      imageSrc:
      '../../../../../assets/images/accueil/composant1/componant1img2.png',
      imageAlt:'photo not found',
    },
    {
      imageSrc:
      '../../../../../assets/images/accueil/composant1/componant1img3.png',
      imageAlt:'photo not found',
    },
    {
      imageSrc:
      '../../../../../assets/images/accueil/composant1/componant1img4.png',
      imageAlt:'photo not found',
    }
  ]
}
