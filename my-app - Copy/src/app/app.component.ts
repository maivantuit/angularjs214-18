import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './createcomponent/tutorial.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = "Mai Văn Tú";

  // Lession 13: Tương tác giữa các conponents.
  agreeCount: number = 0;
  disAgreeCount: number = 0;
  nameList = ['Mr A', 'Mr B', 'Mr C', 'Mr D'];

  parentVote(agreeFlag: boolean) {
    if (agreeFlag) {
      this.agreeCount++;
    } else {
      this.disAgreeCount++;
    }
  }

  @ViewChild(TutorialComponent)
  private tutorialComponent: TutorialComponent;

  changeNameEmployee(){
    this.tutorialComponent.setchangeNameEmployee('Mai Văn Tú Change In Parent');
  }
  // Lession 15: Làm việc với Form:
  public cities=[{Id:1,Name: 'Hà Nội'},{Id:2,Name: 'TP HCM'},{Id:3,Name: 'Đà Nẵng'}];
  onSubmit(value:any){
    console.log(value);
  }
}
