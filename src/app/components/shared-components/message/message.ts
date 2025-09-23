import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message implements OnInit{

  //to show message
  @Input() message! : string;

  //result
  @Output() showMessage = new EventEmitter<boolean>();
  ngOnInit(): void {
    
  }

}
