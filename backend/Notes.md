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

Creating two-way data relationships:

- Create a product field on the product image, create a ref to product datatype
- Create a photo field on the product, create a ref to the product image

Creating views:

- Within the ProductImage.ts file, add a ui property and set the listView's initialColumns to an array containing fields (this will impact what is shown in the Keystone dashboard)

# Inserting Seed Data

Why is this useful?

- If we're debugging 'delete' mutations and we need sample data to fill the database using a command

How to set it up?

- Create a seed data and index.ts file in a seed folder
- In the keystone.ts file, add an onConnect method to the db config
- In the onConnect method, add logic to check for seed data in the process arguments, if so, run the insertSeedData function exposed in the index.ts file
- In package.json, create a seed data command under scripts which calls the --seed-data flag when we run the server with keystone-next

To create your own products seed file:

- Add products/images to the keystone dashboard
- Open MongoDB Compass, find the list of products, export full collection, to JSON
- Use the export to fill in the products in the data.ts file

# Emails

What is a transporter?

- It allows us to hook into an SMTP API and send out emails
- When sending an email in dev, use a fake service (i.e. Mailtrap or Ethereal + PostMark)

How to create an interface?

- Using the response from the fake SMTP, paste it into 'https://jvilk.com/MakeTypes/' as a string, and convert into a Typescript Interface which we can use in the 'mail.ts' file to create the MailResponse

# Adding to cart logic

- If we add two of the same item, we want the cart to increment the quantity, rather than create a new item
- To do this, we need to extend the graphQL schema to write a custom mutation
