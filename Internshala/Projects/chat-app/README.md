// create-react-app e-commerce-app --use-npm
// npm install -D rimraf prettier babel-eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-prettier eslint-config-airbnb eslint-plugin-react-hooks
//.eslintrc
// SCRIPTS   
 "lint": "eslint src/**/*.js",
  "format": "prettier --write src/**/*.js",
  "format:lint": "npm run format && npm run lint",
  "clear": "rimraf build"
  
