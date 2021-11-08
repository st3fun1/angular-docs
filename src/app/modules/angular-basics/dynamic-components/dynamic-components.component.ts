import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AppPlaceholderDirective } from './app-placeholder.directive';
import { AlertComponent } from './../../common/alert/alert.component';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.scss']
})
export class DynamicComponentsComponent implements OnInit {
  @ViewChild(AppPlaceholderDirective, { static: false }) alertHost!: AppPlaceholderDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  handleClick() {
    if (this.alertHost) {
      this.showErrorAlert('Test');
    }
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostViewContainerRef = this.alertHost.viewContainerRef;

    hostViewContainerRef.clear();

    hostViewContainerRef.createComponent(alertCmpFactory);
  }
}
