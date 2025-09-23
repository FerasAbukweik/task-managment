import { Component, Input } from '@angular/core';
import { TaskData } from '../../../../../interfaces/task/task-data';
import { TypeIndicator } from '../type-indicator/type-indicator';
import { EditTask } from '../edit-task/edit-task';

@Component({
  selector: 'app-search-area',
  imports: [TypeIndicator , EditTask],
  templateUrl: './search-area.html',
  styleUrl: './search-area.css'
})
export class SearchArea {
  //tasks data
  @Input() tasksData: TaskData[] = [];
  //tasks type string because in tasksData.type its stored as enum 
  @Input() tasksTypes : string[] = [];
  //for dot on left of type color
  @Input() typesColors : string[] = [];

  //to show edit message
  showEditTasks : boolean = false;
  //save curr task here before sending it to edit task page
  currTask! : TaskData;
}
