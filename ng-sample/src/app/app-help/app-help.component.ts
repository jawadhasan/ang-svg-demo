import { Component, OnInit } from '@angular/core';
// import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-app-help',
  templateUrl: './app-help.component.html',
  styleUrls: ['./app-help.component.css']
})
export class AppHelpComponent implements OnInit {

  // constructor(private messageService: MessageService) { }
  constructor() { }
value1:string="";
value2:string="";

  ngOnInit(): void {
  }

  helpClicked(){
    console.log("help clicked");
    // this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

}
