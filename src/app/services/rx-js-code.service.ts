import { Injectable } from '@angular/core';
import { Rxjscodeexample } from '../modules/shared/interfaces/rxjscodeexample.enum';

@Injectable({
  providedIn: 'root',
})
export class RxJsCodeService {
  rxjsCodeList: { [key in Rxjscodeexample]: string } = {
    [Rxjscodeexample.OBSERVER]: `
    const observer = {
      next: apple => console.log(apple),
      error: err => console.log(err),
      complete: () => console.log("No more apples go home")
    }
   `,
    [Rxjscodeexample.OBSERVABLE_STREAM]: `
   const appleStream = new Observable(appleObserver => {
     appleObserver.next('Apple 1');
     appleObserver.next('Apple 2');
     appleObserver.complete();
   })
  `,
    [Rxjscodeexample.SUBSCRIPTION]: `
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
  `,
    [Rxjscodeexample.OPERATORS]: `
      // source observable
      of(2, 4, 6)
      .pipe(
        map(item => item * 2),
        tap(item => console.log(item)),
        take(2)
      ).subscribe(console.log);
    `,
    [Rxjscodeexample.SUBJECTS]: `
      subject$ = new ReplaySubject();

      ngOnInit() {
        this.subject$.next('1');
        this.subject$.next('2');

        // outputs: '1', '2'
        this.subject.subscribe(
          val => console.log(val);
        )

        this.subject$.next('3');

        // outputs: '1', '2', '3'
        this.subject.subscribe(
          val => console.log(val);
        )
      }
    `,
  };

  getCodeByKey(key: Rxjscodeexample): string {
    return this.rxjsCodeList[key];
  }
}
