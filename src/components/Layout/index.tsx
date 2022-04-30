import { FC } from 'react'
import { Box } from '@mui/material'
import Navbar from '../Navbar'

interface LayoutProps {
    children: JSX.Element
}

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <Box>
            <Navbar />
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default Layout