module.exports = function (migration) {
  const post = migration
    .createContentType("post")
    .name("Post")
    .description("")
    .displayField("title");
  post
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  post
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  post
    .createField("content")
    .name("Content")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      {
        nodes: {
          "asset-hyperlink": [
            {
              size: {
                max: 10,
              },

              message: null,
            },
          ],

          "embedded-asset-block": [
            {
              size: {
                max: 10,
              },

              message: null,
            },
          ],

          "embedded-entry-block": [
            {
              size: {
                max: 10,
              },

              message: null,
            },
          ],

          "embedded-entry-inline": [
            {
              size: {
                max: 10,
              },

              message: null,
            },
          ],

          "entry-hyperlink": [
            {
              size: {
                max: 10,
              },

              message: null,
            },
          ],
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  post
    .createField("excerpt")
    .name("Excerpt")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  post
    .createField("coverImage")
    .name("Cover Image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  post
    .createField("date")
    .name("Date")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  post
    .createField("author")
    .name("Author")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ["author"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  post.changeFieldControl("title", "builtin", "singleLine", {});
  post.changeFieldControl("slug", "builtin", "slugEditor", {});
  post.changeFieldControl("content", "builtin", "richTextEditor", {});
  post.changeFieldControl("excerpt", "builtin", "singleLine", {});
  post.changeFieldControl("coverImage", "builtin", "assetLinkEditor", {});
  post.changeFieldControl("date", "builtin", "datePicker", {});
  post.changeFieldControl("author", "builtin", "entryLinkEditor", {});
  const author = migration
    .createContentType("author")
    .name("Author")
    .description("")
    .displayField("name");
  author
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  author
    .createField("picture")
    .name("Picture")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  author.changeFieldControl("name", "builtin", "singleLine", {});
  author.changeFieldControl("picture", "builtin", "assetLinkEditor", {});
  const category = migration
    .createContentType("category")
    .name("Category")
    .description("")
    .displayField("name");
  category
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  category
    .createField("description")
    .name("Description")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  category
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  category.changeFieldControl("name", "builtin", "singleLine", {});
  category.changeFieldControl("description", "builtin", "singleLine", {});
  category.changeFieldControl("image", "builtin", "assetLinkEditor", {});
  const blogPost = migration
    .createContentType("blogPost")
    .name("Blog Post")
    .description("")
    .displayField("title");
  blogPost
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  blogPost
    .createField("text")
    .name("Text")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField("category")
    .name("Category")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ["category"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  blogPost.changeFieldControl("title", "builtin", "singleLine", {});
  blogPost.changeFieldControl("text", "builtin", "markdown", {});
  blogPost.changeFieldControl("category", "builtin", "entryLinkEditor", {});
};
