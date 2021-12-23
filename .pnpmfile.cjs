module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === 'eslint-import-resolver-webpack') {
        delete pkg.peerDependencies['webpack'];
      }
      return pkg
    }
  }
}