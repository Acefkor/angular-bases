import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'Wolverine';
  }

  changeAge(): void {
    this.age = 120;
  }

  resetForm(): void {
    this.age = 45;
    this.name = 'iron man';

    // document.querySelectorAll('h1')!.forEach(elemento => {
    //   elemento.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }
}
