import React from 'react';
import { Text } from '@mantine/core';
import { DemoArea, DemoAreaProps } from '../DemoArea';
import classes from './DemoColumns.module.css';

export interface DemoColumnsProps extends DemoAreaProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  controls: React.ReactNode;
}

export function DemoColumns({
  children,
  withPadding,
  centered,
  maxWidth,
  title,
  description,
  controls,
}: DemoColumnsProps) {
  return (
    <div className={classes.columns}>
      <DemoArea withPadding={withPadding} maxWidth={maxWidth} centered={centered}>
        {children}
      </DemoArea>

      <div className={classes.controls}>
        {title && (
          <div className={classes.header}>
            <Text fw={500} fz="sm" mb={5}>
              {title}
            </Text>
            {description && (
              <Text c="dimmed" fz={11} lh={1.45}>
                {description}
              </Text>
            )}
          </div>
        )}

        {controls}
      </div>
    </div>
  );
}