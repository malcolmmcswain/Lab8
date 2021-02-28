const formatVolumeIconPath = require('../assets/scripts/main');

describe('format volume icon path', () => {

    test('is formatted correctly for high volume', () => {
      expect(formatVolumeIconPath(67)).toContain('3');
    });
  
    test('is formatted correctly for medium volume', () => {
        expect(formatVolumeIconPath(34)).toContain('2');
    });

    test('is formatted correctly for low volume', () => {
        expect(formatVolumeIconPath(1)).toContain('1');
    });

    test('is formatted correctly for no volume', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
  });