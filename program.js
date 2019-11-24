const fs = require("fs");
const generateHTML = require("./generateHTML");
const Employee = require("./classes/employee");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");
const Manager = require("./classes/manager");

const startHTML = generateHTML.startHTML;
const fillHTML = generateHTML.fillHTML;
const endHTML = generateHTML.endHTML;


const inquirer = require("inquirer");
const team = [];
var finished = false;

async function getManagerInfo() {
    try {
        const name = await inquirer.prompt({
            message: "What is the Managers name?",
            name: "name"
        });

        const id = await inquirer.prompt({
            message: "What is their ID?",
            name: "id"
        });
        const email = await inquirer.prompt({
            message: "What is their Email?",
            name: "Email"
        });

        const offNum = await inquirer.prompt({
            message: "What is their office number?",
            name: "num"
        });
        const mang = new Manager(name.name, id.id, email.Email, offNum.num);
        team.push(mang);

    }
    catch (err) {
        console.log(err);
    }
};

async function newMember() {
    // try {
    const choice = await inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What kind of team member do you wish to add?',
            choices: ['Engineer', "Intern", 'I am done adding team members'],
        },
    ])
    console.log(choice.role);
    let title = choice.role;

    getEmployeeinfo(title);
};

async function getEmployeeinfo(title) {
    console.log(title);
    if (title === "Intern") {
        console.log("intern" + title);

        try {
            const name = await inquirer.prompt({
                message: "What is the Intern's name?",
                name: "name"
            });

            const id = await inquirer.prompt({
                message: "What is their ID?",
                name: "id"
            });
            const email = await inquirer.prompt({
                message: "What is their Email?",
                name: "Email"
            });

            const school = await inquirer.prompt({
                message: "What School do they go to?",
                name: "school"
            });

            const emp = new Intern(name.name, id.id, email.Email, school.school);
            team.push(emp);

        }
        catch (err) {
            console.log(err);
        };

    }

    else if (title === 'Engineer') {
        console.log("enginerr" + title);

        try {
            const name = await inquirer.prompt({
                message: "What is the Engineers's name?",
                name: "name"
            });

            const id = await inquirer.prompt({
                message: "What is their ID?",
                name: "id"
            });
            const email = await inquirer.prompt({
                message: "What is their Email?",
                name: "Email"
            });

            const gitHub = await inquirer.prompt({
                message: "What is their Github username?",
                name: "username"
            });

            const emp = new Engineer(name.name, id.id, email.Email, gitHub.username);
            team.push(emp);

        }
        catch (err) {
            console.log(err);
        };

    }
    else if (title === "I am done adding team members") {
        console.log("done" + title);
        //exits from holding loop
        finished = true;
        console.log("Done adding team members...")
    }
    else {
        console.log("fail" + title);

        console.log("failed to add member");
    };
};

function renderHTML() {
    console.log(data);

    //begins file
    fs.writeFile('index.html', startHTML(), (err) => {
        if (err) throw err;

        console.log("file created");
    });

    //fills out card content
    addEmployees(team);

    //ends html
    fs.writeFile('index.html', endHTML(), (err) => {
        if (err) throw err;

        console.log("file not finished");
    });

}

function addEmployees(data) {
    for (let i = 0; i < data.length; i++){
        let nextEmp = fillHTML(data[i]);
        fs.appendFile('index.html',nextEmp);
    }
}

function mainProgram() {
    getManagerInfo();

    //loops in the newmember prompt set
    while (!finished){
        newMember();
    }

    renderHTML();
}

mainProgram();