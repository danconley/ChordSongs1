import { describe, it, expect } from 'vitest';
import { SONGS } from '../lib/songs';

describe('SONGS data shape', () => {
  it('should export an array with required fields', () => {
    expect(Array.isArray(SONGS)).toBe(true);
    SONGS.forEach((s) => {
      expect(typeof s.id).toBe('number');
      expect(typeof s.title).toBe('string');
      expect(Array.isArray(s.chords)).toBe(true);
    });
  });
});
