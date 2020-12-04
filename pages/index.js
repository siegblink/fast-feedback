import * as React from 'react';
import Head from 'next/head';
import { Button, Flex } from '@chakra-ui/react';
import { FastFeedbackIcon } from '@/styles/theme';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      w="full"
      minW="300px"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <FastFeedbackIcon color="black.500" boxSize="64px" />
      
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign out</Button>
      ) : (
        <Button
          mt={4}
          size="sm"
          onClick={(e) => auth.signinWithGitHub()}
        >
          Sign in
        </Button>
      )}
    </Flex>
  );
}
