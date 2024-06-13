# Exercice avec une base de données pour des figurine Avengers :


Créez une base de données avec le nom avengers_db :
```sql
CREATE TABLE figurine (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    super_pouvoir VARCHAR(100),
    annee_sortie INT,
    description TEXT
);

```
Sélectionnez la base de données nouvellement créée :
Créez la table "figurine" avec des colonnes telles que "id" (clé primaire), "nom", "super_pouvoir", "annee_sortie" et "description" :
Insérez des données dans la table "figurine" pour représenter des figurine Avengers :
('Iron Man', 'Armure surpuissante', 2008, 'Milliardaire et génie inventeur.'),
('Captain America', 'Force et endurance surhumaines', 2011, 'Héros emblématique de la Seconde Guerre mondiale.'),
('Thor', 'Contrôle de la foudre et marteau magique', 2011, 'Dieu nordique du tonnerre et prince d'Asgard.'),
('Hulk', 'Force et résistance surhumaines', 2008, 'Scientifique transformé en monstre vert lorsqu'il est en colère.'),
('Black Widow', 'Expert en arts martiaux et espionnage', 2010, 'Agent secret russe doté de grandes compétences.'),
('Black Panther', 'Force, vitesse et agilité surhumaines', 2018, 'Roi du Wakanda et protecteur de son peuple.');

```sql
INSERT INTO figurine (nom, super_pouvoir, annee_sortie, description) VALUES ('Iron Man', 'Armure surpuissante', 2008, 'Milliardaire et génie inventeur.'),   
('Captain America', 'Force et endurance surhumaines', 2011, 'Héros emblématique de la Seconde Guerre mondiale.'), ('Thor', 'Contrôle de la foudre et marteau magique', 2011, 'Dieu nordique du tonnerre et prince d''Asgard.'),
('Hulk', 'Force et résistance surhumaines', 2008, 'Scientifique transformé en monstre vert lorsqu''il est en colère.'), ('Black Widow', 'Expert en arts martiaux et espionnage', 2010, 'Agent secret russe doté de grandes compétences.'), ('Black Panther', 'Force, vitesse et agilité surhumaines', 2018, 'Roi du Wakanda et protecteur de son peuple.');
```

Effectuez des requêtes pour afficher les figurine Avengers :
Afficher toutes les figurine :

```sql
SELECT * FROM figurine;

```
    
Afficher les figurine sorties après 2010 :

```sql
SELECT * FROM figurine WHERE annee_sortie > 2010;

```

    
Afficher les figurine avec le pouvoir "Force" dans leur super_pouvoir :
```sql
SELECT * FROM figurine WHERE super_pouvoir LIKE '%Force%';

```

Modifiez une figurine dans la table "figurine" :
Modifiez la description de "Black Panther" pour "Prince de Wakanda et protecteur de son peuple."

```sql
UPDATE figurine SET  description = 'Prince de Wakanda et protecteur de son peuple.' WHERE nom = 'Black Panther';

```

Supprimez la figurine Black Widow de la table "figurine" :

```sql
DELETE FROM figurine where nom = 'Black widow';
```