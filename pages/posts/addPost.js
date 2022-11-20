
import React,{ useState } from 'react'
import {
  Box,
  SimpleGrid,
  Menu,
  MenuButton,
  ModalOverlay,
  MenuList,
  Input,
  ModalContent,
  ModalFooter,
  Flex,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  Modal,
  IconButton,
  Tooltip ,
  AlertIcon,
  Spacer,
  Center,
  Alert,
  Text,
  MenuItem,
  Button,
  Link,
} from "@chakra-ui/react";
import api from '../../utils/config';
import { useRouter } from 'next/router';




const AddNewMongo = () => {

  const [car, setCar] = React.useState('')
  const [model, setModel] = React.useState('')
  const [color, setColor] = React.useState('')
  const [succesDel, setSuccessDel] = React.useState(false)
  const router = useRouter()

const createUser = async () => {
      const post = {
        car, 
        model,
        color    
      }
    console.log(post)

    try {   //  api/file name/index or file name
        await api.post("/users", post);
        console.log('success')
    } catch (error) {
        console.log('something wrong')
    }
  
    setSuccessDel(true)
    setTimeout(() => {
    setSuccessDel(false)
    router.push(`/posts`)
    },1000)
}


  return (
    <>
      <Center>
        <Text mt={10} fontSize={30}>
          Add new Car
        </Text>
      </Center>

      <Center>
            <Box shadow={"dark-lg"}
                 p={6} mt={15} w={350}
                 rounded='xl' mb={30}>
              <Input type='text' 
                value={car}  
                placeholder='Car'
                onChange={(e) => setCar(e.target.value)} />
           
              <Input type='text' 
                my={3}
                value={model}  
                placeholder='Model'
                onChange={(e) => setModel(e.target.value)} />
            
              <Input type='text' 
                value={color}  
                placeholder='Color'
                onChange={(e) => setColor(e.target.value)} />
               <Center>
                  <Button mt={6} w={200}
                        onClick={createUser}
                        crossorigin="anonymous"
                        disabled={car.length < 1 || 
                                  model.length < 1 || 
                                  color.length < 1}
                  >Add Car</Button>
                  <Link href='/posts'>
                     <Button mt={6} ms={5}>close</Button>
                  </Link>
               </Center>
            </Box>
           </Center>

           <Center>
            <Button mt={9}>
              <Link href={'/posts'}>
                Go Back
              </Link>
            </Button>
          </Center>


          {  // DELETE ALERT !!!
          succesDel === true ?  
        ( <Center>

              <Alert width={220} rounded='md' my={15} status='success'>
                <AlertIcon />
                  Successfully Added
              </Alert>
        </Center>) : null } 
    </>
  )
}

export default AddNewMongo
