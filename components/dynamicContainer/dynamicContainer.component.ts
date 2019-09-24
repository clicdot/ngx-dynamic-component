import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  exportAs: 'dynamicComponent',
  selector: 'dynamic-component',
  templateUrl: './dynamicContainer.component.html',
  styleUrls: ['./dynamicContainer.component.css']
})
export class DynamicContainerComponent implements OnInit, OnChanges {
  @Input()
  config: any = [];

  @Input()
  template: any;

  @Input()
  service: any;

  @Input()
  props: any;

  constructor() { }

  ngOnInit() {
    // console.log(this.template);
  }

  ngOnChanges() {

  }

}
