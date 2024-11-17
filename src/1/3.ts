import { of } from 'rxjs';

const name$ = of('Alice', 'Ben', 'Charlie');

name$.subscribe((value) => {
  console.log(value);
});
