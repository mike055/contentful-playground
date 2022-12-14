import { Asset, createClient } from "contentful";
import {
  CONTENT_TYPE,
  IBlogPostFields,
  ICategoryFields,
} from "../../@types/generated/contentful";
import { BlogPost } from "../types/blogPost.type";
import { Category, Image } from "../types/category.type";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "";

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export const fetchCategories = async () => {
  const contRes = await fetchEntries<ICategoryFields>('category');
  return contRes.map((c) => {
    const categoryImage = c.fields.image && {
      url: c.fields.image.fields.file.url,
      title: c.fields.image.fields.title,
    };

    return {
      name: c.fields.name,
      description: c.fields.description,
      image: categoryImage,
    } as Category;
  });
};

export const fetchBlogs = async () => {
  const contRes = await fetchEntries<IBlogPostFields>('blogPost');
  return contRes.map((b) => {
    return {
      title: b.fields.title,
      text: b.fields.text,
      slug: b.fields.urlSlug,
      category: {
        name: b.fields.category.fields.name
      }
    } as BlogPost;
  });
};

async function fetchEntries<T>(contentType: CONTENT_TYPE) {
  const entries = await client.getEntries<T>({ content_type: contentType });
  if (entries.items) return entries.items;
  else {
    console.log(`Error getting Entries for ${contentType}`);
    return [];
  }
}

export default { fetchCategories };
