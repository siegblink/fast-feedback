import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';
import { ModalHeader, ModalFooter, ModalBody } from '@chakra-ui/react';
import { ModalCloseButton, Button, Input, FormControl } from '@chakra-ui/react';
import { FormLabel, useDisclosure } from '@chakra-ui/react';
import { createSite } from '@/lib/db';

export default function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const { register, handleSubmit } = useForm();

  const onCreateSite = (data) => {
    console.log(data);
    createSite(data);
  };

  return (
    <React.Fragment>
      <Button variant="solid" size="lg" onClick={onOpen} boxShadow="md">
        Add your first site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My site"
                name="site"
                ref={register({ required: true })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                name="url"
                ref={register({ required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button backgroundColor="#99FFEE" color="#194D4C" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
}
