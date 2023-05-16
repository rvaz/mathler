import type { ReactNode } from 'react';

import React, { forwardRef } from 'react';
import { isIconValid } from '@utils/icons';

import { StyledButton, StyledIcon } from './Button.styles';

type ConditionalButtonProps =
  | {
      icon: string;
      label?: never;
    }
  | {
      icon?: never;
      label: string | ReactNode;
    }
  | {
      icon: string;
      label: string | ReactNode;
    };

export type SpecificButtonProps = {
  isDisabled?: boolean;
  iconAlignRight?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  title?: string;
  iconSize?: number;
};

export type ButtonProps = SpecificButtonProps & ConditionalButtonProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isDisabled,
      iconAlignRight,
      type = 'button',
      onClick,
      className,
      label,
      icon = '',
      iconSize,
      ...rest
    },
    ref,
  ) => {
    if (!label && icon && !isIconValid(icon)) return <></>;

    return (
      <StyledButton
        data-testid="button"
        ref={ref}
        type={type}
        className={className}
        disabled={isDisabled}
        iconAlignRight={iconAlignRight}
        onClick={isDisabled || !onClick ? undefined : onClick}
        {...rest}
      >
        <StyledIcon
          data-testid="buttonIcon"
          name={icon}
          size={iconSize}
          hasLabel={!!label}
          iconAlignRight={iconAlignRight}
        />
        {label && <span>{label}</span>}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export default Button;
