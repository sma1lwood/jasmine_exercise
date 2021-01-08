
it('should calculate the monthly rate correctly', () => {
  // ...
  const values = { amount: 5000, years: 10, rate: 6.5 };

  expect(calculateMonthlyPayment(values)).toEqual(56.77)

});


it("should return a result with 2 decimal places", () => {
  // ..
  const values = { amount: 53912, years: 7, rate: 4.8 };

  expect(calculateMonthlyPayment(values)).toEqual(756.93)
});

afterEach( () => {
update();
values = "";
})

/// etc
