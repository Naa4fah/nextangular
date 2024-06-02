import { Component } from '@angular/core';
import { AccordianComponent } from '../../units/accordian/accordian.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AccordianComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
