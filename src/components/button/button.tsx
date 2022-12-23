import {
  ButtonProps,
  Button as ChakraButton,
} from '@chakra-ui/react';
import {
  PropsWithChildren,
  MouseEventHandler,
} from 'react';

const variants = {
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    _hover: {
      opacity: 0.9,
    },
  },
  outline: {
    variant: 'outline',
    bg: 'white',
    color: 'primary',
  },
  ghost: {
    variant: 'ghost',
  },
};
export type CustomButtonProps = Omit<
  ButtonProps,
  'variant'
> &
  PropsWithChildren & {
    type?: 'button' | 'submit' | 'reset';
    variant?: keyof typeof variants;
    isLoading?: boolean;
    isDisabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    icon?: JSX.Element;
  };
export const Button = ({
  variant = 'solid',
  type = 'button',
  children,
  icon,
  ...props
}: CustomButtonProps) => {
  return (
    <ChakraButton
      {...props}
      {...variants[variant]}
      type={type}
      leftIcon={icon}
    >
      {children}
    </ChakraButton>
  );
};
