import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Message, MessageService } from 'src/app/rxjs-observable-test/massage-service.service';


@Component({
  selector: 'app-second-level-page-one',
  templateUrl: './second-level-page-one.component.html',
  styleUrls: ['./second-level-page-one.component.scss']
})
export class SecondLevelPageOneComponent implements OnInit {
  // public numbers$ = of(1, 2, 3);

  public errortype:string= "Starting Error";
  public text:string="default text";
  constructor(private messageService: MessageService) {
  this.messageService.messages$.subscribe(massge=>{
    this.errortype=massge.type
    this.text=massge.text

  });

  }

  addError(text: string) {
    this.messageService.addError(text);
  }
  
  addWarning(text: string) {
    this.messageService.addWarning(text);
  }

  ngOnInit(): void {
    // this.numbers$.subscribe(value => console.log('Observable emitted the next value: ' + value));
  }

}
