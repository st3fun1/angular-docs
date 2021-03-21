import { Injectable } from '@angular/core';
import { Rxjscodeexample } from './rxjscodeexample.enum';

@Injectable({
  providedIn: 'root'
})
export class RxJsCodeService {
  rxjsCodeList: {[key in Rxjscodeexample]: string} = {
    [Rxjscodeexample.OBSERVER]: ` 
    const observer = {
      next: apple => console.log(apple),
      error: err => console.log(err),
      complete: () => console.log("No more apples go home")
    }
   `,
   [Rxjscodeexample.OBSERVABLE_STREAM]:`
   const appleStream = new Observable(appleObserver => {
     appleObserver.next('Apple 1');
     appleObserver.next('Apple 2');
     appleObserver.complete();
   })
  `,
  [Rxjscodeexample.SUBSCRIPTION]:`
    const observer = {
      next: apple => console.log(apple),
      error: err => console.log(err),
      complete: () => console.log("No more apples go home")
    }

    const appleStream = new Observable(appleObserver => {
      appleObserver.next('Apple 1');
      appleObserver.next('Apple 2');
      appleObserver.complete();
    })

    // const sub = appleStream.subscribe(observer);

    const sub = appleStream.subscribe(
      apple => console.log(apple),
      err => console.log(err),
      () => console.log("No more apples go home")
    );
  `,
  [Rxjscodeexample.UNSUBSCRIBE]: `
      const sub = appleStream.subscribe(observer);

      sub.unsubscribe();
  `,
  [Rxjscodeexample.CREATION_FN]: `
      // 2 streams
      const appleStream = of('Apple1', 'Apple2');

      const appleStream = from(['Apple1', 'Apple2']);

      const apples = ['Apple1', 'Apple2'];

      of(apples);
      // [Apple1, Appple2]

      from (apples);
      // Apple1 Apple2

      of(...apples);
      // Apple1 Apple2

      // fromEvent
      @ViewChild('para') par: ElementRef;

      ngAfterViewInit() {
        const parStream  = fromEvent(this.par.nativeElement, 'click').subscribe(console.log);
      }

      // interval
      const num = interval(1000).subscribe(console.log);
  `
  }

  getCodeByKey(key: Rxjscodeexample): string{
    return this.rxjsCodeList[key];
  }
}
