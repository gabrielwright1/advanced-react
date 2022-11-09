# Setting up MongoDB

-   Rename the sample.env to .env
-   Create a cluster/project and grab the mongoURI connection string

# Intro to GraphQL

What is GraphQL?

-   There's two keywords: queries, mutations
-   It is a specification for requesting/pushing data updates to a server
-   It has its own syntax, similar to JS objects
-   It has its own docs built-in

What is Keystone?

-   A CMS layer on top of a database built using GraphQL

Writing a GraphQL query:

-   Queries are relational (i.e. allUsers > cart > product)
-   If we were looking at all products, you need to specify which properties
-   Given that GraphQL is typed, you get an intellisense dropdown
-   It saves you from having to make a bunch of REST endpoints for each query
-   You can do multiple queries at once

Writing a GraphQL mutation:

-   Write/update information in the database (i.e. reset password)
