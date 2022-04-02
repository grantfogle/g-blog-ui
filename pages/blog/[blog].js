import { useRouter } from 'next/router'
import Box from '@mui/material/Box';

export default function Blog({ allPosts }) {
    const router = useRouter();
    const { blog } = router.query;
    console.log('this guys', allPosts)
    return (
        <Box sx={{ width: '100%', height: '100%', p: 4, margin: '0 auto' }}>
            <h1>{blog}</h1>
        </Box>
    )
}