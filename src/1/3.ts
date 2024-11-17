import { Observable, of } from 'rxjs';

// * Creating & running the observable
// const name$ = of('Alice', 'Ben', 'Charlie');

// name$.subscribe((value) => {
//   console.log(value);
// });

// * Simulate HTTP request with observable
// const storeDataOnServer = (data: string) => {
//   return new Observable((subscriber) => {
//     setTimeout(() => {
//       subscriber.next(`Saved successfully: ${data}`);
//       subscriber.complete();
//     }, 5000);
//   });
// };

// storeDataOnServer('Some value').subscribe((value) => console.log(value));

// * Simulate HTTP request error with observable
const storeDataOnServerError = (data: string): Observable<string> => {
  return new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.error(new Error('Failure!'));
    }, 5000);
  });
};

storeDataOnServerError('Some value').subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(`Error when saving: ${err.message}`),
});
