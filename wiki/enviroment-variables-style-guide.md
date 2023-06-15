# Environment Variables Style Guide

This document serves as a style guide for managing environment variables in your Node.js and JavaScript projects using `.env.*` files and the `dotenv` package.

## Overview

We use environment variables to manage configurations that vary between deployment environments. These may include API keys, external service URIs, and other sensitive information.

## Files

We use the following `.env.*` files to separate common and environment-specific configurations:

- **.env**: This file contains sensitive information such as API keys, database passwords, etc. This file should never be committed to version control.
- **.env.example**: An example file that contains all environment variables needed for the project with dummy values. This file serves as a guide to other developers and should be committed to version control.
- **.env.development**: Contains configuration data specific to the development environment.
- **.env.production**: Contains configuration data specific to the production environment.
- **.env.test**: Contains configuration data specific to the test environment.
- **.env.gh_pages**: Contains configuration data specific to the GitHub Pages environment.
- **.env.secrets**: Contains sensitive configuration data specific to the development environment. This file should never be committed to version control.
- **.env.secrets.example**: An example file that contains all environment variables needed for the project with dummy values. This file serves as a guide to other developers and should be committed to version control.
- **.env.secrets.development**: Contains sensitive configuration data specific to the development environment.
- **.env.secrets.production**: Contains sensitive configuration data specific to the production environment.
- **.env.secrets.test**: Contains sensitive configuration data specific to the test environment.
- **.env.secrets.gh_pages**: Contains sensitive configuration data specific to the GitHub Pages environment.
- **.env.local**: Contains configuration data specific to the development environment. This file should never be committed to version control.
- **.env.local.example**: An example file that contains all environment variables needed for the project with dummy values. This file serves as a guide to other developers and should be committed to version control.
- **.env.local.development**: Contains configuration data specific to the development environment.
- **.env.local.production**: Contains configuration data specific to the production environment.
- **.env.local.test**: Contains configuration data specific to the test environment.
- **.env.local.gh_pages**: Contains configuration data specific to the GitHub Pages environment.
- **.env.local.secrets**: Contains sensitive configuration data specific to the development environment. This file should never be committed to version control.
- **.env.local.secrets.example**: An example file that contains all environment variables needed for the project with dummy values. This file serves as a guide to other developers and should be committed to version control.
- **.env.local.secrets.development**: Contains sensitive configuration data specific to the development environment.
- **.env.local.secrets.production**: Contains sensitive configuration data specific to the production environment.
- **.env.local.secrets.test**: Contains sensitive configuration data specific to the test environment.

## Using `dotenv`

We use the `dotenv` package to load environment variables from the `.env.*` files into `process.env` at runtime.
In your main application file (like `app.js` or `index.js`), add the following code at the top:

```javascript
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
```

This will load the environment variables from the `.env.*` file that matches the `NODE_ENV` value.

## Best Practices

1. **Never Commit Sensitive Data**: Files containing sensitive data (`.env.secrets`, `.env.development`, `.env.production`, `.env.test`, `.env.gh_pages`) should be included in your `.gitignore` file or equivalent to prevent them from being committed to version control.
2. **Use the .env.example File**: This file should be updated whenever a new environment variable is added to the project. It helps other developers understand which environment variables they need to provide.
3. **Use Specific Files for Specific Environments**: Each environment (development, production, test, GitHub Pages) should have its own `.env.*` file that contains its unique configurations.
4. **Load Variables at Runtime**: Use the `dotenv` package to load your environment variables at runtime. This helps keep your configuration flexible and your sensitive data secure.

## Pitfalls to Avoid

1. **Exposing Sensitive Data**: Be careful not to accidentally commit your `.env.secrets` file or any other `.env.*` file containing sensitive data to version control.
2. **Hardcoding Configurations**: Instead of hardcoding configurations within your code, use environment variables. This makes your application more flexible and secure.
3. **Missing Environment Variables**: Ensure that all necessary environment variables are properly defined in the appropriate `.env.*` files. Missing variables can lead to runtime errors.

Remember, managing environment variables properly is key to maintaining a secure, flexible, and effective application. Please adhere to this guide when working with `.env.*` files and the `dotenv` package.
