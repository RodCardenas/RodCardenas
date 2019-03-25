module.exports = {
  globals: {
    "LOCAL": true
  },
  moduleDirectories: [
    "node_modules",
    "app"
  ],
  moduleFileExtensions: [
    "js",
    "jsx",
    "css"
  ],
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    ".+\\.(css)$": "identity-obj-proxy"
  },
  setupFiles: [
    "<rootDir>/app/__mocks__/console.error.override.js"
  ],
  verbose: true,
  testURL: "http://localhost/"
};
