const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table')
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: 'Beagle150!',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);

const init = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'init',
            message: 'What would you like to do?',
            choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
        },
    ]).then((answer) => {
        if (answer.init === "View All Employees") {
            return viewAllEmployees()
        }
        if (answer.init === "Add Employee") {
            return addEmployee()
        }
        if (answer.init === "Update Employee Role") {
            return updateEmployeeRole()
        }
        if (answer.init === "View All Roles") {
            return viewAllRoles()
        }
        if (answer.init === "Add Role") {
            return addRole()
        }
        if (answer.init === "View All Departments") {
            return viewAllDepartments()
        }
        if (answer.init === "Add Department") {
            return addDepartment()
        }
        if (answer.init === "Quit") {
            return quit()
        }
    })
}

function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        init()
    });
}

function viewAllRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
        init()
    });
}

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        init()
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the department?',
        }
    ]).then((answers) => {
        const sql = `INSERT INTO department (department_name)
        VALUES (?)`;
        const params = [answers.name];

        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            init()
        })
    })
}

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        init()
    });
}

// adding a new role
// prompt to ask input role, input salary, list departments
// to list departments, you would need a dynamic list of all the departments if someone added one
// user would select criteria and it would add that information to the role table
function addRole() {
    db.query('SELECT * FROM department', function (err, results) {
        const departmentArr = results.map(({ id, department_name }) => ({
            name: department_name,
            value: id
        }))
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the department?',
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'What is the department that the new role belongs too?',
                choices: departmentArr,
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the department?',
            },
        ]).then((answers) => {
            const sql = `INSERT INTO role (title, salary, department_id)
            VALUES (?,?,?)`;
            const params = [answers.title, answers.salary, answers.department_id]

            db.query(sql, params, (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                init()
            })
        })

    });
}

init();