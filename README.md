## Description

EduQuizz est une application full stack conçue pour faciliter l'utilisation de quizz en classe. Elle permet aux enseignants de créer facilement des quizz personnalisés et de les diriger en direct auprès de leurs élèves, qui peuvent accéder aux quizz en scannant un code QR. Les résultats des quizz sont enregistrés de manière efficace pour une utilisation ultérieure.

## Prérequis

-   Pour `php` il est nécessaire d'installé l'extension `imagick` pour `php` et `composer` pour utiliser le format `png` (utile pour les QR codes pour la librairie `simple-qrcode`)

## technologies

-   [x] React
-   [x] InertiaJS
-   [x] php 8.1.6
-   [x] Laravel 9
-   [x] TailwindCSS
-   [x] mysql 8.0.27
-   [x] docker
-   [x] docker-compose

## idees et fonctionnalités

-   [ ] Ajouter un système de points pour les élèves
-   [ ] Ajouter un système de classement pour les élèves
-   [ ] Ajouter un système de design pour les quizz

## UML Quizz avec BDD

-   users

    -   id
    -   name
    -   email
    -   email_verified_at
    -   role (admin, teacher, student) (enum)
    -   password
    -   remember_token
    -   created_at
    -   updated_at

-   quizzes

    -   id
    -   user_id
    -   title
    -   description?
    -   status
    -   create_at
    -   updated-at

-   questions

    -   id
    -   quiz_id
    -   question
    -   media
    -   media_type
    -   create_at
    -   updated-at

-   answers
    -   id
    -   question_id
    -   answer (string)
    -   is_correct (boolean)
    -   create_at
    -   updated-at

## design

**rejoindre un quizz**
![rejoindre un quizz](./docs/assets/001.jpg)

![quizz en cours](./docs/assets/002.jpg)
