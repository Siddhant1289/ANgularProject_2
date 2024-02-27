import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'form-group',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {

  reactiveForm = new  FormGroup({
    ename: new FormControl('',[Validators.required,Validators.minLength(5) ]),
    salary: new  FormControl('',Validators.required)
  });

  onSubmit(){
    console.log("Name : "+this.reactiveForm.get('ename')?.value);
    console.log("Salary : "+this.reactiveForm.get('salary')?.value);
  }

  get f( ) { return this.reactiveForm.controls; }
} 
