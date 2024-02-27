import { getRgb, rgbToHex } from '../../Screens/ColorGenarator/ColorUtils';

describe('getRgb', () => {
  test('returns a number between 0 and 255', () => {
    const value = getRgb();
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(255);
  });
});

describe('rgbToHex', () => {
  test('converts RGB values to HEX format', () => {
    const hexColor = rgbToHex(255, 0, 0); // Red color
    expect(hexColor).toBe('#ff0000');
  });

  test('handles single-digit RGB values', () => {
    const hexColor = rgbToHex(15, 15, 15); // RGB(15, 15, 15) = #0f0f0f
    expect(hexColor).toBe('#0f0f0f');
  });
});
