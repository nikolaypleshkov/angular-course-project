import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/guards/auth.guard';
import { TeacherGuard } from './features/guards/teacher.guard';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { ClassComponent } from './views/class/class.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MyClassesComponent } from './views/my-classes/my-classes.component';
import { MyTasksComponent } from './views/my-tasks/my-tasks.component';
import { RegisterComponent } from './views/register/register.component';
import { SettingsComponent } from './views/settings/settings.component';
import { TaskComponent } from './views/task/task.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my-classes',
        component: MyClassesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my-tasks',
        component: MyTasksComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'class/:id',
        component: ClassComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'task/:id',
        component: TaskComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'create-class',
        component: ClassComponent,
        canActivate: [AuthGuard, TeacherGuard],
      },
      {
        path: 'create-task',
        component: TaskComponent,
        canActivate: [AuthGuard, TeacherGuard],
      }
      
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
