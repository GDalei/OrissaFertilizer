import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

export default function SearchBarComponent() {
    return (

        <Autocomplete
       
            variant="plain"
            placeholder="Search"
            limitTags={2}
            options={top100Films}
            getOptionLabel={(option) => option.title}
           
            sx={{ width: '500px' }}
        />

    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'UREA', year: 1994 },
    { title: 'POTASH', year: 1972 },
    { title: 'NPK', year: 1974 },
    { title: 'GROMOR', year: 2008 },
    { title: 'DAP', year: 1957 },
    { title: "ACTATHENE", year: 1993 },
    { title: 'ACTAALPHA', year: 1994 },
    {
        title: 'BRAHMOS',
        year: 2003,
    },
    { title: 'ASTAR', year: 1966 },
    { title: 'ACTAP', year: 1999 },
    {
        title: 'ACTABAN',
        year: 2001,
    },
    {
        title: 'MAHAYODAH',
        year: 1980,
    },
    { title: 'MAHAYODAH A', year: 1994 },
    
];