import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import { getAllPostsForHome } from "../../lib/api";

export default function BlogPage({ allPosts }) {
    const router = useRouter();
    const { blog } = router.query;
    console.log('this guys', allPosts)
    return (
        <Box sx={{ width: '100%', height: '100%', p: 4, margin: '0 auto' }}>
            <h1>{blog}</h1>
        </Box>
    )
}

export async function getStaticPaths() {
    const blogs = (await getAllPostsForHome(preview));
    // source: https://spacejelly.dev/posts/how-to-create-pages-in-next-js-with-static-dynamic-data/
    return {
        paths: blogs.map(post => {
            const pageTitle = post.title.toLowerCase().replace(/ /g, '-');
            const pageId = post.sys.id;
            return {
                params: {
                    pageTitle
                }
            }
        }),
        fallback: false
    }

}