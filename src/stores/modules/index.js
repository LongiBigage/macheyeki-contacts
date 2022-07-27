import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
/**
 * Automatically imports all the modules and exports as a single module object
 */
const requireModule = require.context(".", true, /\.store\.js$/);
const modules = {};

requireModule.keys().forEach(filename => {
  // create the module name from fileName
  // remove the store.js extension and capitalize
  const moduleName = upperFirst(
    camelCase(filename.replace(/^\.\//, "").replace(/(\.\/|\.store\.js)/g, ""))
  );

  modules[moduleName] =
    requireModule(filename).default || requireModule(filename);
});
//module name FolderNameModule
export default modules;