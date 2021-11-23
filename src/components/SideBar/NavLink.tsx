import { ElementType } from "react";
import { Link as ChakraLink, Icon, Text, LinkProps } from '@chakra-ui/react';
import Link from 'next/link';

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}
export function NavLink({ href, icon, children, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon  as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="mediun">{children}</Text>
      </ChakraLink>
    </Link>    
  );
}