import { useState } from 'react';

const Counter = () => {
 const [counters, setCounters] = useState([0, 0, 0]);

  const incrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const decrementCounter = (index) => {
    const newCounters = [...counters];
    if (newCounters[index] > 0) {
      newCounters[index] -= 1;
    }
    setCounters(newCounters);
  };

  return { counters, incrementCounter, decrementCounter };
};

export default Counter