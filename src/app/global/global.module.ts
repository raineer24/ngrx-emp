import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';
import { AppTableComponent, AppDropdownComponent } from './components';

@NgModule({
  declarations: [
    AppTableComponent,
    AppDropdownComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    AppTableComponent,
    AppDropdownComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GlobalModule { }
