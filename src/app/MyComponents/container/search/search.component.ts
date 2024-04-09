import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = ""

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('searchInput')searchInputEL:ElementRef

  onSearchTextChanged() {
  }

  updateSearchText() {
    this.searchText =this.searchInputEL.nativeElement.value
    this.searchTextChanged.emit(this.searchText)

  }
}

