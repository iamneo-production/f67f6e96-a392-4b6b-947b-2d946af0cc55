import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animals';
  animalSource = [
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
  "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg",
  "https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg",
  "https://images.pexels.com/photos/2541239/pexels-photo-2541239.jpeg",
  "https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg"
  ]
  
  animalPosition=this.animalSource[0];
  selectOption(item:any)
  {
    let index=item.value;
    this.animalPosition=this.animalSource[index];
  }
  
  }
  
  
  