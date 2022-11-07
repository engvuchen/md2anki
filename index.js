const { asyncExec } = require('./util');
const pkg = require('./package.json');

const basePath = './src';
const pathList = pkg.path_list;

async function transform() {
  console.log('Processing, please wait');
  await Promise.all(
    pathList.map(language => {
      console.log(`mdanki ${basePath}/${language}/${language}.md ${basePath}/${language}/${language}.anki`);
      console.time(language);
      return asyncExec(`npx mdanki ${basePath}/${language}/${language}.md ${basePath}/${language}/${language}.apkg`)
        .then(() => {
          console.timeEnd(language);
        })
        .catch(e => console.log(`${language}: ${e}`));
    })
  );
}

transform();
