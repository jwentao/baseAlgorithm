import revertByWorld from '../../code/string/stringReverse';

test('revertByWorld', () => {
    expect(revertByWorld('Let"s take leetCode')).toBe('s"teL ekat edoCteel');
});