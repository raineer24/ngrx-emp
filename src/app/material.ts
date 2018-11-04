import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        MatTableModule, 
        MatButtonModule,
    ],
    exports: [
        MatTableModule, 
        MatButtonModule,
    ],
})
export class MaterialModule { }