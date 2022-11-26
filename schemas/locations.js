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
        "items",
        "paths"
    ],
    "properties": {
        "name": {
            "type": "string",
            "default": "",
            "title": "The name Schema",
            "examples": [
                "Ancient Gale"
            ]
        },
        "descriptionText": {
            "type": "string",
            "default": "",
            "title": "The descriptionText Schema",
            "examples": [
                "An ancient gale."
            ]
        },
        "id": {
            "type": "string",
            "default": "",
            "title": "The id Schema",
            "examples": [
                "locations:71e427db-6f80-4c96-b635-661a6ac799c5"
            ]
        },
        "items": {
            "type": "array",
            "default": [],
            "title": "The items Schema",
            "items": {
                "type": "string",
                "title": "A Schema",
                "examples": [
                    "items:3afb1092-4017-4027-b35e-559a0ed2bcd2",
                    "items:13b6e7a9-2814-4a4e-b816-03f3f941e273",
                    "items:c8886892-f44c-4578-ae66-c44c3e7bf8c9"
                ]
            },
            "examples": [
                ["items:3afb1092-4017-4027-b35e-559a0ed2bcd2",
                    "items:13b6e7a9-2814-4a4e-b816-03f3f941e273",
                    "items:c8886892-f44c-4578-ae66-c44c3e7bf8c9"
                ]
            ]
        },
        "paths": {
            "type": "object",
            "default": {},
            "title": "The paths Schema",
            "required": [
                "north",
                "east",
                "south",
                "west"
            ],
            "properties": {
                "north": {
                    "type": "string",
                    "default": "",
                    "title": "The north Schema",
                    "examples": [
                        "locations:6102e74b-ec68-48c4-afbc-a430ab1bfccb"
                    ]
                },
                "east": {
                    "type": "string",
                    "default": "",
                    "title": "The east Schema",
                    "examples": [
                        "locations:817dc47a-3fe5-4f5c-a250-c62fd5909a44"
                    ]
                },
                "south": {
                    "type": "string",
                    "default": "",
                    "title": "The south Schema",
                    "examples": [
                        "locations:8089f65e-237c-48a7-ae3d-d6bb5afa0df8"
                    ]
                },
                "west": {
                    "type": "string",
                    "default": "",
                    "title": "The west Schema",
                    "examples": [
                        "locations:24c13f2c-9f83-4105-8b6e-c6505b53462d"
                    ]
                }
            },
            "examples": [{
                "north": "locations:6102e74b-ec68-48c4-afbc-a430ab1bfccb",
                "east": "locations:817dc47a-3fe5-4f5c-a250-c62fd5909a44",
                "south": "locations:8089f65e-237c-48a7-ae3d-d6bb5afa0df8",
                "west": "locations:24c13f2c-9f83-4105-8b6e-c6505b53462d"
            }]
        }
    },
    "examples": [{
        "name": "Ancient Gale",
        "descriptionText": "An ancient gale.",
        "id": "locations:71e427db-6f80-4c96-b635-661a6ac799c5",
        "items": [
            "items:3afb1092-4017-4027-b35e-559a0ed2bcd2",
            "items:13b6e7a9-2814-4a4e-b816-03f3f941e273",
            "items:c8886892-f44c-4578-ae66-c44c3e7bf8c9"
        ],
        "paths": {
            "north": "locations:6102e74b-ec68-48c4-afbc-a430ab1bfccb",
            "east": "locations:817dc47a-3fe5-4f5c-a250-c62fd5909a44",
            "south": "locations:8089f65e-237c-48a7-ae3d-d6bb5afa0df8",
            "west": "locations:24c13f2c-9f83-4105-8b6e-c6505b53462d"
        }
    }]
}