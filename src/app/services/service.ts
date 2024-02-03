import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUsers } from './modules/Iuser';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList!:IUsers[];
  constructor(){
    this.userList=[]
  }

  addData(data: IUsers) {
    this.userList.push(data)
  }

  getData(){
    return this.userList;
  }
}
