export type Image = {
  url: string;
  title: string;
};
export interface Category {
  name: string;
  description: string;
  image: Image | undefined;
}
