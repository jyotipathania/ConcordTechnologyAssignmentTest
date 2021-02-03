import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'family-tree-view', component: FamilyTreeComponent},
  {path:'', component: LoginComponent},
  { path: '**', component: LoginComponent }  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
