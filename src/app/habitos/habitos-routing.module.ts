import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

import { HabitosComponent } from './habitos/habitos.component';

const routes: Routes = [
  {
    path: '',
    component: HabitosComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HabitosRoutingModule {}