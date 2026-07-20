import { expect, test } from 'vitest'
import { TestSet } from './TestSet';

test('a new set should start at 0-0', () => {
    expect(TestSet.NewSet().setsToDisplay()).toBe('0-0');
});
