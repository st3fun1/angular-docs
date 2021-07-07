import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { RxJsCodeService } from '../../../services/rx-js-code.service';
import { PanelItem } from '../../shared/interfaces/panel-item';
import { Rxjscodeexample } from '../../shared/interfaces/rxjscodeexample.enum';

@Component({
  selector: 'app-rx-jsterms-and-syntax',
  templateUrl: './rx-jsterms-and-syntax.component.html',
  styleUrls: ['./rx-jsterms-and-syntax.component.scss']
})
export class RxJSTermsAndSyntaxComponent implements OnInit {
  response: HighlightResult = {};
  panelList: PanelItem[] = [
    {
      isOpen: true,
      title: 'Observer/Subscriber',
      key: Rxjscodeexample.OBSERVER
    },
    {
      isOpen: false,
      title: 'Observable stream',
      key: Rxjscodeexample.OBSERVABLE_STREAM
    },
    {
      isOpen: false,
      title: 'Subscription',
      key: Rxjscodeexample.SUBSCRIPTION
    },
    {
      isOpen: false,
      title: 'Stop a subscription',
      key: Rxjscodeexample.UNSUBSCRIBE
    },
    {
      isOpen: false,
      title: 'Creation Functions',
      key: Rxjscodeexample.CREATION_FN
    },
    {
      isOpen: false,
      title: 'RxJS Operators',
      key: Rxjscodeexample.OPERATORS
    }
  ];

  currentRxJsCode: string | null = null;

  constructor(private rxjsCodeService: RxJsCodeService) {}

  ngOnInit(): void {
    this.currentRxJsCode = this.rxjsCodeService.getCodeByKey(Rxjscodeexample.OBSERVER);
  }

  setPanelState(index: number, isOpen: boolean): void {
    this.panelList[index].isOpen = isOpen;
    if (this.panelList[index].isOpen) {
      this.currentRxJsCode = this.rxjsCodeService.getCodeByKey(this.panelList[index].key);
    }

    if (!this.panelList.find((panel) => panel.isOpen)) {
      this.currentRxJsCode = null;
    }
  }

  getExpandedPanel(index: number): PanelItem {
    return this.panelList[index];
  }

  onHighlight(e: HighlightResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    };
  }
}
