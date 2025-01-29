import { Component, EventEmitter, input, Input, model, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-bar',
    imports: [FormsModule],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  search = model<string>('Initial');
  //searchChange = output<string>(); 

  searchButtonClicked = output({alias: 'submit'});

  
  searchClick(){
    this.searchButtonClicked.emit();
  }

  //updateSearch(value: string){
    //this.search.set(value);
    //this.searchChange.emit(value);
  //}
}
