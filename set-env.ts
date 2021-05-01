import ErrnoException = NodeJS.ErrnoException;

const { writeFile } = require('fs');
const { config } = require('dotenv');
// Configure Angular `environment.ts` file path

const targetPath = './src/environments/environment.ts';
// Load node modules
const colors = require('colors');
config();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
    baseUrl: '${process.env.BASE_URL}',
    production: '${process.env.PRODUCTION}',
    graphqlToken: '${process.env.GRAPHQL_TOKEN}',
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
