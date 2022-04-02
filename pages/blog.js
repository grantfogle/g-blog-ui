import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link'
import { getAllPostsForHome } from "../lib/api";

export default function Blog({ preview, allPosts }) {
    console.log(preview, allPosts)
    return (
        <Box sx={{ width: '600px', height: '100%', p: 4, margin: '0 auto' }}>
            {allPosts.map(post => {
                return (
                    <div key={post.sys.id}>
                        <Link href={`/blog/ + ${post.title}`}>
                            <h1>{post.title}</h1>
                        </Link>
                    </div>
                )
            })}
        </Box>
    )
}

export async function getStaticProps({ preview = false }) {
    let allPosts = (await getAllPostsForHome(preview));
    return {
        props: { preview, allPosts }
    }
}