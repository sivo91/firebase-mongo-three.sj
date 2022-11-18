
 import {
  Center,
  Box,
  Flex,
  InputGroup,
  FormControl,
  FormLabel,
  Input,
  HStack,
  InputRightElement,
  Stack,
  useColorModeValue,
  Container,
  Button,
  Heading,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast, useToast } from 'react-toastify'
import { RiLoginBoxLine } from "react-icons/ri";
import { FcGoogle } from 'react-icons/fc';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';



const Login = () => {

   const [email, setEmail ] = useState('')
   const [password, setPassword ] = useState('')
   const auth = getAuth(app);
   const router = useRouter()
   const [showPassword, setShowPassword] = useState(false);


  const handleAuth = async () => {
   
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...

        toast.success('welcome')

        setTimeout(() => {
         router.push(`/`)
        },2000)

       
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
         toast.error('Credential not valid')  
      });
      
     
  }; 


  const handleSubmit = (e) => {
  e.preventDefault()
 //let email = input.email.toLowerCase().trim();
console.log( email, password)

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    toast.success('Welcome')
    
     setTimeout(() => {
         router.push(`/`)
        },2000)

  })
  .catch((error) => {
    console.log(error)
    toast.error('Credential not valid')
  });
  }


  return (
    <>
      <Container h={'600px'}>
        <form  onSubmit={handleSubmit}>
         
           <Center mt={10}>
            <Flex>
             <Text ms={-20} fontSize={30} mt={2} me={4}><RiLoginBoxLine/></Text>
            <Heading fontSize={'3xl'}> Log In</Heading>
            </Flex>
          </Center>

           {/* Google */}
        <Button w={'full'} mt={5} minHeight={35} variant={'outline'}
                onClick={() => handleAuth()}
                leftIcon={<FcGoogle />}>
          <Center>
            <Text>Log In with Google</Text>
          </Center>
        </Button>

      
            
          <Center>
            <Text mt={2} fontSize={15}>or use email and password</Text>  
          </Center>  


          {/*  EMAIL */}
          {/* <div className="form-group mt-4">
            <label htmlFor='email' className="text-muted">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control'/>
          </div> */}


            {/*  PASSWORD */}
         {/*  <div className="form-group mt-3">
            <label className="text-muted">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' className='form-control'/>
          </div> */}
          
           


           <FormControl id="email" mt={7} >
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            
            <Flex justifyContent={'space-between'}>

              <p className='mt-3'>Don&apos;t have an account? <Link href='/register' style={{color: 'blue'}}>Register</Link></p>

              <Link href={'/forgotPassword'}>
                <Text color={'blue'} mt={4} >Forgot password?</Text>
              </Link>
            </Flex>
            

           {/* BUTTON */}
              <Button minHeight={35} mb={20}
              w='full'
                disabled={email === '' || password === ''}
                bg={'blue.400'} color={'white'}
                mt={5} 
                type='submit'
                _hover={{ bg: 'blue.500' }}>
                Log In
              </Button>

              
            {/* BUTTON */}
          {/* <button className='btn btn-outline-primary mt-3 vstack mx-auto'
               type='submit'>
                    Login
          </button> */}

       </form>
      </Container>
    
    <style>{`
      form {
        position:relative;
        margin-top:30px;
        box-shadow: 1px 1px 25px gray;
        padding: 10px 20px;
        border-radius:5px;
      }
    `}</style>

     
    </>
  )
}  

 export default Login 