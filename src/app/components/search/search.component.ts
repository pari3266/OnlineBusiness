import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ShareService } from 'src/app/services/share.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions!: Observable<string[]>;

  searchedValue: string[] = [];
  term : string = '';
  constructor(private shareService: ShareService,){

  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    // this.shareService.searchedValues.next(this.term);
    const filterValue = value.toLowerCase();
    this.searchedValue = this.options.filter(option => option.toLowerCase().includes(filterValue));
    // this.shareService.searchedValues.next(this.searchedValue);
    this.shareService.searchedValues.next(value);
    return this.searchedValue;
  }

}
