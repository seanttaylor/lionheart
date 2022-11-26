export default {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "name",
        "descriptionText",
        "id",
        "characterType",
        "healthPoints",
        "damagePoints",
        "inventory",
        "element",
        "locales"
    ],
    "properties": {
        "name": {
            "type": "string",
            "default": "",
            "title": "The name Schema",
            "examples": [
                "Royal Guard"
            ]
        },
        "descriptionText": {
            "type": "string",
            "default": "",
            "title": "The descriptionText Schema",
            "examples": [
                "A member of the Royal Guard Corps"
            ]
        },
        "id": {
            "type": "string",
            "default": "",
            "title": "The id Schema",
            "examples": [
                "characters:c8886892-f44c-4578-ae66-c44c3e7bf8c9"
            ]
        },
        "characterType": {
            "type": "array",
            "default": [],
            "title": "The characterType Schema",
            "items": {
                "type": "string",
                "default": "",
                "title": "A Schema",
                "examples": [
                    "enemy"
                ]
            },
            "examples": [
                [
                    "enemy"]
            ]
        },
        "healthPoints": {
            "type": "integer",
            "default": 0,
            "title": "The healthPoints Schema",
            "examples": [
                100
            ]
        },
        "damagePoints": {
            "type": "integer",
            "default": 0,
            "title": "The damagePoints Schema",
            "examples": [
                25
            ]
        },
        "inventory": {
            "type": "array",
            "default": [],
            "title": "The inventory Schema",
            "items": {
                "type": "string",
                "default": "",
                "title": "A Schema",
                "examples": [
                    "items:d2514a27-1583-490e-8ebd-09d2c1445337"
                ]
            },
            "examples": [
                [
                    "items:d2514a27-1583-490e-8ebd-09d2c1445337"]
            ]
        },
        "element": {
            "type": "array",
            "default": [],
            "title": "The element Schema",
            "items": {
                "type": "string",
                "default": "",
                "title": "A Schema",
                "examples": [
                    "earth"
                ]
            },
            "examples": [
                [
                    "earth"]
            ]
        },
        "locales": {
            "type": "array",
            "default": [],
            "title": "The locales Schema",
            "items": {
                "type": "string",
                "default": "",
                "title": "A Schema",
                "examples": [
                    "locations:54bd2859-8b74-4079-8fae-e11c459781ec"
                ]
            },
            "examples": [
                [
                    "locations:54bd2859-8b74-4079-8fae-e11c459781ec"]
            ]
        }
    },
    "examples": [{
        "name": "Royal Guard",
        "descriptionText": "A member of the Royal Guard Corps",
        "id": "characters:c8886892-f44c-4578-ae66-c44c3e7bf8c9",
        "characterType": [
            "enemy"
        ],
        "healthPoints": 100,
        "damagePoints": 25,
        "inventory": [
            "items:d2514a27-1583-490e-8ebd-09d2c1445337"
        ],
        "element": [
            "earth"
        ],
        "locales": [
            "locations:54bd2859-8b74-4079-8fae-e11c459781ec"
        ]
    }]
}