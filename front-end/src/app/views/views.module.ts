import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { MyTsksComponent } from './my-tsks/my-tsks.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FeautreModule } from '../features';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    SettingsComponent,
    MyClassesComponent,
    MyTsksComponent,
    MyTasksComponent,
    CalendarComponent,
    RegisterComponent,
    ClassComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FeautreModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
  ],
})
export class ViewsModule {}
