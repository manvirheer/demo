// commitlint.config.cjs — Tenzr Health style
module.exports = {
    parserPreset: {
      parserOpts: {
        headerPattern: /^(\w+):\s(.+)$/,       // <Type>: <subject>
        headerCorrespondence: ['type', 'subject'],
      },
    },
    rules: {
      'type-enum':  [2, 'always', ['Task', 'Feature', 'Bug', 'Fix', 'Test', 'Refactor']],
      'type-case':  [2, 'always', 'pascal-case'],
      'subject-case': [2, 'always', 'lower-case'],
      'subject-empty': [2, 'never'],
      'header-max-length': [2, 'always', 72],
    },
  };
  