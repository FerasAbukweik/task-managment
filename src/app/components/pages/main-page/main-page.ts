import { Component, OnInit } from '@angular/core';
import { TaskData } from '../../../interfaces/task/task-data'; 
import { SearchArea } from './main-page-components/search-area/search-area'; 
import { FormsModule } from '@angular/forms';
import { taskTypes } from '../../../enums/taskenums/task-type'; 
import { FilterOptions } from './main-page-components/filter-options/filter-options'; 
import { filterDataEnum } from './main-page-components/enums/filtered-data-enum'; 
import { EditTask } from './main-page-components/edit-task/edit-task'; 

@Component({
  selector: 'app-main-page',
  imports: [SearchArea, FormsModule, FilterOptions , EditTask],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage implements OnInit {

  //search area input
  searchInput : string = "";
  //types colors will be shared from here to everywhere its needed so when its changed here it doesnt have to be changed everywhere
  typesColors : string[] = ["#c2dfff" , "#ffe6a2" , "#ffd5ab" , "#bfeed1"];
  //tasks types text needed because in tasksData its stored as enum
  tasksTypes : string[] = ["To Do" , "In Progress" , "Review" , "Done"];
  //if true show filter options
  showFilterOptions : boolean = false;
  //it true show search area
  showSearchArea : boolean = false;
  //previousle selected filter options
  selectedFilterOptions : number = 0;
  //if true show edit tasks component
  showEditTasks : boolean = false;
  //to send to edit task component
  currTask! : TaskData;

  //all tasks data
tasksData: TaskData[][] = [
  [
    { id: 1, task: "Finish project report", state: false, type: taskTypes.toDo, startDate: new Date('2025-09-20'), GoalDate: new Date('2025-09-25') },
    { id: 2, task: "Reply to client emails", state: false, type: taskTypes.toDo, startDate: new Date('2025-09-21'), GoalDate: new Date('2025-09-22') },
    { id: 3, task: "Team meeting", state: true, type: taskTypes.toDo, startDate: new Date('2025-09-19'), GoalDate: new Date('2025-09-19') },
  ],
  [
    { id: 4, task: "Buy groceries", state: false, type: taskTypes.inProgress, startDate: new Date('2025-09-20'), GoalDate: new Date('2025-09-20') },
    { id: 5, task: "Go to the gym", state: true, type: taskTypes.inProgress, startDate: new Date('2025-09-18'), GoalDate: new Date('2025-09-18') },
    { id: 6, task: "Call parents", state: false, type: taskTypes.inProgress, startDate: new Date('2025-09-19'), GoalDate: new Date('2025-09-19') },
  ],
  [
    { id: 7, task: "Read TypeScript book", state: true, type: taskTypes.Review, startDate: new Date('2025-09-15'), GoalDate: new Date('2025-09-21') },
    { id: 8, task: "Practice coding challenges", state: false, type: taskTypes.Review, startDate: new Date('2025-09-20'), GoalDate: new Date('2025-09-23') },
    { id: 9, task: "Watch tutorial videos", state: false, type: taskTypes.Review, startDate: new Date('2025-09-19'), GoalDate: new Date('2025-09-22') },
  ],
  [
    { id: 10, task: "Plan vacation", state: false, type: taskTypes.Done, startDate: new Date('2025-09-10'), GoalDate: new Date('2025-09-20') },
    { id: 11, task: "Renew car insurance", state: false, type: taskTypes.Done, startDate: new Date('2025-09-05'), GoalDate: new Date('2025-09-15') },
    { id: 12, task: "Clean the house", state: false, type: taskTypes.Done, startDate: new Date('2025-09-18'), GoalDate: new Date('2025-09-19') },
  ]
];

//get data from api here
ngOnInit(): void {
//get data from api here -------------------
}

//toggle Show Filter Options
toggleShowFilterOptions(){
this.showFilterOptions = !this.showFilterOptions;
this.showSearchArea = false;
this.searchInput = "";
}

//filtering method using binary 
filterDataForSearch(): TaskData[] {
  let allTasks: TaskData[][] = [];
  //if something is selected filter data
  if(this.selectedFilterOptions != 0)
  {
    if((filterDataEnum.toDo & this.selectedFilterOptions) == filterDataEnum.toDo)
    {
      allTasks.push(this.tasksData[0])
    }
    if((filterDataEnum.inProgress & this.selectedFilterOptions) == filterDataEnum.inProgress)
    {
      allTasks.push(this.tasksData[1])
    }
    if((filterDataEnum.review & this.selectedFilterOptions) == filterDataEnum.review)
    {
      allTasks.push(this.tasksData[2])
    }
    if((filterDataEnum.done & this.selectedFilterOptions) == filterDataEnum.done)
    {
      allTasks.push(this.tasksData[3])
    }
  }
  //if nothing is selected show all data
  else{
    allTasks = this.tasksData;
  }

  //make data in one list insted of list of list
  let all_tasks = allTasks.flat();
  

  //filter based on search input
  return all_tasks.filter(task =>
    task.task.toUpperCase().includes(this.searchInput.toUpperCase()));
}

//toggle small checkbox under each  task
toggleStatus(taskId : number , newStatus : boolean)
{
  //toggle small checkbox under each task -------------------
}

}
