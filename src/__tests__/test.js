import calcTotal from '../calculate';

test('discr', () => {
  const rezult = 4;
  expect(rezult).toBe(4);
});

test('calc', () => {
  const list = [
    {
      id: 545,
      name: 'fsfs',
      count: 2,
      price: 200,
    },
    {
      id: 445,
      name: 'gkgk',
      count: 1,
      price: 1200,
    },
  ];
  const res = calcTotal(list);
  expect(res).toBe(1600);
});
