# DDL: Data Definition Language

(LDD: Langage de Définition de Données)

### Display Tables:

```sql
SHOW TABLES;
```

### Create Table:

```sql
CREATE TABLE table_name (
    --structure of the table:
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    release_date DATE DEFAULT '2000-01-01'
);
```

- _the rule requires a name (id), a type (int) and then we can add conditions or constraints_
- _int = integar_
- _primary key makes the chosen key the reference to identify the line of the table_
- unsigned: we don't need use the first bit of ram to define if the number is positive or negative thus making it only positive and greater
- _auto-increment allows to automatically increment the value of the id_
- _varchar = variable character field, we have to precise the number of characters. The size is unfixed_
- _char: fixed size, faster_
- _date: must be in the YYYY-MM-DD format so you'll probably need to transform the user input to match that format_

### Display Tables:

```sql
SHOW TABLES;
```

### Display Structure of a Table:

```sql
DESCRIBE table_name;
```

```sql
SHOW CREATE TABLE table_name;
```
---
TODO:
Practice:

[x] create a table "director"
[x] id,
[x] firstname (not null),
[x] lastname (not null),
[x] age (must be legal),
[x] email (must be unique),
[x] date of birth (default),
[x] salary (must be a decimal)

_Solution:_

```sql
CREATE TABLE director(
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    age TINYINT UNSIGNED CHECK (age >= 18),
    email VARCHAR(255),
    date_of_birth DATE DEFAULT CURDATE(),
    salary DECIMAL
)
```

```sql
CREATE TABLE movie (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  title varchar(255) ,
  release_date date DEFAULT '2000-01-01',
  id_director int(10) unsigned 
)
```

<!-- ON S'EST TROMPE!!! -->
<!-- RENOMMER LA TABLE realisateur EN director -->
<!-- RENOMMER LA TABLE film EN movie -->
<!-- MODIFIER LA TABLE director pour ajouter la colonne pays d'origine => 'FR' -->
<!-- MODIFIER LA COLONNE salaire pour que le type soit DECIMAL(8,2) -->

<!-- MODIFIER LA TABLE movie POUR RAJOUTER LA CONTRAINTE UNIQUE SUR LE nom du film -->

<!-- CREER UNE TABLE test avec un id -->
<!-- SUPPRIMER LA TABLE test -->

```sql
ALTER TABLE realisateur RENAME TO director;
ALTER TABLE film RENAME TO movie;
ALTER TABLE director ADD COLUMN pays_d_origine VARCHAR(2) 'FR';
ALTER TABLE director MODIFY COLUMN salaire DECIMAL(8,2);
ALTER TABLE movie ADD CONSTRAINT unique_movie_name UNIQUE (nom);
CREATE TABLE test (
    id INT PRIMARY KEY
);
DROP TABLE test;

alter table movie drop constraint unique title

```

```sql
insert into  movie (title, release_date) values ('black Panters', '2002-07-23'), ('Avatar', '2002-12-09')
```

```sql
insert into director (firstname, lastname) values ('Ryan', 'Coogler'), ('James', 'Cameron');
```

> update director set age = 51 , email= 'quentintarantino@icloud.com',date_of_birth ='2000-10-07' salary = 40000 , country = 'USA'where id = 2;

```sql
select * from director where age  between 40 and 50 ;
```

```sql
select * from director where email and lastname  like    '%e%' and country in ('FR', 'UK') and  age > 30 ;

```


```sql
SELECT email, firsname director WHERE lastname LIKE '%e%' AND country IN ('FR', 'UK') AND age > 30;

```
AND 

```sql
SELECT * FROM director WHERE email LIKE '%e%' AND lastname LIKE '%e%' AND country IN ('FR', 'UK') AND age > 30;

et en TRIANT 


SELECT * FROM director WHERE email LIKE '%e%' AND lastname LIKE '%e%' AND country IN ('FR', 'UK') AND age > 30 order by email;

```