import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from './services/database.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

const TREE_DATA = JSON.stringify({
  'Successful Women': '',
  'Inspiring Women': '',
  'Future Thinking Women': {
    'Aerospace': '',
    'Agriculture': {
      'Fishing': '',
      'Timber': '',
      'Tobacco': ''
    },
    'Chemical': {
      'Pharmaceutical': ''
    },
    'Computer': {
      'Software': '',
      'Hardware': ''
    },
    'Construction': '',
    'Defense': {
      'Arms': ''
    },
    'Education': '',
    'Energy': {
      'Electrical Power': '',
      'Petroleum': ''
    },
    'Entertainment': '',
    'Financial Services': {
      'Insurance': ''
    },
    'Food': {
      'Fruit Production': ''
    },
    'Healthcare': '',
    'Hospitality': '',
    'Information': '',
    'Manufacturing': {
      'Automotive': '',
      'Electronics': '',
      'Pulp and Paper': '',
      'Steel': '',
      'Shipbuilding': ''
    },
    'Mass Media': {
      'Broadcasting': '',
      'Film': '',
      'Music': '',
      'News': '',
      'Publishing': '',
      'World Wide Web': ''
    },
    'Mining': '',
    'Telecommunications': {
      'Internet': ''
    },
    'Transport': '',
    'Water': '',
    'Service': ''
  },
  'Educated Women': ''
});

@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor(protected db: DatabaseService) {
    this.initialize();
    console.log(this.db.filters.valueChanges());
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: object, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.filename = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FileDatabase]
})
export class AppComponent {
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  formControl: FormControl;
  search: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasNestedChild = (_: number, nodeData: FileNode) => nodeData.type !== '';

  private _getChildren = (node: FileNode) => node.children;
}
