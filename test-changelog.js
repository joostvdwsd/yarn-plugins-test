var conventionalChangelog = require('conventional-changelog');

console.log('bla')
conventionalChangelog({
  preset: 'conventionalcommits'
// }, undefined, undefined, {
//   headerPattern: /^(?:Merged PR \d+: )?(\w*)(?:\((.*)\))?!?: (.*)$/,
//   breakingHeaderPattern: /^(?:Merged PR \d+: )?(\w*)(?:\((.*)\))?!: (.*)$/,
//   revertPattern: /^(?:Merged PR \d+: )?(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
}).pipe(process.stdout);