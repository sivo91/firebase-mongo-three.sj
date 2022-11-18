import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {  sendPasswordResetEmail, getAuth } from "firebase/auth";
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';




export default function SimpleCard() { 

const [email, setEmail] = useState('')
const router = useRouter()


async function resetPswrd (e) {
  e.preventDefault()

 console.log('reset pas')

const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log('hola reset')
    toast.success('Please check your email!')

    setTimeout(() => {
     router.push(`/login`)
    },1000)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error('Invalid email address !')
  });

}



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>Forgot Password</Heading>
          <Text>Provide email address to send link to reset password.</Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>

            <FormControl id="email">
              <FormLabel >Email address</FormLabel>
              <Input type="email" onChange={e => setEmail(e.target.value)} />
            </FormControl>
           
            <Stack spacing={10}>
              <Button
                /* type='submit' */
                onClick={resetPswrd}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Send
              </Button>
            </Stack>

          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}