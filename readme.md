# Md2Anki

使用 `mdanki` 快速将对应 md 转为 anki；

## 结构转化

1. 一级标题 -> 题库名
2. 二级标题 -> 题目名

## 操作流程

1. 使用简悦解析页面为 MD 文件；
2. 自行整理后，放到对应语言的 md 文件；
3. 执行 `node index.js`（使用配置在 `package.json` 的 `path_list`）；
