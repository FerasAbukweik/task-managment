import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationMessageInputData } from '../interfaces/confirmation-message-input-data';

@Component({
  selector: 'app-confirmation-message',
  imports: [],
  templateUrl: './confirmation-message.html',
  styleUrl: './confirmation-message.css'
})
export class ConfirmationMessage {
  @Input() toShowData! : ConfirmationMessageInputData;
  @Output() isConfirmed = new EventEmitter<boolean>();
}
