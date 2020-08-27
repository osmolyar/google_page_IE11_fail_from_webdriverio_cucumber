


## Setup

'npm install' 

## RUNNING TESTS
'npm run ie'  to run on Internet Explorer and reproduce click issue
'npm run chrome' to run on Chrome (works)










## VSCode Extensions
Cucumber (Gherkin) Full Support:  alexkrechik.cucumberautocomplete
WebDriverIO snippets: raju.vscode-webdriverio-snippets
Chai snippets: nwhatt.chai-snippets

VSCode Settings
Ensure that VSCode settings file contains the following:
"cucumberautocomplete.steps": [
        "./step_definitions/*.js",
        "node_modules/qa-lib/src/step_definitions/*.js"
    ],
    "cucumberautocomplete.formatConfOverride": {
        "And": 3,
        "But": "relative",
        "cucumberautocomplete.syncfeatures": "./features/**/*.feature",
        "cucumberautocomplete.strictGherkinCompletion": true,
        "cucumberautocomplete.gherkinDefinitionPart": "(Given|When|Then)\\(",
        "cucumberautocomplete.stepRegExSymbol": "'"
    },
    "editor.quickSuggestions": {
        "comments": false,
        "strings": true,
        "other": true
    }
