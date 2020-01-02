const kinki = require('../../src/domain/kinki');

describe('kinki translator', () => {
  test('should alternate uppercase into the chars of the sentence by position', () => {
    const data = [
      {
        original: 'test sentence',
        expected: 'TeSt sEnTeNcE',
      },
      {
        original: '¡Vive Diós!',
        expected: '¡vIvE DiÓs!',
      },
      {
        original: 'El tiempo no es importante, sólo la vida es importante',
        expected: 'El tIeMpO No eS ImPoRtAnTe, SóLo lA ViDa eS ImPoRtAnTe',
      },
    ]

    data.forEach(item => {
      const { original, expected } = item;
      expect(kinki(original)).toBe(expected);
    });
  });
});
