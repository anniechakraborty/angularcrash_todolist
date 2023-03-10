import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router : Router){}
  // checks if the route passed to the function is equal to the current route of the router
  hasRoute(route : string) : boolean{
    return this.router.url === route;
  }
}
