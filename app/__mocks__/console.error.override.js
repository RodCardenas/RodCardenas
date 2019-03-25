/* eslint-disable no-console */

console.error = message => {
  throw message instanceof Error ? message : new Error(message);
};
