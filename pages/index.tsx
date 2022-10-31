import Head from "next/head";
import { fetchCategories } from "../src/api/contentful";
import { Category } from "../src/types/category.type";

type HomeProps = {
  categories: Category[];
};

export default function Home(props: HomeProps) {
  return (
    <div>
      <Head>
        <title>Contentful playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Contentful playground</h1>
        <div>
          {props.categories.map((c, i) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  padding: "12px",
                  marginBlock: "6px",
                }}
                key={`category-${i}`}
              >
                <h2>{c.name}</h2>
                <p>{c.description}</p>
                {
                  c.image && (
                    <img height="100" width="100" src={c.image.url} alt={c.image.title} />
                  )
                }
                
              </div>
            );
          })}
        </div>
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export async function getStaticProps<HomeProps>() {
  const categories = await fetchCategories();

  return {
    props: {
      categories,
    },
  };
}
