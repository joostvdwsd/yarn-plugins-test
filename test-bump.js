const conventionalRecommendedBump = require(`conventional-recommended-bump`);

conventionalRecommendedBump({
  preset: `conventionalcommits`,
}, {
    headerPattern: /^(?:Merged PR \d+: )?(\w*)(?:\((.*)\))?!?: (.*)$/,
    breakingHeaderPattern: /^(?:Merged PR \d+: )?(\w*)(?:\((.*)\))?!: (.*)$/,
    revertPattern: /^(?:Merged PR \d+: )?(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
}, (error, recommendation) => {
  console.log(error);
  console.log(recommendation); // 'major'
});