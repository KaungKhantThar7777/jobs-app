import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

const variants = {
  link: {
    variant: 'link',
    color: 'primary',
  },
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
    color: 'primary',
    bg: 'white',
  },
};

export type LinkProps = {
  href: string;
  variant?: keyof typeof variants;
  icon?: JSX.Element;
  shallow?: boolean;
};

export const Link = ({
  href,
  children,
  icon,
  shallow = false,
  variant = 'link',
}: PropsWithChildren<LinkProps>) => {
  return (
    <NextLink shallow={shallow} href={href} passHref>
      <Button leftIcon={icon} {...variants[variant]}>
        {children}
      </Button>
    </NextLink>
  );
};
