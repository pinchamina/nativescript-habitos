import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabitosService {

  habitos = [
    'Hacer ejercicio',
    'Leer 20 minutos',
    'Tomar agua',
    'Estudiar Angular'
  ];

  getHabitos() {
    return this.habitos;
  }
}