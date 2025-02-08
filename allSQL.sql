SELECT * FROM Customers
WHERE NOT Country = 'Spain';


SELECT * FROM Products
ORDER BY Price;

SELECT *
FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%';


SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NOT NULL;

SELECT MAX(Price)
FROM Products;

SELECT MIN(Price) AS SmallestPrice
FROM Products; 

SELECT COUNT(ProductID)
FROM Products
WHERE Price > 20;

===
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;

UPDATE Customers
SET ContactName='Juan'
WHERE Country='Mexico';

DELETE FROM Customers 
WHERE CustomerName='Alfreds Futterkiste';

DROP TABLE Customers;
===