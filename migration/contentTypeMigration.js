const runMigration = require("contentful-migration/built/bin/cli").runMigration;

const options = {
  spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENFUL_MIGRATION_ACCESS_TOKEN,
  yes: true,
};

console.log(options);

const migrations = async () => {
  //await runMigration({ ...options, ...{ migrationFunction: require('./scripts/01-initial-migration') } });
  await runMigration({ ...options, ...{ migrationFunction: require('./scripts/02-add-slug-to-blog') } });
};

migrations();
