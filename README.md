# 이더리움 네임 서비스 등록기 디앱(dApp)

이 앱은 이더리움 탈중앙화 어플리케이션들과 이와 호환되는 블록체인에서 브라우저에서 .eth 도메인을 사용할 수 있게 해줍니다.

자세한 내용은 다음의 문건을 참조하세요. 
Check [ens.domains](http://ens.domains/) for more information about the ENS.

이 앱을 미리 테스트해보려면 다음을 이용하세요.
Try the app: [registrar.ens.domains](http://registrar.ens.domains/)

### 실행방법

    cd app
    meteor npm install
    meteor


### Deploying to github pages

A static copy of the app is kept at [registrar.ens.domains](http://registrar.ens.domains/). The page reflects whatever is kept at the `docs` folder in the `master` branch. So to update the static site, create a working branch and execute these:

```
cd app
meteor-build-client ../docs --path ""
cd ..
git add .
```

Then commit all and make a Pull Request to master.
