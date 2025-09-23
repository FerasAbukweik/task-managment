import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-indicator',
  imports: [],
  templateUrl: './type-indicator.html',
  styleUrl: './type-indicator.css'
})
export class TypeIndicator {
  //type in enum
  @Input() type : number | null = null;
  //types colors
  @Input() typesColors : string[] = [];
}
