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
  Button, } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import Link from 'next/link'
import api from '../../utils/config'
import {  FaMarker,FaAlignJustify } from "react-icons/fa";
import Image from 'next/image'
import { useRouter } from 'next/router'
import { preProcessFile } from 'typescript';



const Mongo = () => {
  
  //console.log(users)
  const [users, setUsers] = React.useState([])
  const [car, setCar] = React.useState('')
  const [model, setModel] = React.useState('')
  const [color, setColor] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [referenceID, setReferenceId] = React.useState('')
  const router = useRouter()


  // GET DATA FROM MONGO
useEffect(() => {
    [
      api.get("/users").then(({ data }) => {
        setUsers(data.data);
      }),
    ];

    return 
  }, [users]);


  // UPDATE = SHOW MODAL TO INSERT NEW DATA
  const updateModal = (docId) => {
    setReferenceId(docId)
    onOpen() 
  }

 // UPDATE DATA = SEND REQUEST
  const handleUpdate = async () => {
    
    const updateData = {car, model, color} 
    console.log(referenceID)

     try {   
         await api.put(`/users/${referenceID}`, updateData);
        console.log('success')
    } catch (error) {
        console.log('something wrong')
    } 
     onClose()
 }


 // DELETE CARD
  async function deleteUser (docId) {
    console.log(docId)
  
    try {
    
      await api.delete(`/users/${docId}`);
       console.log('success')
    } catch (error) {
       console.log(error.response)
    }
  }


  return (
    <>

     <Center>
         <Text mt={9} style={{color: 'green'}}
            fontSize={30}>
              MongoDB Database
      </Text>
      <Box mt={9} ms={3}>
          <Image
          mt={9}
          src="/mongodb.png"
          alt="img"
          width={70}
          height={60} /> 
      </Box>
     </Center>

   {/* ADD USER */}
    <Center>
      <Button>
        <Link href={'/posts/addPost'}>
          Add New Car
        </Link>
      </Button>
    </Center>

  
    

    <SimpleGrid columns={{ base: 1, md: 3 }} p={20}  mb={20} spacing={8}>  
     
        {users &&
          users.map((user) => (
               
              <Box
                key={user._id}
                p={1}
                boxShadow="2xl"
                rounded='md'
                padding={3}
                shadow={"dark-lg"}
                transition="0.2s"
                _hover={{ boxShadow: "sm" }}
              > 
              <Flex>

                <Box>
                 
                    <Text mt={3}>
                       <span style={{fontWeight: 'bold'}}>Car: </span>
                          {user.car}
                    </Text>   
                    <Text>
                      <span style={{fontWeight: 'bold'}}>Model: </span>  
                         {user.model}
                    </Text> 
                    <Text>
                      <span style={{fontWeight: 'bold'}}>Color: </span>  
                      {user.color}
                    </Text> 
                    
                 
                </Box> 
                 <Spacer /> 

                 {/*  UPDATE USER */}
                 <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Update Car</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
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

                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme='blue' mr={3}
                         onClick={() => handleUpdate()}
                          disabled={ car.length < 1 || 
                                    model.length < 1 || 
                                    color.length < 1 }>
                              Update
                        </Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>


                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label='Options'
                      icon={<FaAlignJustify />}
                      variant='outline'
                    />
                    <MenuList>

                 <MenuItem onClick={()=> {router.push('/posts/addPost')} } 
                        icon={<FaMarker />} command='⌘N'>
                         AddNew
                      </MenuItem>

                      <MenuItem onClick={()=> updateModal(user._id)} 
                        icon={<FaMarker />} command='⌘N'>
                         Update
                      </MenuItem>

                      <MenuItem crossorigin="anonymous" onClick={()=> deleteUser(user._id)} 
                        icon={<FaMarker />} command='⌘N'>
                         Delete
                      </MenuItem>

                    </MenuList>
                  </Menu>
                </Flex>

              </Box>
             

          ))}
      </SimpleGrid>

    </>
  )
}


export default Mongo