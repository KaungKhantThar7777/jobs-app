import { NotAllowedIcon } from '@chakra-ui/icons';
import {
  Center,
  Heading,
  VStack,
} from '@chakra-ui/react';

export const NotFound = () => {
  return (
    <Center bg="whiteAlpha.200" h="96">
      <VStack>
        <NotAllowedIcon boxSize="32" />
        <Heading>Not Found</Heading>
      </VStack>
    </Center>
  );
};
