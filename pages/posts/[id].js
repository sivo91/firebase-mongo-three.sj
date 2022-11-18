
import React from 'react'
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
import { useRouter } from 'next/router'
import axios from 'axios'
import domain from '../../utils/config'




const Details = ({ user }) => {

  const [title, setTitle] = React.useState(user.title)
  const [imageurl, setImageurl] = React.useState(user.imageurl)
  const [description, setDescription] = React.useState(user.description)
  const [succesDel, setSuccessDel] = React.useState(false)
  
  const router = useRouter()
  console.log(user)


  async function updateUser () {
   
     const updateCard = {title, description, imageurl}
     try {
      await axios.put(`${domain}/users/${user._id}`, updateCard)
      setSuccessDel(true)
      setTimeout(() => {
      setSuccessDel(false)
      }, 3000);
     } catch (error) {
      console.log(error)
     }
  }

  return (
     <>
      <Center>
        <Text mt={10} fontSize={30}>
          Update
        </Text>
      </Center>

      <Center>
            <Box shadow={"dark-lg"}
                 p={6} mt={15} w={350}
                 rounded='xl' mb={30}>
              <Input type='text' 
                value={title}  
                placeholder='title'
                onChange={(e) => setTitle(e.target.value)} />
           
              <Input type='text' 
                my={3}
                value={imageurl}  
                placeholder='imageurl'
                onChange={(e) => setImageurl(e.target.value)} />
            
              <Input type='text' 
                value={description}  
                placeholder='description'
                onChange={(e) => setDescription(e.target.value)} />
               <Center>
                  <Button mt={6} w={200}
                        onClick={updateUser}
                        disabled={title.length < 1 || 
                                  imageurl.length < 1 || 
                                  description.length < 1}
                  >Update</Button>
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
                  Successfully Updated
              </Alert>
        </Center>) : null } 
    </>
  )
}


export async function getServerSideProps(context) {

      try {
        const res = await axios.get(`${domain}/users/${context.query.id}`)

        return {
          props: {
            user : res.data
          }
        }
      } catch (error) {
        console.log(error)
      }
}




export default Details

