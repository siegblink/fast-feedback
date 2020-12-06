import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';

function Loading() {
  return (
    <Flex
      height="100vh"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor="gray.100"
    >
      <RepeatIcon mt={100} boxSize={6} />
      <Heading>Loading components</Heading>
    </Flex>
  );
}

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
    return <Loading />;
  }

  return <EmptyState />;
}
