import { Category } from "./category.type";

export interface BlogPost {
  title: string;
  text: string;
  slug: string;
  category: Category;
}
