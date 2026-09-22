import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITINERARIES } from './mock-itineraries';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oameni pentru Oameni';
  itineraries = ITINERARIES;
}
