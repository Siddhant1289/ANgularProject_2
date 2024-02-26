import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  id = new FormControl('');
  ename = new FormControl('');
  salary = new FormControl(0);
  source = new FormControl('');
  destination = new FormControl('');

  copyValue(){
    this.destination.setValue(this.source.value);
  }
}
