import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HEROES } from '../../model/mockheroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroa: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }
  heroes = HEROES;
  ngOnInit(): void {
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
