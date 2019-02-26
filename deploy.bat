rem !/usr/bin/env sh
rem  abort on errors


rem build
CALL npm run build
@echo on
rem navigate into the build output directory
cd dist

rem if you are deploying to a custom domain
rem echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

rem if you are deploying to https://<USERNAME>.github.io
 git push -f https://github.com/nperno/nperno.github.io.git master

rem if you are deploying to https://<USERNAME>.github.io/<REPO>
rem git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd ..