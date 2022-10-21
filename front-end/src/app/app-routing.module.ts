import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { ClassComponent } from './views/class/class.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MyClassesComponent } from './views/my-classes/my-classes.component';
import { MyTasksComponent } from './views/my-tasks/my-tasks.component';
import { MyTsksComponent } from './views/my-tsks/my-tsks.component';
import { RegisterComponent } from './views/register/register.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'my-classes',
        component: MyClassesComponent,
      },
      {
        path: 'my-tasks',
        component: MyTasksComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'class/:id',
        component: ClassComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
