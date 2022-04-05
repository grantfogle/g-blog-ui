import Box from '@mui/material/Box';
import { getAllProjects } from "../../lib/api";

let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
    let data = await client.getEntries({
      content_type: 'projects',
    })  
    return {
      props: {
        allProjects: data.items
      }
    }
  }
  

export default function Projects({preview, allProjects}) {
    console.log(allProjects)
    return (
        <Box sx={{ width: '600px', height: '100%', p: 4, margin: '0 auto' }}>
            <h1>Projects</h1>
            {allProjects.map(project => {
                return (
                    <Box key={project.sys.id}>
                        <h1>{project.fields.name}</h1>
                    </Box>
                )
            }) }
        </Box>
    )
}