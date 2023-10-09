import { Box, Divider, Flex, Heading ,Stack,HStack,Button,Circle,Text,Image,Grid, Modal, ModalOverlay, ModalContent, useDisclosure, ModalHeader} from '@chakra-ui/react'

import React ,{useEffect,useState,useContext}from 'react'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom"

const Profile = () => {
 const {id}=useParams()
    const [data,setData]=useState({})
   const [user,setUser]=useState([])
   const { isOpen, onOpen, onClose } = useDisclosure()
    const [change,setChange]=useState(false)
    const handleChange=(id)=>{
      setChange(true)
    }
    const fetchData=()=>{
        fetch(`https://panorbit.in/api/users.json`)
        .then((response) => response.json()) // Parse the response JSON
  
        .then((data) =>{
            const datafind=data.users.find((item)=>item.id==id)
            setUser(data.users)
            setData(datafind)
        }) // Update the state with the fetched data
        .catch((error) => console.error(error));
    }
    useEffect(()=>{
     fetchData()
    },[])
  

    const companyInfo = data.company || {};
    const addressInfo = data.address || {};
  
  return (
    <>
    <Box style={{display:'flex',flexDirection:'column'}}>
        <Box style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'2%',width:'100%',alignItems:'center'}}>
            <Box><b><h1 style={{fontFamily:'sans-serif',fontSize:'25px'}}>Profile</h1></b></Box>
            <Box onClick={onOpen} style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}>
                <img src={data.profilepicture} style={{width:'40px',borderRadius:'50%'}} alt="" />
                 <p>{data.name}</p>
                 <Modal isOpen={isOpen} onClose={onClose} placement="bottom-end">
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
    <img src={data.profilepicture} style={{width:'70px',borderRadius:'50%'}} alt="" />
                 <p>{data.name}</p>
                 <p>{data.email}</p>
    </ModalHeader>
    {user.slice(1, 3).map((el) => (
      <>
        <img src={el.profilepicture} style={{ width: '40px', borderRadius: '50%' }} alt="" />
        <p>{el.name}</p>
      </>
    ))}
  </ModalContent>
</Modal>
            </Box>
        </Box>
        <hr/>
        <Box style={{padding:'2%',display:'flex',flexDirection:'row'}}>
            <Box w={'50%'} style={{alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <img src={data.profilepicture} style={{width:'180px',borderRadius:'50%'}} alt="" />
            <b><h1>{data.name}</h1></b>
            <h1>Username : <b>{data.username}</b></h1>
            <h1>e-mail : <b>{data.email}</b></h1>
            <h1>Phone: <b>{data.phone}</b></h1>
            <h1>Website : <b>{data.website}</b></h1>
            <br/>
            <Divider style={{color:'gray',width:'80%',marginBottom:'1%'}}/>
           
            <h1>Company</h1>
            <br/>
          
            <h1>Name: <b>{companyInfo.name || 'N/A'}</b></h1>
        <h1>catchphrase : <b>{companyInfo.catchPhrase || 'N/A'}</b></h1>
        <h1>bs : <b>{companyInfo.bs || 'N/A'}</b></h1>


            </Box>
            <Box w={'50%'} style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', padding: '3%' }}>
        <h1>Address :</h1>
        <br />
        <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
          <h1>Street : <b>{addressInfo.street || 'N/A'}</b></h1>
          <h1>Suite : <b>{addressInfo.suite || 'N/A'}</b></h1>
          <h1>City : <b>{addressInfo.city || 'N/A'}</b></h1>
          <h1>Zipcode : <b>{addressInfo.zipcode || 'N/A'}</b></h1>
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRki-o9FyPcZZkYHaQF09h5oLCNbDTf-qBA8g&usqp=CAU'} style={{ width: '100%', margin: "4%" }} alt="" />
        </Box>
        <Box w={'50%'} style={{ textAlign: 'right', padding: '3%' }}>
          <h1>lat : <b>{addressInfo.geo?.lat || 'N/A'}</b></h1>
          <h1>lng : <b>{addressInfo.geo?.lng || 'N/A'}</b></h1>
        </Box>
      </Box>
        </Box>
    </Box>
    </>
   
   
  )
}

export default Profile