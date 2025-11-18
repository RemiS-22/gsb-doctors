import { Component, input } from '@angular/core';
import { Doctor } from '../../types/doctor.interface';

@Component({
  selector: 'app-doctor-card',
  imports: [],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.css'
})
export class DoctorCard {
  doctor = input.required<Doctor>();
}
