
import {
  Center,
  Container, Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  InputRightElement,
  Link,
  InputGroup,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { FaCheck } from "react-icons/fa";
import { toast } from 'react-toastify'
import { HiOutlinePencil } from "react-icons/hi2";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';




const Register = () => {

   const [email, setEmail ] = useState('')
   const [password, setPassword ] = useState('')
   const [confirm, setConfirm ] = useState('')
   const [validation, setValidation] = useState('')
   const [length, setLength] = useState('')
   const [showPassword, setShowPassword] = useState(false);



   const auth = getAuth(app);
   const router = useRouter()

 useEffect(()=> {
   
   if(password.length < 8 || password.length > 12 ){
      setLength('red')
   } else {
      setLength('green')
   }
  
   console.log(password, validation)
   if(validation !== password || password === '') {
     setConfirm('red')
   } else {
    setConfirm('green')
   }

 

 },[password, validation])  



const handleSubmit = (e) => {
  e.preventDefault()
 //let email = input.email.toLowerCase().trim();
console.log( email, password)

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)

    toast.success('Welcome')

    setTimeout(() => {
     router.push(`/`)
    },1000)
  })
  .catch((error) => {
    console.log(error)
    toast.error('Credentials not valid')
  });

}

  return (
   
    <>
    <Container h={'600px'}>

        <form  onSubmit={handleSubmit}>
        <Center mt={10}>
          <Flex>
           <Text ms={-20} fontSize={30} mt={2} me={4}><HiOutlinePencil/></Text>
           <Heading fontSize={'4xl'}> Sign Up</Heading>
          </Flex>
        </Center>


          {/*  EMAIL */}
           <div className="form-group mt-2">
            <label htmlFor='email' className='bold'>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control'/>
          </div> 


            {/*  PASSWORD */}
           <div className="form-group mt-3">
            <label className='bold'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)}            type='password' className='form-control'></input>
          </div>  

            {/*  CONFIRM */}
           <div className="form-group mt-3">
            <label className='bold'>Confirm</label>
            <input onChange={(e) => setValidation(e.target.value)}            type='password' className='form-control'></input>
          </div>  

         
          <div className='mt-3'>
           {/*  <p><b>Password are case-sensitive and must:</b></p> */}
            <p className='d-flex' style={{color:`${length}`}}>
                <span className='mt-1 me-2'>
                        <FaCheck/>
                </span> 
                Be 8 to 12 characters in length
            </p>
            <p className='d-flex' style={{color:`${confirm}`}}>
                <span className='mt-1 me-2'>
                        <FaCheck/>
                </span> 
                Confirmed
            </p>

          </div>
          
 
            {/* BUTTON */}
              <Button minHeight={35} mb={20}
                disabled={confirm === 'red' || password.length < 8 || password.length > 12}
                 w='full'
                bg={'blue.400'} color={'white'}
                mt={5} type='submit'
                _hover={{ bg: 'blue.500' }}>
                Sign Up
              </Button>
       
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
     
     .bold {
      font-weight: 500;
     }
    `}</style>
         
    </>
  )
}

export default Register