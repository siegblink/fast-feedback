import * as React from 'react';
import { Heading, Flex, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

export default function EmptyState() {
  return (
    <DashboardShell>
      <Flex
        p={16}
        width="100%"
        backgroundColor="white"
        borderRadius="lg"
        mt={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        boxShadow="sm"
      >
        <Heading size="lg" mb={2}>
          Get feedback on your site instantly.
        </Heading>
        <Text lineHeight={9} mb={4}>
          Start today, the grow with us 🌱
        </Text>
        <Button variant="solid" size="lg">
          Upgrade to Starter
        </Button>
      </Flex>
    </DashboardShell>
  );
}
