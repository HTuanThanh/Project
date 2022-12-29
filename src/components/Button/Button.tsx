import type { HTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';

import styles from './Button.module.css';

export type ButtonProps = {
  variant?: string;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, ...rest } = props;

  return (
    <button className={styles.root} {...rest}>
      {children}
    </button>
  );
};
