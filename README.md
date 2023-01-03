# paizaのスキルチェックをtypescript行う準備
## 環境準備
### nodejs環境準備
```
npm init
npm install --save-dev @types/node
```
### typeScript環境準備
```
npm install --save-dev typescript
```
### tsconfig.json準備
```
"rootDirs": ["src"],
"sourceMap": true,
"outDir": "./dist", 
```
## debug環境準備（vscode）
- lunch.json
```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch TypeScript",
        "preLaunchTask": "Compile TypeScript",
        "cwd": "${workspaceFolder}",
        "program": "${file}",
        "console": "integratedTerminal"
      }
    ]
}
```
- tasks.json
```
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Compile TypeScript",
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "problemMatcher": [
        "$tsc"
      ]
    }
  ]
}
```
## vscodeでdebug実行
- F5キーで実行する。
- コンソール入力する。
- ctrl + c を入力してプログラムを実行する。
## Paizaで解答する
- ./dist/index.jsのプログラムを全選択しコピーする。
- Paizaにて、回答欄の選択言語をjavascriptにし、プログラムを貼り付ける。
- 入力例を試してよさそうならコードを提出する。