import { EventEmitter } from 'events';
import { GameEvents } from './GameEvents';

export default class GameEventEmitter extends EventEmitter {
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