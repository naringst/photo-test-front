# photo-test-front
## 주의사항
- prettier 및 eslint는 기존 세팅에 맞출 것.
## 프론트 세팅법
- 워크스페이스는 `/apps` 폴더 내부에 만들어야함
### Vanila JS
- 폴더 생성
- `/apps/vanila-example` 참조하여 `/src` 폴더와 `index.html` 구성
```bash
$ yarn init
$ yarn install
$ yarn add -D live-server
```
- `/apps/vanila-example/package.json` 참조하여 스크립트 작성
### React
```bash
$ yarn create vite {폴더명 입력} --template react
$ cd {폴더명 입력}
$ yarn install
```