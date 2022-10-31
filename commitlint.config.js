module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['chore', 'docs', 'feat', 'fix', 'style', 'refactor', 'revert', 'unit', 'test', 'wip'],
        ],
    },
};
