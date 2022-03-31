import { useRouter } from 'next/router'
import Box from '@mui/material/Box';

export default function Blog() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Box sx={{ width: '100%', height: '100%', p: 4, margin: '0 auto' }}>
            <h1>{id}</h1>
        </Box>
    )
}