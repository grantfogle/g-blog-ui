import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link'

import { getAllPostsForHome } from "../lib/api";

export async function getStaticProps({ preview = false }) {
    let allPosts = (await getAllPostsForHome(preview));
    console.log('allPosts', allPosts);
    return {
        props: { preview, allPosts }
    }
}

export default function Blog({ preview, allPosts }) {
    return (
        <Box sx={{ width: '600px', height: '100%', p: 4, margin: '0 auto' }}>
            {allPosts.map(post => {
                console.log('get content here: ', post.blogContent.json.content.map(content => console.log(content)))
                return (
                    <div key={post.sys.id}>
                        <Link href={{ pathName: `/blog/ + ${post.sys.id}`, query: { data: JSON.stringify(post.blogContent) } }}>
                            <h1>{post.title}</h1>
                        </Link>
                    </div>
                )
            })}
        </Box>
    )
}