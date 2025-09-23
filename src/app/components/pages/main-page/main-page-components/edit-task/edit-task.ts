import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationMessage } from '../../../../shared-components/confirmation-message/confirmation-message'; 
import { ConfirmationMessageInputData } from '../../../../components-interfaces/confirmation-message-input-data'; 
import { FormGroup , FormControl , ReactiveFormsModule } from '@angular/forms';
import { TaskData } from '../../../../../interfaces/task/task-data'; 
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  imports: [ConfirmationMessage , ReactiveFormsModule],
  providers: [DatePipe],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css'
})
export class EditTask implements OnInit{

  constructor(private _datePipe : DatePipe) {}


  //if true show
  showConfirmDeleteMessage : boolean = false;
  showConfirmEditMessage : boolean = false;
  //

  //task types to select in type section
  @Input() tasksTypes : string[] = []
  //curr task data
  @Input() currTask! : TaskData;

  //show current edit message
  @Output() showThisMessage = new EventEmitter<boolean>();




  confirmDeleteMessageData : ConfirmationMessageInputData = {
  confirmButtonColor : "#EF4444",
  confirmButtonText : "Delete",
  message : "Are You Sure Your About To Delete This Task"
}

confirmEditMessageData : ConfirmationMessageInputData = {
  confirmButtonColor : "#3B82F6",
  confirmButtonText : "Edit",
  message : "Are You Sure Your About To Edit This Task"
}

  // selected options
  SelectedOptions! : FormGroup;

  //init values for selected options (same task values)
ngOnInit(): void {
  this.SelectedOptions = new FormGroup({
 taskName : new FormControl(this.currTask.task),
 startDate : new FormControl(this.currTask.startDate ? this._datePipe.transform(this.currTask.startDate, 'yyyy-MM-dd') : '' ),
 goalDate : new FormControl(this.currTask.startDate ? this._datePipe.transform(this.currTask.GoalDate, 'yyyy-MM-dd') : '' ),
 type : new FormControl(this.currTask.type)
})
}

//close all messages
closeMessage()
{
  this.showConfirmDeleteMessage = false;
  this.showConfirmEditMessage = false;
}

//if clicked delete button
manageDeleteMessage(isConfirmed : boolean)
{
  if(isConfirmed)
  {
    this.deleteTask()
  }

  this.closeMessage();

}


//if clicked edit button
manageEditMessage(isConfirmed : boolean)
{
  if(isConfirmed)
  {
    this.editTask()
  }

  //continue edit code here  -------------------


  this.closeMessage();
}



deleteTask()
{
  //continue delete code here -------------------
}


editTask()
{
  //continue edit code here -------------------
}

}
