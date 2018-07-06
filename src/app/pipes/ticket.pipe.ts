import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticket'
})
export class TicketPipe implements PipeTransform {
  transform(value: string) {
    let texto = value;
    let ticket = `TCK00-${texto}`;
    return ticket;
  }
}
