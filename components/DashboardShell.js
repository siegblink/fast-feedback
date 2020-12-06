import * as React from 'react';
import { Flex, Stack, Link, Avatar, Heading } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { FastFeedbackIcon } from '@/styles/theme';
import { useAuth } from '@/lib/auth';

export default function DashboardShell({ children }) {
  const auth = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        backgroundColor="white"
        alignItems="center"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline alignItems="center">
          <FastFeedbackIcon color="black.500" boxSize="32px" />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Stack spacing={4} isInline alignItems="center">
          <Link>Account</Link>
          <Avatar size="sm" src={auth.user.photoUrl} />
        </Stack>
      </Flex>
      <Flex
        backgroundColor="gray.100"
        p={8}
        height="100vh"
        borderRadius="lg"
        boxShadow="sm"
      >
        <Flex
          w="100%"
          maxWidth={800}
          ml="auto"
          mr="auto"
          flexDirection="column"
        >
          <Breadcrumb>
            <BreadcrumbItem color="gray.500">
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
