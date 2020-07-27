import Total from './Total';

test('Correctly Add up the total.', () => {
  const selected = {
    Processor: {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    'Operating System': {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    'Video Card': {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    Display: {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    }
  };
  console.log(Total(selected));
  expect(Total(selected)).toBe(3550.98);
});
