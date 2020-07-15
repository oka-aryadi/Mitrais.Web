import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiInterceptor } from './shared/api.interceptor';
import { GenderService } from './shared/services/gender.service';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TextboxComponent } from './shared/components/textbox/textbox.component';
import { LabelComponent } from './shared/components/label/label.component';
import { RadioComponent } from './shared/components/radio/radio.component';
import { GenderResolver } from './shared/resolvers/gender.resolver';
import { SubmitButtonComponent } from './shared/components/submit-button/submit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DropdownComponent,
    RegisterPageComponent,
    TextboxComponent,
    LabelComponent,
    RadioComponent,
    SubmitButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    GenderService,
    GenderResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
