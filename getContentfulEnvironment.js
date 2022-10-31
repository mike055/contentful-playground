const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENFUL_MIGRATION_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment('master'))
}