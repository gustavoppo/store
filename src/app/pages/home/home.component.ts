import { Component, OnInit } from '@angular/core';
import { GameIndex, GameService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  getGames: GameIndex[] = [];
  console: string = '';
  gameType: string = '';
  gameCover: string = '';
  gameLabel: string = '';
  gamePrice: string = '';
  gameTitle: string = '';

  constructor(private service: GameService) {}

  ngOnInit(): void {
    this.getGames = this.service.gamesIndex;
    this.getGames.forEach((game) => {
      this.console = game.console;
      this.gameType = game.gameType;
      this.gameCover = game.gameCover;
      this.gameLabel = game.gameLabel;
      this.gamePrice = game.gamePrice;
      this.gameTitle = game.gameTitle;
    });
  }
}
