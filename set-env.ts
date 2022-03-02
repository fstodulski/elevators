import ErrnoException = NodeJS.ErrnoException;

const { writeFile } = require('fs');
const { config } = require('dotenv');

const targetPath = './src/environments/environment.ts';
const colors = require('colors');
config();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
    baseUrl: '${process.env.BASE_URL}',
    production: ${process.env.PRODUCTION === 'true'},
    graphqlToken: '${process.env.GRAPHQL_TOKEN}',
    googleMapsAPI: '${process.env.GOOGLE_MAPS_API}',
    mailChimpAPI: '${process.env.MAILCHIMP_API}'
};
`;
console.log(
  colors.magenta(
    'The file `environment.ts` will be written with the following content: \n'
  )
);
console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile, function (err: ErrnoException | null) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      colors.magenta(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      )
    );
  }
});
