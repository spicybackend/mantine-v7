import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { ColorSwatch, CheckIcon } from '@mantine/core';

const code = `
import { useState } from 'react';
import { ColorSwatch, CheckIcon } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: '0.8rem', height: '0.8rem' }} />}
    </ColorSwatch>
  );
}
`;

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      c="white"
      style={{ cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: '0.8rem', height: '0.8rem' }} />}
    </ColorSwatch>
  );
}

export const component: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
