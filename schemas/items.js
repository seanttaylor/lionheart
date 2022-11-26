export default {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "id",
        "name",
        "descriptionText",
        "points",
        "element",
        "itemType",
        "createdDate",
        "lastModified"
    ],
    "properties": {
        "id": {
            "type": "string",
            "default": "",
            "title": "The id Schema",
            "examples": [
                "items:3afb1092-4017-4027-b35e-559a0ed2bcd2"
            ]
        },
        "name": {
            "type": "string",
            "default": "",
            "title": "The name Schema",
            "examples": [
                "Elixir"
            ]
        },
        "descriptionText": {
            "type": "string",
            "default": "",
            "title": "The descriptionText Schema",
            "examples": [
                "Restores player health points"
            ]
        },
        "points": {
            "type": "integer",
            "default": 0,
            "title": "The points Schema",
            "examples": [
                25
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
                    "water"
                ]
            },
            "examples": [
                [
                    "water"]
            ]
        },
        "itemType": {
            "type": "array",
            "default": [],
            "title": "The itemType Schema",
            "items": {
                "type": "string",
                "default": "",
                "title": "A Schema",
                "examples": [
                    "medicine"
                ]
            },
            "examples": [
                [
                    "medicine"]
            ]
        },
        "createdDate": {
            "type": "string",
            "default": "",
            "title": "The createdDate Schema",
            "examples": [
                "2022-10-01T19:47:13.884Z"
            ]
        },
        "lastModified": {
            "type": "null",
            "default": null,
            "title": "The lastModified Schema",
            "examples": [
                null
            ]
        }
    },
    "examples": [{
        "id": "items:3afb1092-4017-4027-b35e-559a0ed2bcd2",
        "name": "Elixir",
        "descriptionText": "Restores player health points",
        "points": 25,
        "element": [
            "water"
        ],
        "itemType": [
            "medicine"
        ],
        "createdDate": "2022-10-01T19:47:13.884Z",
        "lastModified": null
    }]
}