import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationMessageInputData } from '../../components-interfaces/confirmation-message-input-data';

@Component({
  selector: 'app-confirmation-message',
  imports: [],
  templateUrl: './confirmation-message.html',
  styleUrl: './confirmation-message.css'
})
export class ConfirmationMessage {
  // data info to show
  @Input() toShowData! : ConfirmationMessageInputData;
  // result
  @Output() isConfirmed = new EventEmitter<boolean>();
}
