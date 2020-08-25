Node JS 12.16.1 or higher needed to run WebdriverIOv6 
Install NodeJS from  https://nodejs.org/en/

Install Java for selenium standalone service to run
install java jdk - https://www.oracle.com/java/technologies/javase-jdk8-downloads.html


## Resources
https://testautomationu.applitools.com/webdriverio-tutorial/

any issues- delete the node_modules folder and then run 

'npm install' 

## RUNNING TESTS
run all tests: npm test
run test on particular environment (else it will run on mvtest by default) eg: SERVER=mvdemo npm test 
Run a single feature file eg: npm test -- --spec=features/login.feature
Files marked with tag @Pending will not run - this is set in 'wdio.conf.js' file
To run a file with a tag: npm test -- --cucumberOpts.tagExpression='@Login'

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