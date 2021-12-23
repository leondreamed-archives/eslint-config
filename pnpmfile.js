module.exports = {
  hooks: {
    readPackages (pkg) {
      if (pkg.name === 'eslint-import-resolver-webpack') {
        pkg.peerDependencies['webpack'] = '*'
      }
      return pkg
    }
  }
}