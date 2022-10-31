module.exports = function (migration) {
  const slug = migration.editContentType("blogPost").createField("urlSlug");

  slug
    .name("Url Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
};
