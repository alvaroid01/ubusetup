// ubusetup.js

/* 
VSCode
    - Extensions
        - C/C++
        - CMake
        - CMake Tools
        - Code Runner
        - GitLens
        - Live Server
        - Markdown All in One
        - Markdown Preview Enhanced
    
    - Settings
        - Editor: Format On Save
        - Editor: Word Wrap
Node.js
    - npm
    - npx
    - yarn
    - nodemon
    -nvm

Fish Shell
    - fish
    -oh my fish
    - bobthefish

Git
    - git
    - git config --global user.name "Your Name"
    - git config --global user.email "
    - git config --global core.editor "code --wait"
    - git config --global merge.tool vscode

Docker
    - docker
    - docker-compose



 */


const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function runInstallationScript(scriptPath) {
    try {
        execSync(`bash ${scriptPath}`, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Error executing ${scriptPath}: ${error.message}`);
    }
}

const choices = {
    title: console.log("==>UbuSetup - Your Ubuntu Configuration Tool<=="),
    fastSetup: {
        title: () => {
            console.log("==>1.Fast Setup")
        },
        webdev: {
            title: "1.Web Development",
            setup: () => runInstallationScript("sedstup_scripts/webdev_setup.sh"),
            vscode: "1",
            nodejs: "2",
            fish: "3",
            git: "4",
            docker: "5",
            quit: "q"

        }
        ,
        desktopApps: {
            title: () => {
                console.log("==>2.Custom Setup\n")
            },
            vscode: "1",
            app2: "2",
        },
        quit: "q"
    },
    customSetup: {
        title: () => {
            console.log("==>2.Custom Setup\n")
        },
        vscode: "1",
        app2: "2",
        quit: "q"
    }

}


function chooseSetupMode() {
    choices['title']
    //Fast setup
    choices['fastSetup']['title']()
    choices['customSetup']['title']()

    rl.question("Please select from the following options: ", (choice) => {

        if (choice === "1") {
            choices['fastSetup']
            fastSetup();
        } else if (choice === "2") {
            customSetup();
        } else {
            console.log("Invalid choice.");
        }
    });



}
function fastSetup() {
    console.clear();
    console.log("===FAST SETUP===\n");
    console.log("1. Web Development");
    console.log("2. Desktop Apps");
    console.log("2. Mobile Development");

    console.log("q. Go back");

    rl.question("Please select a template: ", (choice) => {
        if (choice === "1") {
            console.clear();

            console.log(`The following will be installed:\n
                - Visual Studio Code
                - Node.js
                - NPM
                - Git
                - Express
                - MongoDB
                - Postman
                        `
            );


            rl.question("Proceed? (y/n): ", (choice) => {
                if (choice === "y") {
                    console.log("Installing Web Development template...");

                    //  runInstallationScript("setup_scripts/webdev_setup.sh");
                } else if (choice === "n") {
                    fastSetup();

                }
            });
        } else if (choice === "2") {
            console.clear();
            console.log(`The following will be installed:\n
                - C/C++
                - CMake
                - Qt
                - GTK+
                - MinGW
                - Debugging tools

                    `
            );

            rl.question("Proceed? (y/n): ", (choice) => {
                if (choice === "y") {
                    console.log("Installing Desktop Apps template...");
                    runInstallationScript("setup_scripts/desktopdev_setup.sh");
                } else if (choice === "n") {
                    fastSetup();

                }
            });
        }
        else if (choice === "3") {
            console.clear();
            console.log(`The following will be installed:\n
                - OpenJDK 11
                - Android Studio
                - Flutter
                - Dart
                - React Native
                - Kotlin
                    `
            );

            rl.question("Proceed? (y/n): ", (choice) => {
                if (choice === "y") {
                    console.log("Installing Desktop Apps template...");
                    runInstallationScript("setup_scripts/mobiledev_setup.sh");
                } else if (choice === "n") {
                    fastSetup();

                }
            });
        }
        else if (choice === "q") {
            chooseSetupMode();
        } else {
            console.log("Invalid choice.");
            fastSetup();
        }
    })

}
function customSetup() {
    console.log("===CUSTOM SETUP===\n");
    console.log("1. Install Visual Studio Code");
    console.log("2. Install App 2");
    console.log("q. Go back");

    rl.question("Please select an option: ", (choice) => {
        if (choice === "1") {
            // runInstallationScript("setup_scripts/install_vscode.sh");
        } else if (choice === "2") {
            // runInstallationScript("setup_scripts/install_app2.sh");
        } else if (choice === "q") {
            chooseSetupMode();
        } else {
            console.log("Invalid choice.");
            customSetup();
        }
    });
}



chooseSetupMode();
