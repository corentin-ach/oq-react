import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const MainCard = () => {
    return (
    <Box width="300px" height="300px" sx={{ 
        background: '#F0F0F0',
        border: 0,
        borderRadius: 10,
    }}>
        <Typography variant="h3" component="h2">
            Bienvenue,
        </Typography>
        <Paper>
            <Typography variant="h6" component="p">
                Bienvenue,
            </Typography>
        </Paper>
    </Box>
)
}

export default MainCard;
