import * as React from 'react';
import Chip from '@mui/joy/Chip';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';



const Task = [
    {
        id: 1,
        name: 'Accordion',
        path: './accordion',
        link: 'https://github.com/Bindu272/react-projects/blob/master/src/Screens/Accordion/Accordion.tsx',
        description:'A React accordion is a UI component that organizes content into collapsible sections. Users can expand or collapse sections by clicking on headers, providing a streamlined way to navigate through information.'

    },
    {
        id: 2,
        name: 'Todo',
        path: './todo',
        link: 'https://github.com/Bindu272/react-projects/blob/master/src/Screens/Todo/Todo.tsx',
        description:'A todo-list is a simple application or component used to manage tasks or items that need to be completed. Users can typically add, remove, update, and mark tasks as completed within the list.'
    },
    {
        id: 3,
        name: 'Random Hex Color Generator',
        path: './colorGenerator',
        link: 'https://github.com/Bindu272/react-projects/blob/master/src/Screens/ColorGenarator/ColorGenerator.tsx',
        description:'A random hex color generator is a tool or function that generates random hexadecimal color codes. '
    },
    {
        id: 4,
        name: 'Select Cities By Country',
        path: './cityCountry',
        link: 'https://github.com/Bindu272/react-projects/blob/master/src/Screens/CityByCountry/CityByCountry.tsx',
        description:'To select cities by country, you would typically need a database or some data source containing information about cities and their corresponding countries. '
    },
    {
        id: 5,
        name: 'Theme Switch',
        path: './themeSwitch',
        link: 'https://github.com/Bindu272/react-projects/blob/master/src/Screens/ThemeSwitch/ThemeSwitch.tsx',
        description:'A theme switcher is a user interface element or functionality that allows users to switch between different themes or visual styles in an application or website.'

    },
   
]
export default function BioCard() {
    return (
        <>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'20px', marginTop:'100px', marginBottom:'35px'}}>
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
                           {tasks.description}
                        </Typography>
                    </CardContent>
                    <CardOverflow sx={{ bgcolor: 'background.level1' }}>
                        <CardActions buttonFlex="1">
                            <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                            <Button component={Link}  to={tasks.path}> Try</Button>
                            <Button component={Link} to={tasks.link} target="_blank"> Show Code </Button>
                            </ButtonGroup>
                        </CardActions>
                    </CardOverflow>
                </Card>
              
            ))

            }
      
      </div> 
        </>

    );
}
