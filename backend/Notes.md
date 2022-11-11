# Setting up MongoDB

- Rename the sample.env to .env
- Create a cluster/project and grab the mongoURI connection string

# Intro to GraphQL

What is GraphQL?

- There's two keywords: queries, mutations
- It is a specification for requesting/pushing data updates to a server
- It has its own syntax, similar to JS objects
- It has its own docs built-in

What is Keystone?

- A CMS layer on top of a database built using GraphQL

Writing a GraphQL query:

- Queries are relational (i.e. allUsers > cart > product)
- If we were looking at all products, you need to specify which properties
- Given that GraphQL is typed, you get an intellisense dropdown
- It saves you from having to make a bunch of REST endpoints for each query
- You can do multiple queries at once

Writing a GraphQL mutation:

- Write/update information in the database (i.e. reset password)

# Setting up Keystone + Typescript

Benefits of Typescript:

- Autocomplete
- Code highlighting

Setting up a keystone config:

1. Import dotenv giving us access to environment variables
2. Set up database url and fallback
3. Set up session configuration, age of JWT, cookie secret
4. Set up boilerplate for config
5. Run the backend, npm run dev, and make sure keystone is working

What are lists?

- Keystone refers to datatypes as lists (users, products, etc.)

Why use named exports?

- It makes auto-import a bit more consistent

# Uploading Product Images

Why use Cloudinary?

- Resizes things based on width/height
- Changes filetypes from PNG to WebP
- Connects to Next.js image tag
