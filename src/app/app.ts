import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Servicios } from './components/servicios/servicios';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Contacto, Footer,Hero, Servicios ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing-angular');
}
