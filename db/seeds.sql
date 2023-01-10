USE tracker_db;

INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Finance"),
       ("Engineering"),
       ("Legal");

INSERT INTO role ( title, salary, department_id)
VALUES ( "Sales Lead", 100000, 1),
       ( "Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 3),
       ( "Software Engineer", 120000, 3),
       ( "Account Manager", 160000, 2),
       ( "Accountant", 125000, 2),
       ( "Legal Team Lead", 250000, 4),
       ( "Lawyer", 190000, 4);
       
-- ask vinnie to figure out if i need to be using dept name or dept id as a value here. Also ask how we would show null for manager/managerid
-- are we going to merge departments with roles to get the employees tables? if so how would we add the manager name to it
-- update the see data below for role id/manager id/make sure there are only 4 collums of data. 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "John", "Doe",1, NULL),
       ("Mike", "Chan", 2, 1),
       ( "Ashley", "Rodriguez",3, NULL ),
       ( "Kevin", "Tupik",4, 3 ),
       ( "Kunal", "Singh", 5, NULL),
       ( "Malia", "Brown", 6,5),
       ( "Sarah", "Lourd", 7, NULL),
       ( "Tom",  "Allen", 8, 7);
