import Box from '@mui/material/Box';
import { getAllProjects } from "../lib/api";

export default function Projects({preview, allProjects}) {
    return (
        <Box sx={{ width: '600px', height: '100%', p: 4, margin: '0 auto' }}>
            <h1>Projects</h1>
            {allProjects.map(post => {
                return (
                    <Box>
                        <h1>{post.name}</h1>
                    </Box>
                )
            }) }
        </Box>
    )
}

export async function getStaticProps({ preview = false }) {
    let allProjects = (await getAllProjects(preview));
    return {
        props: { preview, allProjects }
    }
}