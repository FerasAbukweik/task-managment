import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-indicator',
  imports: [],
  templateUrl: './type-indicator.html',
  styleUrl: './type-indicator.css'
})
export class TypeIndicator {
  @Input() type : number | null = null;
  @Input() typesColors : string[] = [];
}
