/*
  const arr3 = [
    ['@', '@'],
    ['@', '|'],
    ['—', '|'],
    ['@', '|'],
    ['@', '@'],
  ];

  const arr3Enlarged = [
    ['@', '@', '@', '@'],
    ['@', '@', '@', '@'],
    ['@', '@', '|', '|'],
    ['@', '@', '|', '|'],
    ['—', '—', '|', '|'],
    ['—', '—', '|', '|'],
    ['@', '@', '|', '|'],
    ['@', '@', '|', '|'],
    ['@', '@', '@', '@'],
    ['@', '@', '@', '@'],
  ];

  const arr4 = [
    ['x'],
  ];

  const arr4Enlarged = [
    ['x', 'x'],
    ['x', 'x'],
  ];
 */

/*
TUTOR SAMPLE:
const duplicateValues = (items) => items.flatMap((item) => [item, item]);

const enlargeArrayImage = (items) => {
  const horizontallyStretched = items.map(duplicateValues);
  return duplicateValues(horizontallyStretched);
};

export default enlargeArrayImage;
 */

const doubleVal = (val) => [val, val];

const enlargeArrayImage = (image) => (
    image
        .map((val) => val.flatMap(doubleVal))
        .flatMap(doubleVal)
);

export default enlargeArrayImage;
