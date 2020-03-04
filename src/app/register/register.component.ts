import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.fb.control(null, Validators.required),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [Validators.required])
    });

    // this.form.valueChanges.subscribe(console.log);
    // this.form.controls.email.valueChanges.subscribe(console.log);

    const name = 'James';
    const obj = {
      username: 'JamesBond',
      email: '007@broadcom.com'
    };
    this.form.patchValue(obj);
  }

  submit() {
    console.log(this.form);
  }

}
