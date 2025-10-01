import { describe, it, expect } from 'vitest';
import { CHORD_DIAGRAMS } from '../src/ChordDiagrams';

describe('CHORD_DIAGRAMS', () => {
  it('has entries and each diagram has frets and fingers arrays', () => {
    const diagrams: any = (CHORD_DIAGRAMS as any) || {};
    expect(diagrams, 'CHORD_DIAGRAMS is not exported from src/ChordDiagrams').toBeDefined();
    const dkeys = Object.keys(diagrams);
    expect(dkeys.length).toBeGreaterThan(0);
    dkeys.forEach((k) => {
      const d = diagrams[k];
      expect(Array.isArray(d.frets)).toBe(true);
      expect(Array.isArray(d.fingers)).toBe(true);
      expect(d.frets.length).toBe(6);
      expect(d.fingers.length).toBe(6);
    });
  });
});
