import React from 'react';
import { Slider } from './Slider/Slider';

export default { title: 'Slider' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Slider defaultValue={45} />
      <Slider defaultValue={45} inverted mt="xl" />
    </div>
  );
}