import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-department',
  standalone: true,
  imports: [],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  department=[
  {
    id:1,
    Title:"Mobility",
    image:"../../../assets/mob.jpg",
    description:"In today's mobile-first world, optimizing your website for mobile devices is no longer optional it's essential."
  },
  {
    id:2,
    Title:"Health and Care",
    image:"../../../assets/health.jpg",
    description:"In the realm of healthcare, your website is more than just an online presence it's a lifeline for patients and providers alike"
  },
  {
    id:3,
    Title:"GIS",
    image:"../../../assets/gis.jpg",
    description:"GIS (Geographic Information System) integration on your website unlocks a world of spatial data insights."
  },
  {
    id:4,
    Title:"Banking and Finance",
    image:"../../../assets/bank.jpg",
    description:"In the competitive landscape of banking and insurance, your website serves as a crucial touchpoint for customer engagement."
  },
  {
    id:5,
    Title:"Aeronautic",
    image:"../../../assets/aero.jpg",
    description:"Welcome to our aeronautics-focused website, where innovation takes flight! Explore the cutting-edge world of aerospace engineering, aviation technology, and space exploration ."
  },
  {
    id:3,
    Title:"Insurance",
    image:"../../../assets/ins.jpg",
    description:"Welcome to our insurance website, your trusted partner in protection and peace of mind."
  },
  ]

}
