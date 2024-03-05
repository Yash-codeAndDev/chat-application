import React from 'react'
import { IconButton } from '@mui/material'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';


import './myStyles.css'
import ConversationsItem from './ConversationsItem';

const Sidebar = () => {

  const [conversations , setConversations] = userState([
    {
      name : "Test#1",
      lastMessage:"Last Message #1",
      timeStamp: "today",
    },
    {
      name : "Test#2",
      lastMessage:"Last Message #2",
      timeStamp: "today",
    },
    
    {
      name : "Test#3",
      lastMessage:"Last Message #3",
      timeStamp: "today",
    },
  ]);



  return (
    <div className='sidebar-container'>
        <div className='sb-header'>
          <div>
          <IconButton>
            <AccountCircleIcon/>
          </IconButton>
          </div>
          <div>
          <IconButton>
            <PersonAddIcon/>
          </IconButton>
          <IconButton>
            <GroupAddIcon/>
          </IconButton>  
          <IconButton>
            <AddCircleIcon/>
          </IconButton>
          <IconButton>
            <NightlightIcon/>
          </IconButton>
          </div>
        </div>

        <div className='sb-search'>
          <IconButton>
            <SearchIcon/>
          </IconButton> 
          <input  className= "search-box" placeholder='search'/>
        </div>
        
        <div className='sb-conversations'>
          {conversations.map((conversations)=>{
            return <ConversationsItem props={conversations}/> 
          })}
        </div>
    </div>
  )
}

export default Sidebar