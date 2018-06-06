export default {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["plugin:vue/essential", "airbnb", "eslint:recommended"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
