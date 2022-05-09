import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FootarComponent } from './footar/footar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FootarComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FootarComponent,
    HeaderComponent,
    ContentComponent
  ],
})
export class CoreModule { }
