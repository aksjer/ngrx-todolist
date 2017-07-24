import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  private s4(): string {
    return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
  }

  public guid(): string {
    return (this.s4() + this.s4()).toLowerCase();
  }

}
