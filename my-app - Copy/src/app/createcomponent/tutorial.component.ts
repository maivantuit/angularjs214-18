// Thư viện của angular2.
// STR TuMV 15.07.2018 MOD Lession 13: Sự tương tác giữa các components.
//import {Component}  from '@angular/core';
 import {Component, Input, Output, EventEmitter}  from '@angular/core';
// END TuMV 15.07.2018 MOD Lession 13: Sự tương tác giữa các components.
@Component({
    selector:'my-componentCop',
    templateUrl:'./tutorial.component.html',
    styleUrls: ['./tutorial.component.css']    
})
export class TutorialComponent{
    name="Mai Văn Tú";

    fname="Cọp Huynh";

    description="This is AngularJS 2";
    // Lession 8: Binding class and style element
    applyClass=true;
    applyStyle=true  

    // Lession 9 Event Binding
    clickFunc(name:string):void{
        console.log(name);
    }

    // Lession 11 : Strut directives
    showLineIF = true;

    color="Green";

    // Lession 12: Attribute directives
    cone=true;
    ctwo=true;

    sone="Italic";
    stwo="30px";

    listColor:string[] = ['Red','Yellow','Green','Blue','Violet']; 
    
    toggle(){
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }

     // Lession 13: Tương tác giữa các conponents.
     @Input()  nameEmployee:string;
     @Output() onVote = new EventEmitter<boolean>();
     voted:boolean = false;      
 
     vote(agree:boolean){
         // flag.
         this.voted = true;
         // emit: xuất ra kết quả, tại result.
         this.onVote.emit(agree);
     }
     setchangeNameEmployee(name:string){
         this.nameEmployee=name;
     }
     // Lession 14: Pipes
     public department:string="cong nghe THONG TIN";
     public today = Date.now();
     public percentNum=1.23;
     public object: Object={foo:'bar',baz:'luiz',nested:{xyz:3,numbers:[1,2,3,4,5]}}
     public listABC:string[] = ['a','b','c','d'];
}