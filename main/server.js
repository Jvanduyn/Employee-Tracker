const inquirer = require('inquirer');
const mysql = require('mysql2');

function init() {
    inquirer.createPromptModule([
        {

        }
    ])
}

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
    console.log(`Connected to the movies_db database.`)
);