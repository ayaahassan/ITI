import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  user:User=new User(0,"","");
  register(t:any)
  {
    console.log(t);
  }
  ngOnInit(): void {
  }

}
