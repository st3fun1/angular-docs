import { WithBoldTextDirective } from './with-bold-text.directive';

describe('WithBoldTextDirective', () => {
  it('should create an instance', () => {
    const directive = new WithBoldTextDirective({
      nativeElement: {}
    });
    expect(directive).toBeTruthy();
  });
});
