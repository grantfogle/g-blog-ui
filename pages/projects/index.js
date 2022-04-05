import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';

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


export default function Projects({ preview, allProjects }) {
  console.log(allProjects)
  return (
    <Box sx={{ width: '600px', minHeight: '80vh', p: 4, margin: '0 auto' }}>
      <Typography variant="h4" component="h1">Projects</Typography>
      {allProjects.map(project => {
        return (
          <Box key={project.sys.id} sx={{ borderBottom: '1px solid #dfdfdf' }}>
            {projectBox(project)}
          </Box>
        )
      })}
    </Box>
  )
}

function projectBox(project) {
  const { name, description, githubUrl, url } = project.fields;
  return (
    <Box>
      <Typography variant="h2">{name}</Typography>
      <Typography variant="body1">{documentToReactComponents(description)}</Typography>
      <Box>
        <Button variant="text" sx={{ textAlign: 'center' }}>
          <a href={githubUrl}>
            <GitHubIcon sx={{ color: '#16a085' }} fontSize="large" />
          </a>
        </Button>
        <Button variant="text">
          <a href={url}>
            <LaptopIcon sx={{ color: '#16a085' }} fontSize="large" />
          </a>
        </Button>
      </Box>
    </Box>
  )
}