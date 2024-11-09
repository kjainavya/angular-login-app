import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})

export class WelcomePageComponent {
  username: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the username from the query parameters
    this.username = this.route.snapshot.queryParamMap.get('username') || 'Guest';
}
}
