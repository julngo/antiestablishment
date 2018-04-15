# B IMD 353 Project Website
## - Marketing & Campaign

### Live preview via Gulp
1. Make sure you have installed Node.js
2. Recommended: Install gulp and browser-sync globally with `npm i gulp browserSync`, and then skip to step 4
3. `cd` to where package.json is located, then use `npm i` to install the node modules
4. `cd` to project directory, use `npm link gulp browser-sync` to access your global node modules. (For now until I figured out why simple `npm link` won't work)
5. use `gulp watch` to start the local web server, when you save your changes to files, the browser should refresh and update. Use `ctrl-c` to terminate.
