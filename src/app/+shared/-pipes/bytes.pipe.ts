import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {
  private units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

  transform(bytes: number): string {
    if (bytes == 0) {
      return '0B';
    } else {
      let c = 1000,
        u = this.units,
        f = Math.floor(Math.log(bytes) / Math.log(c));

      return parseFloat((bytes / Math.pow(c, f)).toFixed(2)) + u[f];
    }
  }
}
