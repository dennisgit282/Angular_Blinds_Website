import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { BaseComponent } from './components/base/base.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {
    path: "", component: BaseComponent
  },

  {
    path: "about", component: AboutComponent
  },

  {
    path: "project", component: ProjectsComponent
  },  

  {
    path: "contact", component: ContactComponent
  },

  {
    path: "login", component: LoginComponent
  }



];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//adds routing for application
//whatever paths we give here will go through router outlet in home.coomponent.html

