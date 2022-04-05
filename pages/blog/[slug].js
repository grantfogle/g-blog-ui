import Box from '@mui/material/Box';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Typography from '@mui/material/Typography';

let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: 'blogPost'
    })

    return {
        paths: data.items.map(item => ({
            params: {slug: item.fields.slug}
        })),
        fallback: false
    }
}

export async function getStaticProps({params}) {
    let data = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug
    })

    return {
        props: {
            blog: data.items[0]
        }
    }
}

function formatDates(unforDate) {
    const newDate = new Date(unforDate);
    return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
  };

export default function BlogPage({blog}) {
    console.log('blog', blog)
    return (
        <Box sx={{ width: '100%', minHeight: '80vh', p: 4, margin: '0 auto' }}>
            <Typography variant="h1" sx={{fontSize: '48px'}}>{blog.fields.title}</Typography>
            {/* <img src={blog.fields.headerImage.fields} alt="{img-alt-tag}" width="400" height="400"> */}
            {/* <div>{documentToReactComponents(blog.fields.headerImage)}</div> */}
            <Typography>{formatDates(blog.fields.date)}</Typography>
            <div>{documentToReactComponents(blog.fields.blogContent)}</div>
        </Box>
    )
}