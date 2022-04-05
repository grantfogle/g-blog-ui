import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'blogPost',
  });
  return {
    props: {
      allPosts: data.items
    }
  }
}

function formatDates(unforDate) {
  const newDate = new Date(unforDate);
  return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
};

export default function Index({ allPosts }) {
  console.log(allPosts)
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, minHeight: '80vh' }}>
        {allPosts.map(post => {
          return (
            <Box key={post.sys.id} sx={{ mb: 2, display: 'flex', alignItems: 'end' }}>
              <Typography sx={{ mr: 2 }} variant="body" component="p">{formatDates(post.fields.date)}</Typography>
              <Link color="secondary" href={"blog" + '/' + post.fields.slug}>
                <Box>
                  <Typography variant="h6" component="h2">{post.fields.title}</Typography>
                </Box>
              </Link>
            </Box>
          )
        })}
        {/* <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright /> */}
      </Box>
    </Container>
  );
}