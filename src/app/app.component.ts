import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { CardsComponent } from './units/cards/cards.component';
import { CarouselComponent } from './units/carousel/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project2';
}
