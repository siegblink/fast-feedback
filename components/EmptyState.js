import * as React from 'react';
import { Heading, Flex, Text } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal'

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
          You haven't added any sites.
        </Heading>
        <Text lineHeight={9} mb={4}>
          Let's get started.
        </Text>
        <AddSiteModal />
      </Flex>
    </DashboardShell>
  );
}
