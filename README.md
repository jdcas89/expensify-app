
yarn install

babel src/app.js --out-file=public/scripts/app.js --presets=env,react
babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch


babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch