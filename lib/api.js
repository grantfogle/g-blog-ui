const POST_BLOG_GRAPHQL_FIELDS = `
    sys {
        id
    }
    title
    headerImage {
        url
    }
    date
    blogContent {
        json
    }`;

const POST_PROJECTS_GRAPHQL_FIELDS = `
    sys {
        id
    }
    name
    image {
        url
    }
    launchDate
    description
    githubUrl
    url
    `;

async function fetchGraphQL(query, preview = false) {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${
                    preview
                        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                        : process.env.CONTENTFUL_ACCESS_TOKEN
                    }`,
            },
            body: JSON.stringify({ query }),
        }
    ).then(response => response.json())
}

function extractPostEntries(fetchResponse) {
    console.log('response...123', fetchResponse);
    return fetchResponse.data.blogPostCollection.items;
}

function extractProjectEntries(fetchResponse) {
    console.log('projects response...123', fetchResponse);
    return fetchResponse.data;
}

export async function getAllPostsForHome(preview) {
    const entries = await fetchGraphQL(
        `query {
        blogPostCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
            items {
                ${POST_BLOG_GRAPHQL_FIELDS}
            }
        }
        }`,
        preview
    )
    return extractPostEntries(entries)
}

export async function getAllProjects(preview) {
    const entries = await fetchGraphQL(
        `query {
            type: projects,
            projectsCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
               items {
                    ${POST_PROJECTS_GRAPHQL_FIELDS}
                }
            }
        }`,
        preview
    )
    return extractProjectEntries(entries)
}


// export async function fetchSingleBlog(blogId) {
//     await fetch(`https://cdn.contentful.com/
//         space/${process.env.CONTENTFUL_SPACE_ID}/environments/blogPost/entries/${blogId}/
//         ?access_token/${process.env.CONTENTFUL_ACCESS_TOKEN}`).then(res =>  res.json());
// }