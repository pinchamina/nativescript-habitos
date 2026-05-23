import { Component, OnInit } from '@angular/core';
import { isAndroid } from '@nativescript/core';

import { HabitosService } from '../habitos.service';

@Component({
  selector: 'ns-habitos',
  templateUrl: './habitos.component.html',
})
export class HabitosComponent implements OnInit {

  habitos: string[] = [];
  plataforma = '';

  constructor(private habitosService: HabitosService) {}

  ngOnInit(): void {

    this.habitos = this.habitosService.getHabitos();

    if (isAndroid) {
      this.plataforma = 'Android';
    }
  }
}