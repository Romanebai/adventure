-- Création des tables
CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    alt TEXT NOT NULL,
    price INTEGER NOT NULL,
    city VARCHAR(255) NOT NULL,
    description TEXT,
    detailed_price TEXT,
    website VARCHAR(255),
    address TEXT,
    opening_hours VARCHAR(255)
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE activity_tags (
    activity_id INTEGER REFERENCES activities(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (activity_id, tag_id)
);

-- Insertion des données dans la table activities
INSERT INTO activities (title, image, alt, price, city, description, detailed_price, website, address, opening_hours) VALUES
('Planet Ocean', '/images/planetocean.jpg', 'image d''un pingouin', 2, 'Montpellier', 
'L’exploration du monde à portée de main. Embarquez pour une expédition à couper le souffle depuis l’immensité des océans vers l’infini de l’univers…', 
'Tarif adulte: 19,50€ - Tarif enfant: 14€', 'https://www.planetoceanworld.fr', 
'Planet Ocean Montpellier, Allée Ulysse Odysseum- CS 79561, 34960 Montpellier cedex 2', '10:00 - 18:00'),

('Loc''karting', '/images/karting.jpg', 'image d''un karting', 2, 'Pérols', 
'700 mètres d''asphalte, deux épingles, sept virages, une ligne droite. Dix minutes de course effreinée !', 
'Tarif adulte : 21,00€ une série de 10min', 'https://www.lockarting.fr', 
'Loc''karting, Route Departementale 172, Lieu-dit La Pailletrice, 34470 Pérols.', '14:00 - 18:00 la semaine et 10:00 - 18:00 le week-end'),

('Sport Break', '/images/sportbreak.jpg', 'image d''une escalade', 2, 'Baillargues', 
'Unique en France, Sport Break propose plus de 15 activités insolites sur plus de 2 000m2...', 
'1h: 16,00€, 2h: 25,00€, Illimité: 39,00€', 'https://www.sport-break.fr', 
'300 avenue de la Biste  34670 Baillargues', '10:00 - 13:00 puis 18:00 - 20:00 le dimanche'),

('Seaquarium', '/images/seaquarium.jpg', 'image d''un aquarium', 2, 'Le Grau-du-Roi', 
'Découvrez le Seaquarium du Grau-du-Roi, lieu de découverte et d’étonnement perpétuel...', 
'Tarif adulte: 17,00€ - Tarif enfant: 12,50€', 'https://www.seaquarium.fr', 
'Avenue du Palais de la Mer 30240 LE GRAU DU ROI', '9:30 - 18:30'),

('Prison Island', '/images/prison.jpg', 'image de prison island', 2, 'Maugio', 
'Une aventure en équipe inédite en France…entrez dans l’aventure !', 
'A partir de 19,90€', 'https://prisonisland-montpellier.fr', 
'45 Rue Roland Garros 34130 Mauguio', 'Variable selon les jours'),

('Zoo de Montpellier', '/images/zoo.jpg', 'image d''un animal', 0, 'Montpellier', 
'', 'Gratuit', 'https://zoo.montpellier.fr', 
'50 Av. Agropolis, 34090 Montpellier', '10:00 - 17:00'),

('Twist''air', '/images/twistair.jpg', 'image d''une personne qui vole', 3, 'Montpellier', 
'Avec Twist''air, vous volez dans un tube en verre transparent de 6m...', 
'A partir de 39€ pour les enfants et 59€ pour les adultes.', 'https://www.twist-air.com', 
'Zone commerciale Odysseum, Place des Grands Hommes, 34000 Montpellier.', '11:00 - 19:00 sauf le lundi et mardi'),

('Trampoline Park', '/images/trampoline.jpg', 'image du park de trampoline', 1, 'Lattes', 
'La salle de trampoline est le lieu idéal pour venir vous amuser...', 
'A partir de 9,00€', 'https://www.trampolinepark.fr/', 
'Rue Louis Lumière ZAC des Commandeurs, 34970 Lattes', 'Variable selon les jours'),

('Fort Boyard Aventure', '/images/fortboyard.jpg', 'image de l''escape game', 2, 'Montpellier', 
'Jouez à Fort Boyard Aventures l’action game officiel...', 
'Tarif adulte: 23,00€ - Tarif enfant: 18,00€', 'https://www.fortboyardaventures.fr/montpellier/', 
'Centre commercial Odysseum Pôle Ludique, 34000 Montpellier', '16:00 - 22:00'),

('OC''Aventures', '/images/accrobranche.jpg', 'image de l''accrobranche', 1, 'Saint-Jean-de-Cuculles', 
'Dans un espace naturel à St Jean de cuculles au pied du Pic St Loup...', 
'A partir de 10€ pour les enfants et 18€ pour les adultes.', 'http://www.oc-aventures.com', 
'Lieu dit le Boulidou, 34270 Saint-Jean-de-Cuculles', '14:00 - 19:00'),

('Au pays des carrioles', '/images/carrioles.jpg', 'image des carrioles', 1, 'La Boissière', 
'Ici vous trouverez un parc de loisirs à remonter le temps avec des jeux simples d’antan...', 
'A partir de 6,90€', 'https://aupaysdescarrioles.fr', 
'Mas Amadou, 34150 La Boissière', 'Actuellement fermé jusqu''en 2025');

-- Insertion des tags
INSERT INTO tags (name) VALUES 
('Family'), ('Animals'), ('Adventure'), ('Sport'), ('Game'), ('Discovery'), ('Thrill');

-- Association des tags aux activités (activity_tags)
INSERT INTO activity_tags (activity_id, tag_id) VALUES
(1, 1), (1, 2),
(2, 3), (2, 4), (2, 1), (2, 5),
(3, 3), (3, 4), (3, 1),
(4, 6), (4, 1), (4, 2),
(5, 3), (5, 1), (5, 5),
(6, 3), (6, 1), (6, 2),
(7, 3), (7, 7), (7, 4),
(8, 3), (8, 1), (8, 4),
(9, 6), (9, 1), (9, 5),
(10, 3), (10, 7), (10, 4), (10, 1),
(11, 3), (11, 6), (11, 1);
