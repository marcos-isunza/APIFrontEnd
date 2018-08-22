import { AppService } from './app.service';
import { Component, Input } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'app';

  private pokemon = { nombre: null, imagen: null };
  private allPokemonList = { nombre: null };
  pokemonId: number;
  pokemonArray: Pokemon[];
  pokemonList: Pokemon;

  min: number;
  max: number;
  inputNumbers: '';
  results: '';

  constructor(private appService: AppService) {}

  getMinMax(): void {
    this.appService
      .getResponse(this.inputNumbers)
      .subscribe(
        reqResults => this.parseResponse(reqResults),
        error => console.log('error ' + error)
      );
  }

  parseResponse(responseData) {
    this.min = responseData['min'];
    this.max = responseData['max'];
  }
}
