import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { FormGroupComponent } from './form-group/form-group.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ReactiveFormComponent,FormGroupComponent]
})
export class AppComponent {
  title = 'ANgularProject_2';
}
