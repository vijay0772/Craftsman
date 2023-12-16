create database CraftsManhub;

use CraftsManhub;

create table Registration(username varchar(40),password varchar(40),repassword varchar(40),
usertype varchar(40)); 

Create table CustomerOrders
(
OrderId integer,
userName varchar(40),
orderName varchar(40),
orderPrice double,
userAddress varchar(40),
creditCardNo varchar(40),
deliveryMethod varchar(255),
storeLocation varchar(255),
orderDate date,
Primary key(OrderId,userName,orderName)
);


select * from CustomerOrders;
drop table CustomerOrders;


Create table Productdetails
(
ProductType varchar(20),
Id varchar(20),
productName varchar(40),
productPrice double,
productImage varchar(40),
productManufacturer varchar(40),
productCondition varchar(40),
productDiscount double,
productDescription varchar(255),
inventory int,
Primary key(Id)
);

ALTER TABLE ProductDetails MODIFY Id INTEGER NOT NULL AUTO_INCREMENT;



INSERT INTO ProductDetails (ProductType, productName, productPrice, productImage, productDiscount, productDescription, inventory)
VALUES
('service', 'Plumbing repairs', 99.99, 'plumbing.jpg', 0, '99.99 / h', 55),
('service', 'Electrical services', 109.99, 'electrical.jpg', 0, '109.99 / h', 45),
('service', 'HVAC maintenance', 119.99, 'hvac.jpg', 0, '119.99 / h', 40),
('service', 'Roofing repairs', 129.99, 'roofing.jpg', 0, '129.99 / h', 35),

('service', 'House cleaning', 79.99, 'house-cleaning.jpg', 0, '79.99 / h', 65),
('service', 'Carpet cleaning', 89.99, 'carpet-cleaning.jpg', 0, '89.99 / h', 60),
('service', 'Window cleaning', 99.99, 'window-cleaning.jpg', 0, '99.99 / h', 55),
('service', 'Deep cleaning', 129.99, 'deep-cleaning.jpg', 0, '129.99 / h', 45),

('service', 'Lawn care', 69.99, 'lawn-care.jpg', 0, '69.99 / h', 70),
('service', 'Garden design', 119.99, 'garden-design.jpg', 0, '119.99 / h', 50),
('service', 'Tree trimming', 89.99, 'tree-trimming.jpg', 0, '89.99 / h', 65),
('service', 'Outdoor maintenance', 99.99, 'outdoor-maintenance.jpg', 0, '99.99 / h', 60),

('service', 'Kitchen remodeling', 299.99, 'kitchen-remodeling.jpg', 0, '299.99 / project', 15),
('service', 'Bathroom renovation', 249.99, 'bathroom-renovation.jpg', 0, '249.99 / project', 20),
('service', 'Home additions', 399.99, 'home-additions.jpg', 0, '399.99 / project', 10),
('service', 'Basement finishing', 289.99, 'basement-finishing.jpg', 0, '289.99 / project', 15),

('service', 'Refrigerator repair', 89.99, 'refrigerator-repair.jpg', 0, '89.99 / repair', 50),
('service', 'Washer and dryer repair', 79.99, 'washer-dryer-repair.jpg', 0, '79.99 / repair', 60),
('service', 'Dishwasher repair', 69.99, 'dishwasher-repair.jpg', 0, '69.99 / repair', 70),
('service', 'Oven and stove repair', 99.99, 'oven-stove-repair.jpg', 0, '99.99 / repair', 55),

('service', 'Home staging', 149.99, 'home-staging.jpg', 0, '149.99 / hour', 30),
('service', 'Decor consultations', 99.99, 'decor-consultations.jpg', 0, '99.99 / hour', 50),
('service', 'Furniture arrangement', 79.99, 'furniture-arrangement.jpg', 0, '79.99 / hour', 65),
('service', 'Color palette selection', 69.99, 'color-palette-selection.jpg', 0, '69.99 / hour', 70),

-- Home Security
('service', 'Security system installation', 199.99, 'security-system-installation.jpg', 0, '199.99 / project', 15),
('service', 'Smart home integration', 149.99, 'smart-home-integration.jpg', 0, '149.99 / project', 20),
('service', 'Locksmith services', 89.99, 'locksmith-services.jpg', 0, '89.99 / hour', 55),
('service', 'Surveillance camera installation', 129.99, 'surveillance-camera-installation.jpg', 0, '129.99 / project', 25),

-- Moving and Storage
('service', 'Residential moving', 299.99, 'residential-moving.jpg', 0, '299.99 / project', 10),
('service', 'Packing and unpacking', 89.99, 'packing-unpacking.jpg', 0, '89.99 / hour', 60),
('service', 'Storage solutions', 129.99, 'storage-solutions.jpg', 0, '129.99 / month', 30),
('service', 'Furniture assembly', 59.99, 'furniture-assembly.jpg', 0, '59.99 / item', 75),

-- Pest Control
('service', 'Insect removal', 79.99, 'insect-removal.jpg', 0, '79.99 / treatment', 60),
('service', 'Rodent control', 89.99, 'rodent-control.jpg', 0, '89.99 / treatment', 55),
('service', 'Termite inspections', 99.99, 'termite-inspections.jpg', 0, '99.99 / inspection', 50),
('service', 'Pest prevention', 69.99, 'pest-prevention.jpg', 0, '69.99 / treatment', 70),

-- Handyman Services
('service', 'General repairs', 79.99, 'general-repairs.jpg', 0, '79.99 / hour', 60),
('service', 'Painting', 99.99, 'painting.jpg', 0, '99.99 / hour', 50),
('service', 'Drywall installation', 89.99, 'drywall-installation.jpg', 0, '89.99 / hour', 55),
('service', 'Fixture installation', 69.99, 'fixture-installation.jpg', 0, '69.99 / hour', 65),

-- Tech Support
('service', 'Wi-Fi setup', 59.99, 'wifi-setup.jpg', 0, '59.99 / hour', 75),
('service', 'Smart home device installation', 79.99, 'smart-home-device-installation.jpg', 0, '79.99 / hour', 60),
('service', 'Computer troubleshooting', 89.99, 'computer-troubleshooting.jpg', 0, '89.99 / hour', 55),
('service', 'Home network optimization', 99.99, 'home-network-optimization.jpg', 0, '99.99 / hour', 50),

-- Personal Assistance
('service', 'Personal shopping', 79.99, 'personal-shopping.jpg', 0, '79.99 / hour', 60),
('service', 'Errand running', 69.99, 'errand-running.jpg', 0, '69.99 / hour', 65),
('service', 'Pet care', 89.99, 'pet-care.jpg', 0, '89.99 / visit', 55),
('service', 'Senior assistance', 99.99, 'senior-assistance.jpg', 0, '99.99 / hour', 50);

INSERT INTO ProductDetails (ProductType, productName, productPrice, productImage, productDiscount, productDescription, inventory)
VALUES
('tool', 'Screwdriver Set', 39.99, 'screwdriver-set.jpg', 0, 'Comprehensive set of screwdrivers for all your needs', 30),
('tool', 'Drill Machine', 89.99, 'drill-machine.jpg', 0, 'Powerful electric drill for various applications', 20),
('tool', 'Circular Saw', 129.99, 'circular-saw.jpg', 0, 'Versatile circular saw for precise cuts in various materials', 15),

('tool', 'Adjustable Wrench', 19.99, 'adjustable-wrench.jpg', 0, 'Durable adjustable wrench for versatile use', 40),
('tool', 'Hammer', 14.99, 'hammer.jpg', 0, 'Sturdy hammer for various carpentry tasks', 50),
('tool', 'Tape Measure', 9.99, 'tape-measure.jpg', 0, 'Accurate tape measure for precise measurements', 60);



UPDATE ProductDetails
SET productManufacturer = 'FreshFruitsCo'
WHERE productName IN ('Pineapple', 'Apple', 'Guava', 'Banana', 'Watermalon');

UPDATE ProductDetails
SET productManufacturer = 'ITC', productCondition = CASE WHEN RAND() > 0.5 THEN 'New' ELSE 'Old' END
WHERE productName IN ('Bath & body', 'colgate', 'veseline', 'Nivea Facewash');


UPDATE ProductDetails
SET productManufacturer = 'NewDairyCompany', productCondition = CASE WHEN RAND() > 0.5 THEN 'New' ELSE 'Old' END
WHERE productName IN ('Chedder_Chees', 'Milk', 'Yogart', 'Paneer');

UPDATE ProductDetails
SET productManufacturer = 'NewHotBevCo', productCondition = CASE WHEN RAND() > 0.5 THEN 'New' ELSE 'Old' END
WHERE productName IN ('Red Label Tea', 'Nascafe', 'WaghBakri', 'Mili Chai');

UPDATE ProductDetails
SET productManufacturer = 'NewSnacksCo', productCondition = CASE WHEN RAND() > 0.5 THEN 'New' ELSE 'Old' END
WHERE productName IN ('Lays', 'Lays_baked', 'Miss Vickie Jalapenos', 'Miss Vickie Sea & Salt', 'Sun Chips Garden & salsa', 'Sun Chips Chedder & Cheese', 'cheetos');
select * from registration;
select * from Productdetails;
select * from customerorders;

drop table Productdetails;

CREATE TABLE store (
	storeId varchar(80) not null primary key,
    storeName varchar(80),
    street varchar(80),
    city varchar(80),
    state varchar(80),
    zipcode varchar(6)
);
INSERT INTO store (storeId, storeName, street, city, state, zipcode)
VALUES
('1', 'Macy\'s Magnificent Mile', '835 N Michigan Ave', 'Chicago', 'IL', '60611'),
('2', 'Nordstrom Michigan Avenue', '55 E Grand Ave', 'Chicago', 'IL', '60611'),
('3', 'Water Tower Place', '835 N Michigan Ave', 'Chicago', 'IL', '60611'),
('4', 'Woodfield Mall', '5 Woodfield Mall', 'Schaumburg', 'IL', '60173'),
('5', 'Old Orchard Shopping Center', '4999 Old Orchard Center', 'Skokie', 'IL', '60077'),
('6', 'Fashion Outlets of Chicago', '5220 Fashion Outlets Way', 'Rosemont', 'IL', '60018'),
('7', 'Oakbrook Center', '100 Oakbrook Center', 'Oak Brook', 'IL', '60523'),
('8', 'Yorktown Center', '203 Yorktown Center', 'Lombard', 'IL', '60148'),
('9', 'Orland Square', '288 Orland Square Dr', 'Orland Park', 'IL', '60462'),
('10', 'Northbrook Court', '1515 Lake Cook Rd', 'Northbrook', 'IL', '60062'),
('11', 'The Promenade Bolingbrook', '631 E Boughton Rd', 'Bolingbrook', 'IL', '60440'),
('12', 'Westfield Hawthorn', '122 Hawthorn Center', 'Vernon Hills', 'IL', '60061'),
('13', 'Gurnee Mills', '6170 W Grand Ave', 'Gurnee', 'IL', '60031'),
('14', 'Fox Valley Mall', '195 Fox Valley Center', 'Aurora', 'IL', '60504'),
('15', 'Louis Joliet Mall', '3340 Mall Loop Dr', 'Joliet', 'IL', '60431');

select * from store;

CREATE TABLE EmployeeDetails (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100) UNIQUE,
    PhoneNumber VARCHAR(15),
    Address VARCHAR(255),
    Department VARCHAR(50),
    Position VARCHAR(50),
    Salary DECIMAL(10, 2),
    HireDate DATE
);

alter table EmployeeDetails
add column ImageURL VARCHAR(255)
