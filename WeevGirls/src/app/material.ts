import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatFormFieldModule, MatTreeModule, MatInputModule, MatAutocompleteModule, MatOptionModule } from '@angular/material';

@NgModule({
    imports: [
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatFormFieldModule,
        MatTreeModule,
        MatInputModule,
        MatAutocompleteModule,
        MatOptionModule
    ],
    exports: [
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatFormFieldModule,
        MatTreeModule,
        MatInputModule,
        MatAutocompleteModule,
        MatOptionModule
    ]
})
export class WeevMaterialModule { }
