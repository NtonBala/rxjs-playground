import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.complete();
});

const observer = {
  next: (value: string) => console.log(value),
};

observable$.subscribe(observer);
