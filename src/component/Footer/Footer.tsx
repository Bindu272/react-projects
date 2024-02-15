import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
import LinkedInRoundedIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';


export default function ColorInversionFooter() {
  return (
    <Sheet
      variant="solid"
      color='primary'
      invertedColors
      sx={{
        flexGrow: 1,
        p:1  
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

        <IconButton variant="plain" component={Link} to='https://www.linkedin.com/in/bindu-rvikumar-patil-1782601a7/' target='_blank'>
          <LinkedInRoundedIcon />
        </IconButton>
        <IconButton variant="plain" component={Link} to='https://github.com/Bindu272' target='_blank'>
          <GitHubIcon />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'center' },
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >

        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Information</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton component='a' href={`mailto:bindupatil272@gmail.com`}>Contact</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton target='_blank' component={Link} to='https://medium.com/@bindupatil272/frameworks-face-off-react-angular-and-vue-js-in-a-battle-royale-37d5afb38f0d'>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton target='_blank' component={Link} to='https://myntra-app-teal.vercel.app/signInPage'>About</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Projects</ListSubheader>
            <List sx={{ '--ListItemDecorator-size': '32px' }}  >
              <ListItem >
                <ListItemButton  target='_blank' component={Link} to='https://myntra-app-teal.vercel.app/signInPage'>Myntra Clone</ListItemButton>
              </ListItem>
              <ListItem >
                <ListItemButton component={Link} to='https://redux-toolkit-green.vercel.app/' target='_blank'>Redux-Toolkit</ListItemButton>
              </ListItem>
              <ListItem >
                <ListItemButton component={Link} to='https://github.com/Bindu272' target='_blank'>See More</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
