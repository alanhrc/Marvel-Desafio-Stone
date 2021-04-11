import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { ButtonSideBar } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  selected: boolean;
  icon: React.ComponentType<IconBaseProps>;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function ButtonsSideBar({
  title,
  selected,
  icon: Icon,
  ...rest
}: ButtonProps) {
  return (
    <ButtonSideBar
      type="button"
      {...(selected && { className: 'selected' })}
      {...rest}
    >
      <Icon color={selected ? '#c53030' : '#FBFBFB'} />
      {title}
    </ButtonSideBar>
  );
}
