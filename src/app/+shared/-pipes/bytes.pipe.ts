import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {
  private units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

  transform(bytes: number, decimal: number): string {
    if (bytes == 0) {
      return '0B';
    } else {
      let c = 1000,
        d = decimal || 2,
        e = this.units,
        f = Math.floor(Math.log(bytes) / Math.log(c));
      return parseFloat((bytes / Math.pow(c, f)).toFixed(d)) + e[f];
    }
  }
}
