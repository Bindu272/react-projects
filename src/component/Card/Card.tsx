import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';


const Task = [
    {
        id: 1,
        name: 'Accordion',
        path: './accordion',
        link: 'https://github.com/Bindu272/myntra-app/'

    },
    {
        id: 2,
        name: 'Star Rating',
        path: './startRating',
        link: 'https://github.com/Bindu272/myntra-app/'
    },
    {
        id: 3,
        name: 'Random Hex Color Generator',
        path: './colorGenerator',
        link: 'https://github.com/Bindu272/myntra-app/'
    },
    {
        id: 4,
        name: 'Random Hex Color Generator',
        path: './colorGenerator',
        link: 'https://github.com/Bindu272/myntra-app/'
    }
]
export default function BioCard() {
    return (
        <>
         
            {Task.map((tasks, id) => (
               
                <Card
                    key={id}
                    sx={{
                        width: 320,
                        maxWidth: '100%',
                        boxShadow: 'lg',
                    }}
                >
                    <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>

                        <Chip
                            size="sm"
                            variant="soft"
                            color="primary"
                            sx={{
                                mt: -1,
                                mb: 1,
                                border: '3px solid',
                                borderColor: 'background.surface',
                            }}
                        >
                            {tasks.id}
                        </Chip>
                        <Typography level="title-lg">{tasks.name}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                            Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
                            love to code.
                        </Typography>
                    </CardContent>
                    <CardOverflow sx={{ bgcolor: 'background.level1' }}>
                        <CardActions buttonFlex="1">
                            <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                                <Button> <Link to={tasks.path}>Try</Link> </Button>
                                <Button> <Link to={tasks.link}  target="_blank">Show Code</Link> </Button>
                            </ButtonGroup>
                        </CardActions>
                    </CardOverflow>
                </Card>
              
            ))

            }
         
            
        </>

    );
}
