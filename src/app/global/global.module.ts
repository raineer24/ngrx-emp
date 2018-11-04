import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppTableComponent } from './components';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [
    AppTableComponent
  ],
  imports: [
    MaterialModule,
  ],
  exports: [
    AppTableComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GlobalModule { }
