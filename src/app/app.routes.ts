import { Routes } from '@angular/router';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page.component';


export const routes: Routes = [
    { path: 'medecins', component: DoctorsPageComponent },
    { path: '', component: DoctorsPageComponent }, // route racine  
    { path: '**', redirectTo: '' },
];
