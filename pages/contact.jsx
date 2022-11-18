import React from 'react'
import {Text,Box,Center,Heading,Container,Button  } from '@chakra-ui/react';

 // contact page
function Contact() {



  return (
    <>
      <Box py={10} mb={5} bg={'#fcfcfc'} w={'full'}>
           <Center>
            <Heading className='specialization'
                     style={{color: 'lightgray'}}  >
              Contact Us
            </Heading>
          </Center>
       </Box>

       <Container>

         <Box pb={30} mt={10} >
          <form method="POST" action="https://formspree.io/f/xdojbbzo"> 

            <div className="row g-3">

              <div className="col-12 col-md-6">
                <input type="text" name="First Name" className="form-control" placeholder="First Name" aria-label="First Name"/>
              </div>

              <div className="col-12 col-md-6">
                <input type="text" name="Last Name" className="form-control" placeholder="Last Name" aria-label="Last Name"/>
              </div>

            </div><br />
          
              
              <div className="row g-3">

                <div className="col-12 col-md-6">
                  <input type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="Email"/>
                </div>

                <div className="col-12 col-md-6">
                   <input type="number" className="form-control" name="Phone" id="Phone" placeholder="+1 (___) __-___-___" aria-label="Phone"></input>
                </div>

              </div><br />

              <div className="g-3">
                <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
              </div><br />
          
         
                  <Button type='submit'
                    w={'full'}
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Submit
                  </Button>

                 <Center>
                    <Text mt={3}>
                      By submitting this form I give my consent for GuLa to process my personal data pursuant to GuLa
                     <a href="#" style={{color: 'gray'}}> Privacy and Cookies Policy</a>
                   </Text>  
                </Center>   
                 
           </form> 
         </Box>
       
      </Container>

      <Box style={{backgroundColor: '#fcfcfc'}} w={'full'} py={10}>
        <Center>
          <Heading className='specialization'
                   style={{color: 'lightgray'}}>
            Privacy
          </Heading>
        </Center>
        <Center>
          <Text mt={13} fontSize={20} className='breakpoint-text'>
            We respects your privacy and takes comprehensive measures to safeguard your personal and business information. We will not sell or lease your personal information to third parties unless we have your permission or are required by law to do so.
          </Text>
        </Center>
      </Box>

   <style>{`
     .title-top1{
      position:relative;
      left:50px!important;
      opacity:0;
     }
     .title-top2{
      position:relative;
      left:50px!important;
      opacity:0;
     }
     .title {
      position:relative;
      left:50px!important;
      opacity:0;
     }
     .box1 {
      position:relative;
      top:-50px!important;
      opacity:0;
     }
     .box2 {
      position:relative;
      top:-50px!important;
      opacity:0;
     }
     .box3 {
      position:relative;
      top:-50px!important;
      opacity:0;
     }
     .specialization, .lastWork {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
      }
      @media (max-width: 576px) { 
        .breakpoint-text {
           position: relative;
           width: 90%;
         }
       }
       @media (min-width: 768px) and (max-width: 1200px) { 
          .breakpoint-text {
           position: relative;
           width: 60%;
         }
       }
       @media (min-width: 1201px) { 
           .breakpoint-text {
           position: relative;
           width: 40%;
         }
        }
      
    `}</style>
    </>
  )
}

export default Contact