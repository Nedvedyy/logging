# logging

http://microapps.com/blog/auto-publishing-to-npm-by-travis-ci/

If you have an npm module hosted on Github and being built by Travis CI, you might find it convenient having Travis CI automatically publish successful builds to npm.The main idea is to get and paste a token to .travis.yml that would automate the npm publishing process. Let’s go through configuration together.

## Open Terminal and execute following commands:

sudo gem install json

gem install travis

Explanation: these gems are needed for token generation.

## Open .travis.yml file located in the module root directory and paste
 language: node_js
 deploy:
 api_key:
 email: your@emailhere.com
 provider: npm
Explanation: this part in Travis CI configuration enables auto publishing to npm.

## Login to your npm account via Terminal

npm login
In the same Terminal tab or another, copy the npmjs token you got after authorisation

cat ~/.npmrc | grep _auth
You will see something like ‘//registry.npmjs.org/:_authToken=10eb69e7-5e63-4061-a34a-5733d7fcdce7’. Copy token after ‘_authToken=’ part, which is 10eb69e7-5e63-4061-a34a-5733d7fcdce7

Explanation: To be able to publish module by Travis CI, npm authentication token is required.

Now encrypt this token with Travis gem. You will be prompted to insert previously copied npmjs token.

travis encrypt --add -r Your-user-or-organization-name/Your-repo-name —org
Example: travis encrypt –add -r microapps/Nodify-Shopify –org

As a result, we get configured .travis.yml file that looks like

language: node_js
 deploy:
 api_key:
 secure: "Tu6kQZjikHQnoIgHoFag+237O9oJ2SwZEljbeYXY1Vb5l89C+V8rdA5kNGv5Vpis94="
 email: youremail@example.com
 provider: npm
 
## All is left now is to commit and push changes to GitHub.

git add .travis.yml && git commit -m "Travis auto publish config" && git push


From now on Travis CI will publish new versions of successful builds to npmjs.
