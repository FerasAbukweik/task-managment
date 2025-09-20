import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationMessage } from '../../../../confirmation-message/confirmation-message'; 
import { ConfirmationMessageInputData } from '../../../../interfaces/confirmation-message-input-data'; 
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

  showConfirmDeleteMessage : boolean = false;
  showConfirmEditMessage : boolean = false;
  @Input() tasksTypes : string[] = []
  @Output() showThisMessage = new EventEmitter<boolean>();
  @Input() currTask! : TaskData;

  Data! : FormGroup;


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


ngOnInit(): void {
  this.Data = new FormGroup({
 taskName : new FormControl(this.currTask.task),
 startDate : new FormControl(this.currTask.startDate ? this._datePipe.transform(this.currTask.startDate, 'yyyy-MM-dd') : '' ),
 goalDate : new FormControl(this.currTask.startDate ? this._datePipe.transform(this.currTask.GoalDate, 'yyyy-MM-dd') : '' ),
 type : new FormControl(this.currTask.type)
})
}

closeMessage()
{
  this.showConfirmDeleteMessage = false;
  this.showConfirmEditMessage = false;
}

manageDeleteMessage(isConfirmed : boolean)
{
  if(isConfirmed)
  {
    this.deleteTask()
  }

  this.closeMessage();

}

manageEditMessage(isConfirmed : boolean)
{
  if(isConfirmed)
  {
    this.editTask()
  }

  this.closeMessage();
}



deleteTask()
{
  //delete
}


editTask()
{
  //edit
}

}
