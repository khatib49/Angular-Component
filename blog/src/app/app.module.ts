import { NgModule } from '@angular/core';   
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { HeadermodalComponent } from './modal/headermodal/headermodal.component';
import { BodymodalComponent } from './modal/bodymodal/bodymodal.component';
import { FootermodalComponent } from './modal/footermodal/footermodal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactItemComponent,
    ContactsComponent,
    ContactListComponent,
    ModalComponent,
    HeadermodalComponent,
    BodymodalComponent,
    FootermodalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
