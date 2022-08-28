import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero.interface';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHero(id: Number) {
    const hero = HEROES.find((h) => h.id === id);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: Fetched heroes');
    return heroes;
  }
}
