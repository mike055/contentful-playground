import { Asset, createClient } from "contentful";
import { Category } from "../types/category.type";
import { ContentType } from "../types/contentTypes.type";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "";

const client = createClient({
  space: space,
  accessToken: accessToken,
});

type ContentfulCategoryFields = {
  name: string;
  description: string;
  image: Asset;
};

export const fetchCategories = async () => {
  const contRes = await fetchEntries<ContentfulCategoryFields>("category");
  return contRes.map((c) => {
    return {
      name: c.fields.name,
      description: c.fields.description,
      image: {
        url: c.fields.image.fields.file.url,
        title: c.fields.image.fields.title,
      },
    } as Category;
  });
};

async function fetchEntries<T>(contentType: ContentType) {
  const entries = await client.getEntries<T>({ content_type: contentType });
  if (entries.items) return entries.items;
  else {
    console.log(`Error getting Entries for ${contentType}`);
    return [];
  }
}

export default { fetchCategories };
