import { BytesPipe } from './bytes.pipe';

describe('BytesPipe', () => {
  const bytePipe = new BytesPipe();

  it('should transform 1111 -> to 1.11KB', () => {
    expect(bytePipe.transform(1111)).toBe('1.11KB');
  });
  it('should transform 11111111 -> to 11.11MB', () => {
    expect(bytePipe.transform(11111111)).toBe('11.11MB');
  });
  it('should transform 1111111111 -> to 1.11GB', () => {
    expect(bytePipe.transform(1111111111)).toBe('1.11GB');
  });
});
