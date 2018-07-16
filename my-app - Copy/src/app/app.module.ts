import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// STR TuMV 14.07.2018 ADD Create component
import { TutorialComponent } from './createcomponent/tutorial.component';
// END TuMV 14.07.2018 ADD Create component

// STR TuMV 14.07.2018 ADD Lession 10: Two way binding
// FormsModule: để ngModel không bị error.
import { FormsModule } from '@angular/forms';
// END TuMV 14.07.2018 ADD Lession 10: Two way binding

// STR TuMV 15.07.2018 ADD Lession 14: Tạo mới 1 pipes.
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
// END TuMV 15.07.2018 ADD Lession 14: Tạo mới 1 pipes.

// STR TuMV 14.07.2018 ADD Create component

// END TuMV 14.07.2018 ADD Create component

// STR TuMV 14.07.2018 MOD,ADD 
import { EmployeeListComponent } from './employee/employee.component';
import { EmployeeListComponent2 } from './employeeuseservices/employee.component';
import { EmployeeService } from '../app/services/employee.service';
// Decorator
@NgModule({
  declarations: [
    AppComponent, TutorialComponent, ExponentialStrengthPipe, EmployeeListComponent,EmployeeListComponent2
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
// END TuMV 14.07.2018 MOD,ADD 
export class AppModule { }
