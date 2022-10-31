import Head from "next/head";
import { BlogPost } from "../../src/types/blogPost.type";
import { fetchBlogs } from "../../src/api/contentful";
import Link from "next/link";

type BlogProps = {
  blogs: BlogPost[];
};

export default function Blogs(props: BlogProps) {
  return (
    <div>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Blogs playground</h1>
        <div>
          {props.blogs.map((b, i) => {
            return (
              <div style={ { display: 'flex'} } key={`blog-${i}`}>
                <Link href={`blog/post/${b.slug}`}>{b.title}</Link>
                <span style={ { backgroundColor: 'green' } }>{b.category.name}</span>
              </div>
            );
          })}
        </div>
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export async function getStaticProps<Blog>() {
  const blogs = await fetchBlogs();

  return {
    props: {
      blogs,
    },
  };
}
