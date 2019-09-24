import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDirective } from './directives/dynamic.directive';
import { DynamicContainerComponent } from './components/dynamicContainer/dynamicContainer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicContainerComponent,
    DynamicDirective,
  ],
  exports: [
    DynamicContainerComponent
  ]
})
export class DynamicModule { }
