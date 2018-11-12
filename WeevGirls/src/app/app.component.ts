import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from './services/database.service';
import { FormControl } from '@angular/forms';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchFormControl = new FormControl();
  search: any;
  options: Array<string>;
  filteredOptions: Observable<string[]>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public db: DatabaseService) {
    this.options = db.options;
  }


  ngOnInit() {
    if (this.options != null) {
      this.filteredOptions = this.searchFormControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
