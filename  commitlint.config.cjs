// commitlint.config.cjs  ── enforces Tenzr Health message style
module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
      parserOpts: {
        headerPattern: /^(\w+):\s(.+)$/,      // <Type>: <subject>
        headerCorrespondence: ['type', 'subject'],
      },
    },
    rules: {
      'type-enum':  [2, 'always', ['Task', 'Feature', 'Bug', 'Fix', 'Test', 'Refactor']], // custom set
      'type-case':  [2, 'always', 'pascal-case'],   // e.g. Fix
      'subject-case': [2, 'always', 'lower-case'],  // summary must be lower‑case
      'subject-empty': [2, 'never'],
      'header-max-length': [2, 'always', 72],
    },
  };
  