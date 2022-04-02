import Box from '@mui/material/Box';
import Navbar from './navbar'
import Footer from './footer'
import { flexbox } from '@mui/system';

// make blog call here?
// pass into children..., still brings us to issue of 

export default function Layout({ children }) {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Box>
    )
}