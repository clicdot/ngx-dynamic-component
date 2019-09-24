import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export class DynamicBuilder {

  public genComponent(template: string): any {

    console.log(this.replaceSlashes(template));

    @Component({
      template: this.replaceSlashes(template)
    })
    class DynamicComponent implements OnInit {
      public props: any;

      public svc: any;

      public conf: any;

      public test = {
        test: 1
      };

      ngOnInit() {
        console.log(this.props);
      }
    }

    @NgModule({
      imports: [
        CommonModule
      ],
      declarations: [DynamicComponent]
    })
    class DynamicModule {}

    return {
      DynamicComponent,
      DynamicModule
    };
  }

  private replaceSlashes(template: string) {
    return template.replace(/\\{/g, '{').replace(/\\}/g, '}');
  }
}
