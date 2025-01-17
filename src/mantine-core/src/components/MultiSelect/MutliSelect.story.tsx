import React, { useState } from 'react';
import { MultiSelect } from './MultiSelect';
import { Button } from '../Button';

export default { title: 'MultiSelect' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        placeholder="MultiSelect something"
        data={[
          { value: '1', label: 'React' },
          { value: '2', label: 'Angular' },
          { value: '3', label: 'Svelte' },
        ]}
      />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string[]>(['React']);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        value={value}
        onChange={setValue}
        label="Test"
        placeholder="Test autocomplete"
        data={['React', 'Angular', 'Svelte']}
      />
      <Button onClick={() => setValue(['angular'])}>Angular</Button>
      <Button onClick={() => setValue([])}>Empty</Button>
    </div>
  );
}

export function HidePickedOptions() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        data={[
          { value: 'test 1', label: 'React lib' },
          { value: 'test 2', label: 'Angular lib' },
          { value: 'test 3', label: 'Svelte lib' },
        ]}
        placeholder="MultiSelect something"
        hidePickedOptions
      />
    </div>
  );
}

export function Searchable() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        data={['React', 'Angular', 'Svelte']}
        placeholder="MultiSelect something"
        searchable
        nothingFoundMessage="Nothing found..."
      />
    </div>
  );
}

export function SearchableHidePicked() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        data={['React', 'Angular', 'Svelte']}
        placeholder="MultiSelect something"
        searchable
        hidePickedOptions
        nothingFoundMessage="Nothing found..."
      />
    </div>
  );
}
