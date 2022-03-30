import * as React from 'react';
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
        <>
            {allPosts.map(post => {
                return (
                    <div key={post.sys.id}>
                        <Link>
                            <h1>{post.title}</h1>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}