import {
  Heading,
  VStack,
  Text,
  HStack,
  Box,
} from '@chakra-ui/react';

import { Content } from '@/components/content';

import { Job } from '../../types';

export const DashboardJobInfo = ({
  job,
}: {
  job: Job;
}) => {
  return (
    <VStack>
      <VStack>
        <Heading size="2xl">{job.position}</Heading>
        <HStack>
          <Text>{job.department}</Text>
          <Text>{job.location}</Text>
        </HStack>
      </VStack>
      <Box w="full">
        <Content>{job.info}</Content>
      </Box>
    </VStack>
  );
};
