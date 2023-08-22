import { FC, ButtonHTMLAttributes } from 'react';
import { Button } from '@mui/material';
import styles from './button.module.scss';

export enum BUTTON_TYPE_CLASSES {
  base = 'BaseButton',
  google = 'GoogleSignInButton',
  inverted = 'InvertedButton',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof styles.BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: styles.BaseButton,
    [BUTTON_TYPE_CLASSES.google]: styles.GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: styles.InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CommonButton: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <Button className={buttonType}>
      {isLoading ? <div className={styles.ButtonSpinner} /> : children}
    </Button>
  );
};

export default CommonButton;