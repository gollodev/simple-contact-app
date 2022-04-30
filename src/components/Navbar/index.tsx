import { FC } from 'react'

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Container
} from '@mui/material'

const Navbar: FC = (): JSX.Element => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Contact App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
