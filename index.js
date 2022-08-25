const { asyncExec } = require('./util');

const basePath = './src';
const pathList = ['vue'];

async function transform() {
  await Promise.all(
    pathList.map(language => {
      console.log(`mdanki ${basePath}/${language}/${language}.md ${basePath}/${language}/${language}.anki`);
      console.log(language, '开始执行');

      return asyncExec(`npx mdanki ${basePath}/${language}/${language}.md ${basePath}/${language}/${language}.apkg`)
        .then(() => {
          console.log(language, '执行结束');
        })
        .catch(e => console.log(`${language}: ${e}`));
    })
  );
}

transform();
