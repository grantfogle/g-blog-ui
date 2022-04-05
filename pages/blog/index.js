import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link'
import { getAllPostsForHome, fetchSingleBlog } from "../../lib/api";


function formatDates(unforDate) {
    const newDate = new Date(unforDate);
    return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
};

export default function Blog({ preview, allPosts }) {

    return (
        <Box sx={{ width: '600px', minHeight: '80vh', p: 4, margin: '0 auto' }}>
            {allPosts.map(post => {
                return (
                    <div key={post.sys.id}>
                        <p>{formatDates(post.date)}</p>
                        <Link href={`/blog/ + ${post.title.toLowerCase().replace(/ /g, '-')}`}>
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
    console.log(allPosts)
    // let singleBlog = (await fetchSingleBlog('6jChEOl0MrOxPPdVRrh00T'));
    return {
        props: { preview, allPosts }
    }
}