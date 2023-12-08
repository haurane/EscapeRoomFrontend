import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingPageComponent {

  constructor(private router: Router) { }

  openStories() {
    this.router.navigate(['/stories'])
  }

}
