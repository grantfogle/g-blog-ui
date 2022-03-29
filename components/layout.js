import Box from '@mui/material/Box';
import Navbar from './navbar'
import Footer from './footer'
import { flexbox } from '@mui/system';

export default function Layout({ children }) {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Box>
    )
}