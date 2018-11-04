import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [
        MatTableModule, 
        MatButtonModule,
        MatIconModule,
        MatSortModule,
        MatPaginatorModule
    ],
    exports: [
        MatTableModule, 
        MatButtonModule,
        MatIconModule,
        MatSortModule,
        MatPaginatorModule
    ],
})
export class MaterialModule { }