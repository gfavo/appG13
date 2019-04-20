import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HomePage } from "./home/home.page";

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject(this.homePage.pessoa.user);
  currentMessage = this.messageSource.asObservable();

  constructor(private homePage: HomePage) { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}