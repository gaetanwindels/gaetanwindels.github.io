import { Routes } from '@angular/router';
import { ChoiceComponent } from './screens/choice/choice.component';
import { HomeComponent } from './screens/home/home.component';
import { CounterComponent } from './screens/counter/counter.component';

export const appRoutes: Routes = [
    { path: 'choice', component: ChoiceComponent },
    { path: 'home', component: HomeComponent },
    { path: 'count', component: CounterComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
]