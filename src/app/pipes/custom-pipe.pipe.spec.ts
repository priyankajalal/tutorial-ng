import { CustomSizePipe } from './custom-pipe.pipe';

describe('CustomSizePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomSizePipe();
    expect(pipe).toBeTruthy();
  });
});
