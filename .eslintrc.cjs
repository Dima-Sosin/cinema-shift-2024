module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: [
        "dist",
        "node_modules",
        "/.git",
        "/.vscode",
        ".eslintrc.cjs",
        "vite.config.js",
        "package.json",
        "package-lock.json"
    ],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["import", "react-refresh", "simple-import-sort"],
    rules: {
        "import/prefer-default-export": "off",
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true }
        ],
        "react/prop-types": "off",
    },
    overrides: [
        {
            files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
            rules: {
                "simple-import-sort/exports": "error",
                "simple-import-sort/imports": [
                    "error",
                    {
                        groups: [
                            ["^.+\\.?(css)$"],
                            ["^react", "^\\w"],
                            ["^@\\w"],
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
                        ]
                    }
                ]
            }
        }
    ]
};
