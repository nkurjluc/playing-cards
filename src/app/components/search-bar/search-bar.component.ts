import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() search = 'Initial';
  @Output() searchChange = new EventEmitter<string>(); 

  @Output() searchButtonClicked = new EventEmitter();

  
  searchClick(){
    this.searchButtonClicked.emit();
  }

  updateSearch(value: string){
    this.searchChange.emit(value);
  }
}
