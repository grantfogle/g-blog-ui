import Box from '@mui/material/Box';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

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

export default function BlogPage({blog}) {
    console.log('blog', blog)
    return (
        <Box sx={{ width: '100%', height: '100%', p: 4, margin: '0 auto' }}>
            <h1>{blog.fields.title}</h1>
            <div>{documentToReactComponents(blog.fields.blogContent)}</div>
        </Box>
    )
}