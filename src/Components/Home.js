import React from 'react'
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from 'react';
import "../Styles/Home.css";
import Nav from '../Assets/hamburger.png' 
import { Chip } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';



export default function Home() {
    
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1.5),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '30ch',
            },
          },
        },
      }));
      
  const [quote,setQuote] = useState(null);

  useEffect(()=>{
      const fetchQuote = async ()=>{
          const res = await axios.get("https://random-data-api.com/api/v2/users");
          setQuote(res.data);
      };
  
      fetchQuote();
  },[])
  return (
    <> 
        <div className='Nav'>
         <img src={Nav} alt='Nav icon'/>
            <div className='Logo'>  
            <Chip
        label={quote?.first_name}
        variant="outlined"
        avatar={<Avatar alt= {quote?.first_name} src="/static/images/avatar/1.jpg" />}
      />
            </div>

     </div>
     <div className='Home-page'>
                <h1>Exceeding Event expectations.</h1>
                <div className='card'>
                  
                <Box sx={{ flexGrow: 1 }}>
      
        <Toolbar>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
   
    </Box>
    <div className='Avatar'> 
  <Stack direction="row" spacing={2}>
      <Avatar alt= {quote?.last_name}   src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
      <Avatar  alt= {quote?.street_name} src="/static/images/avatar/2.jpg" sx={{ width: 56, height: 56 }} />
      <Avatar  alt= {quote?.first_name}  src="/static/images/avatar/3.jpg" sx={{ width: 56, height: 56 }} />
      <Avatar alt= {quote?.last_name}   src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
      <Avatar alt= {quote?.country}   src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
    </Stack>
    </div>
                </div>
               
            </div>
     </>
  )
}
