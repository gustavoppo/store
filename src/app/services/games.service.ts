import { Injectable } from '@angular/core';

export type GameIndex = {
  console: string;
  gameType: string;
  gameCover: string;
  gameLabel: string;
  gamePrice: string;
  gameTitle: string;
};

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gamesIndex: GameIndex[] = [];

  constructor() {
    this.initializaGames();
  }

  private initializaGames(): void {
    this.gamesIndex = [
      {
        console: 'PS5',
        gameType: 'Full-Game',
        gameCover: 'assets/bt-1.jpg',
        gameLabel: 'New',
        gamePrice: '$79.99',
        gameTitle: "Play It Now!",
      },
      {
        console: 'PS4',
        gameType: 'Full-Game',
        gameCover: 'assets/bt-4.jpg',
        gameLabel: 'none',
        gamePrice: '$19.99',
        gameTitle: "Buy Now!",
      },
      {
        console: 'PS5',
        gameType: 'Demo',
        gameCover: 'assets/bt-5.jpg',
        gameLabel: 'Exclusive',
        gamePrice: '$59.99',
        gameTitle: "Buy Now!",
      },
      {
        console: 'PS3',
        gameType: 'Action',
        gameCover: 'assets/bt-bad-company-2.jpg',
        gameLabel: 'none',
        gamePrice: '$39.99',
        gameTitle: "Buy Now!",
      },
      {
        console: 'ALL',
        gameType: 'Action',
        gameCover: 'assets/bt-hardline.jpg',
        gameLabel: 'Promotion',
        gamePrice: '$29.99',
        gameTitle: "Play It Now!",
      },
      {
        console: 'PS3',
        gameType: 'Full-Game',
        gameCover: 'assets/ac-cover.jpg',
        gameLabel: 'Promotion',
        gamePrice: '$19.99',
        gameTitle: "Play It Now!",
      },

    ];
  }
}
