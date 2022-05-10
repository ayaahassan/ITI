import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerToxPipe } from './power-tox.pipe';
import { ArraySplicePipe } from './array-splice.pipe';
import { StringConvertPipe } from './string-convert.pipe';
import { RateComponent } from './rate/rate.component';



@NgModule({
  declarations: [
    PowerToxPipe,
    ArraySplicePipe,
    StringConvertPipe,
    RateComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PowerToxPipe,
    ArraySplicePipe,
    StringConvertPipe,
    RateComponent
  ]
})
export class SharedModule { }
