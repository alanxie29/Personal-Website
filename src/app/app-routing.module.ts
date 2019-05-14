import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { HellogbyeComponent } from './hellogbye/hellogbye.component';
import { HuddleComponent } from './huddle/huddle.component';
import { SubtrackerComponent } from './subtracker/subtracker.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'HelloGbye', component: HellogbyeComponent},
  { path: 'Huddle', component: HuddleComponent},
  { path: 'SubTracker', component: SubtrackerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
