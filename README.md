# photo-test-front
## 주의사항
### prettier 및 eslint
- vscode에 prettier 플러그인이 깔려있다면 지울 것
    - 레포지토리의 prettier 설정을 무시함
- eslint 플러그인은 깔려있어야함
- vs code 세팅에서 default formatter를 ESLint로 format on save를 체크로
- eslint > Format: Enable을 체크

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