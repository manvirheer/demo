### Working with LeftHook

#### Our flow
We would like to differentiate between scripts or commands which are environment based. And, commands which are applicable to all environments and these are mostly organization rules. 


##### Groups
1. Org Rules
2. Environment Rules 



##### Org Rules
1. Commit Message Rule
Tenzr Health follows the following convention for the commit messages:
`Type: message`

Type could be the following:

| **Types** | **Description of Types** | **Example Commit** |
| --- | --- | --- |
| Fix/Bug | A bug fix. | "Fix: resolve index out of bounds error in data parser" |
| Docs | Documentation changes. | "Docs: update installation instructions in readme" |
| Refactor | Code refactoring without adding new features or fixing bugs. | "Refactor: improve modularity of user service" |
| Test | Adding missing tests or correcting existing tests. | "Test: add unit tests for user authentication" |
| Task/Chore | A feature implementation or any other changes. | “Task: add file a to read config b.” |
| PR | Any updates that addresses code reviews/functional testing. | “PR: rename files to fit naming conventions” |


Types = ["Fix", "Bug", "Docs", "Refactor", "Test", "Task", "Chore", "PR"]


### LeftHook
jobs:
    - name: Org Rules    
      groups:
        parallel: true
        jobs:
            - name: