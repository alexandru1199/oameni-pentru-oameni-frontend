import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

interface Contributor {
  name: string;
  role: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Oameni pentru Oameni';

  contributors: Contributor[] = [
    {
      name: 'Andrei Popescu',
      role: 'Voluntar',
      description:
        'Contribuie la organizarea acțiunilor și inițiativelor desfășurate în comunitate.',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80'
    },
    {
      name: 'Maria Ionescu',
      role: 'Coordonator',
      description:
        'Ajută la coordonarea proiectelor și la dezvoltarea inițiativelor organizației.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'
    },
    {
      name: 'Alex Marin',
      role: 'Susținător',
      description:
        'Sprijină misiunea organizației și contribuie la dezvoltarea proiectelor pentru comunitate.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80'
    }
  ];
}