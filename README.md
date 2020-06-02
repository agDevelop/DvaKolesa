# Два колеса: Angular + MDBootstrap + Firebase (Realtime Database)

Разработка Интернет магазина велосипедов.

## Функционал

1. Регистрация пользователя с использованием Firebase Authentication (Используя электронную почту / Пароль)
2. Операции CRUD, такие как

- Пользователь может добавить товар в свою корзину.
- Администратор может добавить продукт в список продуктов
- Администратор может редактировать / удалять продукт.

1.  Security

- Реализована регистрация и авторизация

## Технологии

- Технологии: HTML, MDBootstrap, CSS, Angular, Firebase, jsPDF (для загрузки чека как PDF).
- База данных : Angular Firebase (Realtime Database).

# Установка

1.  Angular
2.  NodeJs
3.  Package Manager - NPM
4.  Активируйте аутентификацию в Firebase Authentication Providers

    `Authentication -> Sign-in-method -> Enable Email/Password & Google provider`

5.  Измените правила для Firebase _(Realtime Database)_

    `Database -> Rules`

    ```
    {
    "rules": {
        ".read":true,
        ".write": true
    }
    }
    ```

6.  Настройте файл с конфигурацией firebaseConfig.ts `src/environments/firebaseConfig.ts`

    ```
    export const FireBaseConfig = {
        apiKey: "API_KEY",
        authDomain: "AUTH_DOMAIN",
        databaseURL: "DATABASE_URL",
        projectId: "PROJECT_ID",
        storageBucket: "STORAGE_BUCKET",
        messagingSenderId: "SENDER_ID"
    };
    ```

7.  Чтобы создать администратора зарегистрируйтесь и поменяйте поле isAdmin в строке нужного пользователя в таблице clients

    ```
        -clients
            -LRSkWxGAKQAFZmyfsx6
                -createdOn: "1542046725"
                -email: "EMAIL_ID"
                -isAdmin: false      <- true
                ...
    ```

8. Выполните компанду ng serve в папке с проектом
