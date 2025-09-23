import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule } from '@angular/forms';
import { filterDataEnum } from '../enums/filtered-data-enum'; 

@Component({
  selector: 'app-filter-options',
  imports: [ReactiveFormsModule],
  templateUrl: './filter-options.html',
  styleUrl: './filter-options.css'
})
export class FilterOptions implements OnInit{
  //options to show in filter section
  @Input() tasksTypes : string[] = [];
  //previously Selected Options
  @Input() previouslySelectedOptions : number = 0;
  //new selected options
  @Output() selected = new EventEmitter<number>();


  // chosenOptions data
  chosenOptions! : FormGroup;

  //give init values
  ngOnInit(): void {
    this.chosenOptions = new FormGroup ({
    ToDo : new FormControl((filterDataEnum.toDo & this.previouslySelectedOptions) == filterDataEnum.toDo),
    InProgress : new FormControl((filterDataEnum.inProgress & this.previouslySelectedOptions) == filterDataEnum.inProgress),
    Review : new FormControl((filterDataEnum.review & this.previouslySelectedOptions) == filterDataEnum.review),
    Done : new FormControl((filterDataEnum.done & this.previouslySelectedOptions) == filterDataEnum.done)
  })
  }

  //if clicked filter button
  returnData()
  {
    let toRet : number = 0;
    if(this.chosenOptions!.value.ToDo) { toRet += filterDataEnum.toDo;}
    if(this.chosenOptions!.value.InProgress) { toRet += filterDataEnum.inProgress;}
    if(this.chosenOptions!.value.Review) { toRet += filterDataEnum.review;}
    if(this.chosenOptions!.value.Done) { toRet += filterDataEnum.done;}

    this.selected.emit(toRet);
  }

}
