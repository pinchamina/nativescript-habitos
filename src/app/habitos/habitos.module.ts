import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {
  NativeScriptCommonModule,
  NativeScriptModule,
} from '@nativescript/angular';

import { HabitosRoutingModule } from './habitos-routing.module';

import { HabitosComponent } from './habitos/habitos.component';

import { DetalleHabitoComponent } from './detalle-habito/detalle-habito.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptCommonModule,
    HabitosRoutingModule,
  ],

  declarations: [
    HabitosComponent,
    DetalleHabitoComponent,
  ],

  schemas: [NO_ERRORS_SCHEMA],
})

export class HabitosModule {}