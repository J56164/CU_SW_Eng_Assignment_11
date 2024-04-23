const { dayOfTheWeek, monthOfTheYear } = require('./app');

test('getDay returns the long-format day of the week', () => {
    expect(dayOfTheWeek(new Date('3/9/2020'))).toBe('Monday');
    expect(dayOfTheWeek(new Date('3/10/2020'))).toBe('Tuesday');
    expect(dayOfTheWeek(new Date('3/11/2020'))).toBe('Wednesday');
    expect(dayOfTheWeek(new Date('3/12/2020'))).toBe('Thursday');
    expect(dayOfTheWeek(new Date('3/13/2020'))).toBe('Friday');
    expect(dayOfTheWeek(new Date('3/14/2020'))).toBe('Saturday');
    expect(dayOfTheWeek(new Date('3/15/2020'))).toBe('Sunday');
});

test('getMonth returns the month of the year', () => {
    expect(monthOfTheYear(new Date('1/1/2020'))).toBe('January');
    expect(monthOfTheYear(new Date('2/1/2020'))).toBe('February');
    expect(monthOfTheYear(new Date('3/1/2020'))).toBe('March');
    expect(monthOfTheYear(new Date('4/1/2020'))).toBe('April');
    expect(monthOfTheYear(new Date('5/1/2020'))).toBe('May');
    expect(monthOfTheYear(new Date('6/1/2020'))).toBe('June');
    expect(monthOfTheYear(new Date('7/1/2020'))).toBe('July');
    expect(monthOfTheYear(new Date('8/1/2020'))).toBe('August');
    expect(monthOfTheYear(new Date('9/1/2020'))).toBe('September');
    expect(monthOfTheYear(new Date('10/1/2020'))).toBe('October');
    expect(monthOfTheYear(new Date('11/1/2020'))).toBe('November');
    expect(monthOfTheYear(new Date('12/1/2020'))).toBe('December');
});