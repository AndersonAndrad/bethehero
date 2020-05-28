<p align="center">
  <img src="https://github.com/AndersonAndrad/betheheroFrontend/blob/master/src/assets/logo.svg" align="center">
</p>

<p align="center">
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-4.x-blue"></a>
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node-12.x-green"></a>
  <a href="http://knexjs.org/"><img src="https://img.shields.io/badge/Knex-0.x-orange"></a>
  <a href="https://nodemon.io/"><img src="https://img.shields.io/badge/Nodemon-2.x-red"></a>
</p>

:iphone: [Mobile](https://github.com/AndersonAndrad/betheheroMobile)

:computer:[Frontend](https://github.com/AndersonAndrad/betheheroFrontend)

# Be the hero (Backend)

###  :bulb: ​About the project

System for finding cases of ONGs in need of help, where they can detail information about cases.

The project was developed over the one week course of Rocketseat, from the eleventh edition of Omnistack.

### :memo: Project dependencies

- cors
- express 
- knex
- nodemon
- sqlite3
- sucrase

### 🚀 How to install the project

For this project your will need node 12v

Clone the project in your machine.

```
git clone https://github.com/AndersonAndrad/betheheroBackend.git
```

The run the following command

```
yarn install
or 
npm install
```

To run the database

```
yarn knex migrate:latest
```

### Routes

✅ **GET** `/ongs`

↩ **Response**

```json
{
    "id": "1e442d04",
    "name": "Ong",
    "email": "ong@ong.com",
    "whatsapp": "999999999",
    "city": "Brasilia",
    "uf": "DF"
  }
```

✅ **GET** `/incidents`

↩ **Response**

```json
{
    "id": 2,
    "title": "cachorro",
    "description": "teste cachorro",
    "value": 200,
    "ong_id": "9bd45919",
    "name": "ong",
    "email": "ong@ong.com",
    "whatsapp": "11999999999",
    "city": "sao paulo",
    "uf": "sp"
  },
```

✅ **GET** `/profile`

↩ **Response**

```json
{
    "id": 12,
    "title": "Dog",
    "description": "Dog to your help",
    "value": 10,
    "ong_id": "a45a1791"
  }
]
```

✅ **POST** `/incidents` (it is necessary to send a header with authorization with the id of the NGO)

↩ **Response**

```json
{
	"title":"Test",
	"description":"isso e um test",
	"value":456
}
```

✅ **POST** `/ongs`

↩ **Response**

```json
{
	"name":"APAD",
	"email":"APAD@outlook.com",
	"whatsapp":"9999-9999",
	"city":"sao paulo",
	"uf":"sp"
}
```

✅ **DELETE** `/incidents/id` 

↩ **Response**

### Project version

1.0

## 👤 Authors

| Anderson Andrade                                             |
| ------------------------------------------------------------ |
| <img src="https://avatars0.githubusercontent.com/u/31743641?s=400&u=b6d9e1c428279846440325b0fae90f4b9c4d1d98&v=4" width="110"> |
| <a href="https://github.com/AndersonAndrad">Github</a>       |
| <a href="https://www.linkedin.com/in/AndersonAndrad/">Linkedin</a> |

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/andersonandrad/betheherobackend/issues).

## Show your support

Give a ⭐️ if this project helped you!