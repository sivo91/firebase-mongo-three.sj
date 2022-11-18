import {
  Box,
  Flex,
  Avatar,
  Button,
  Text,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  Image,
  MenuItem,
  keyframes ,
  HStack,
  MenuDivider,
  SimpleGrid,
  useDisclosure,
  Stack,
  Center,
} from '@chakra-ui/react';

import Link from 'next/link'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";



export default function Auth() {

  const { isOpen, onOpen, onClose } = useDisclosure();
   const { isLoggedIn, user } = useAuth();

  const size = '96px';
  const color = '#858585';
  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

//console.log(user)
  return (
    <>

    {!isLoggedIn && (
    <>
      <Box style={{backgroundColor: '#d9d9d9'}} px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          
        

          <Link href={'/'}>
                <Text fontSize={24}>Mongo DB</Text>
          </Link>

              
          
          
           <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>

              <Link href="/about" >
                    <Text fontSize={24}  ms={3}>About</Text>
              </Link>
            
              <Link href="/contact" >
                    <Text fontSize={24}  ms={3}>Contact</Text>
              </Link>

           </HStack>

          

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
 
                   <MenuDivider />
                     <Center fontSize='18'
                            cursor='pointer' >
                        <Link href='/register'>
                          Sign Up
                        </Link>
                  </Center> 
                  <MenuDivider />
                   <Center  fontSize='18'
                            cursor='pointer' >
                        <Link href='/login'>
                          Log In
                        </Link>
                  </Center>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>

          {/* navbar na small size */}
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                <br/>

                <Link href="/about" >
                    <Text fontSize={24}  ms={3}>About</Text>
              </Link>
              
              <Link href="/contact" >
                    <Text fontSize={24}  ms={3}>Contact</Text>
              </Link>

              </Stack>
            </Box>
          ) : null}
      </Box>
      
      </>
      
     )}

  
     {isLoggedIn && (
      <>
        <Box style={{backgroundColor: '#d9d9d9'}} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            /> 
            
            <Link href={'/'}>
                <Text fontSize={24}>Mongo DB</Text>
            </Link>
          
            <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>

              <Link href="/about" >
                    <Text fontSize={24}  ms={3}>About</Text>
              </Link>
              <Link href="/three" >
                    <Text fontSize={24}  ms={3}>Three.js</Text>
              </Link>
                <Link href="/posts" >
                    <Text fontSize={24}  ms={3}>MongoDB</Text>
              </Link>
              <Link href="/contact" >
                    <Text fontSize={24}  ms={3}>Contact</Text>
              </Link>

            </HStack>

            <Flex alignItems={'center'}>
              <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      width={50}
                      height={30}
                      size={'sm'}
                      src={user.photoURL} /> 
                    
                      
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />

                    <Flex
                          justifyContent="center"
                          alignItems="center"
                          h="216px"
                          w="full"
                          overflow="hidden">
                          {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
                          <Box
                            as="div"
                            position="relative"
                            w={size}
                            h={size}
                            _before={{
                              content: "''",
                              position: 'relative',
                              display: 'block',
                              width: '300%',
                              height: '300%',
                              boxSizing: 'border-box',
                              marginLeft: '-100%',
                              marginTop: '-100%',
                              borderRadius: '50%',
                              bgColor: color,
                              animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                            }}>
                            <Avatar
                                size="full"
                                position="absolute"
                                top={0}
                                src={user.photoURL}
                              />
                          </Box>
                     </Flex>

                   
                    <Center>
                      <p>
                        {user.displayName}
                      </p>
                    </Center>
                    <Center >
                      <p>{user.email}</p>
                    </Center>
                    <MenuDivider />
                     <Link href={'/'}>
                      <Center fontSize={20} 
                              color='red' 
                              cursor='pointer'
                              onClick={() => auth.signOut()}>
                                Logout
                      </Center>
                     </Link> 
                  </MenuList>
                </Menu>
            </Flex>
          </Flex>

        {/* navbar na small size */}
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                <br/>

                <Link href="/about" >
                    <Text fontSize={24}  ms={3}>About</Text>
              </Link>
               <Link href="/three" >
                    <Text fontSize={24}  ms={3}>Three.js</Text>
              </Link>
               <Link href="/posts" >
                    <Text fontSize={24}  ms={3}>MongoDB</Text>
              </Link>
             
              <Link href="/contact" >
                    <Text fontSize={24}  ms={3}>Contact</Text>
              </Link>

              </Stack>
            </Box>
          ) : null} 
        </Box>

      </>
      
     )}


     <style jsx>{`
     
       .landingImage {
        height:300px,
        background-image:url('todo.jpg')
       }
      
      
     `}</style>

     
    </>
  );
}