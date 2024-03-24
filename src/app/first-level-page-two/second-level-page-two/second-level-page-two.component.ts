import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, MessageService } from 'src/app/rxjs-observable-test/massage-service.service';

@Component({
  selector: 'app-second-level-page-two',
  templateUrl: './second-level-page-two.component.html',
  styleUrls: ['./second-level-page-two.component.scss']
})
export class SecondLevelPageTwoComponent implements OnInit {

  message$!: Observable<Message>;
  constructor(private messageService: MessageService) {
 this.message$= this.messageService.messages$

  }


 

  ngOnInit(): void {
   
  }

}
