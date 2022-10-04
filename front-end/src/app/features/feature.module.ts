import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AccountPopoverComponent } from './components/account-popover/account-popover.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from '../app-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AccountPopoverComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  exports: [AccountPopoverComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
})
export class FeautreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: FeautreModule
  ) {
    if (parentModule) {
      throw new Error(
        'FeautreModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
