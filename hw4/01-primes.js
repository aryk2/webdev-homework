const isPrime = (number) => {
  if ( number === 1 ) return false
  for ( let i = 2; i < number; i++ ) {
    if ( number % i === 0 ) {
      return false;
    }
  }
  return true
}

const getPrimes = () => {
  for ( let i = 1; i <= 100; i++ ) {
    if (isPrime(i)) {
      console.log(i)
    }
  }
};

getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...
