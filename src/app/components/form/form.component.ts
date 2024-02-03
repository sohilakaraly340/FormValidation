import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../service';
import { IUsers } from '../../modules/Iuser';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern(emailRegex)])

  })
  constructor(private dataService: DataService) { }
  submit(user:IUsers) {
    if (this.myForm.valid){
      this.dataService.addData(user);
      this.myForm.reset();
    }
  }



}
