module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["import", "react-refresh", "simple-import-sort", "prettier"],
    rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true }
        ],
        "react/prop-types": "off",
        "prettier/prettier": ["error"]
    }
};
