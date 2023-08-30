import { FC, ButtonHTMLAttributes } from 'react';
import { Button } from '@mui/material';
import styles from './button.module.scss';

export enum BUTTON_TYPE_CLASSES {
  base = 'BaseButton',
  google = 'GoogleSignInButton',
  inverted = 'InvertedButton',
}

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CommonButton: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading
}) => {
  return (
    <Button className={styles[`${buttonType}`]}>
      {isLoading ? <div className={styles.ButtonSpinner} /> : children}
    </Button>
  );
};

export default CommonButton;