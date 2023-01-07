INSERT INTO departments (department_name)
VALUES ("Sales"),
       ("Finance"),
       ("Engineering"),
       ("Legal"),

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 1),
       (2, "Salesperson", 80000, 1),
       (3, "Lead Engineer", 150000, 3),
       (4, "Software Engineer", 120000, 3),
       (5, "Account Manager", 160000, 2),
       (6, "Accountant", 125000, 2),
       (7, "Legal Team Lead", 250000, 4),
       (8, "Lawyer", 190000, 4),
       
-- ask vinnie to figure out if i need to be using dept name or dept id as a value here. Also ask how we would show null for manager/managerid
-- are we going to merge departments with roles to get the employees tables? if so how would we add the manager name to it
INSERT INTO employees (id, first_name, last_name, title, department_name, salary, manager_id)
VALUES (1, "John", "Doe","Sales Lead", "Sales", 100000, ),
       (2, "Mike", "Chan", "Salesperson", 80000, "Sales", 1),
       (3, "Ashley", "Rodriguez", "Lead Engineer", 150000, "Engineering", ),
       (4, "Kevin", "Tupik", "Software Engineer", 120000, "Engineering", 3),
       (5, "Kunal", "Singh", "Account Manager", 160000, "Finance", ),
       (6, "Malia", "Brown", "Accountant", 125000, "Finance", 5),
       (7, "Sarah", "Lourd", "Legal Team Lead", 250000, "Legal", ),
       (8, "Tom",  "Allen", "Lawyer", 190000, "Legal", 7),
