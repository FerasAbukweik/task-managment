import { Component, Input } from '@angular/core';
import { TaskData } from '../../../../../interfaces/task/task-data';
import { TypeIndicator } from '../type-indicator/type-indicator'; 

@Component({
  selector: 'app-search-area',
  imports: [TypeIndicator],
  templateUrl: './search-area.html',
  styleUrl: './search-area.css'
})
export class SearchArea {
  @Input() tasksData: TaskData[] = [];
  @Input() tasksTypes : string[] = [];
  @Input() typesColors : string[] = [];
}
