import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material';
import { AppTableComponent, AppDropdownComponent, AppDialogComponent } from './components';

@NgModule({
  declarations: [
    AppTableComponent,
    AppDropdownComponent,
    AppDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, FormsModule,
  ],
  exports: [
    AppTableComponent,
    AppDropdownComponent,
  ],
  entryComponents: [
    AppDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GlobalModule { }
