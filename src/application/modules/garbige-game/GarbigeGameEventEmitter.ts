import { EventEmitter } from 'events';

export const enum GameEvents {
  Start = "start",
  Finish = "finish"
}

class GarbigeGameEventEmitter extends EventEmitter {
  public subscribe(eventName: GameEvents, listener: (...args: any[]) => void): void {
    this.on(eventName, listener);
  }

  public onStart(): void {
    this.emit(GameEvents.Start);
  }

  public onFinish(): void {
    this.emit(GameEvents.Finish);
  }
}

export const garbigeGameEventEmitter: GarbigeGameEventEmitter = new GarbigeGameEventEmitter();