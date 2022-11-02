import { EventEmitter } from 'events';

export const enum GameEvents {
  Start = "start",
  Finish = "finish"
}

export default class GameEventEmitter extends EventEmitter {
  public subscribe(eventName: GameEvents, listener: (...args: any[]) => void): void {
    this.on(eventName, listener);
  }

  public onStart(): void {
    console.log('onStart!');
    this.emit(GameEvents.Start);
  }

  public onFinish(): void {
    this.emit(GameEvents.Finish);
  }
}

/* export const gameEventEmitter = new GameEventEmitter(); */