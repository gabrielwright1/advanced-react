# Tech Stack

## Frontend

1. React

-   Library for building user interfaces
-   Takes data, puts them into templates, renders them to DOM
-   As data updates, updates the page

2. Next.js

-   Framework for React
-   Adds: routing, linking, pages, static rendering, server rendering, images

3. Apollo Client

-   Interface with GraphQL API
-   Adds: data loading, caching, loading states, error states

4. Styled Components

-   Modular/scoped CSS in React applications
-   Adds: pagination, reusable styles
-   Applicable to other CSS/JS frameworks

## Backend

1. Keystone.js

-   Headless CMS - allows us to login and interface with our data, datatypes, photos, etc.
-   Gives us a GraphQL API to query

2. Apollo

-   Enables us to make GraphQL queries (CRUD)
-   Fetches and injects data into our React App

3.  Node.js

4.  MongoDB (alt setup can be PostgreSQL)

# Intro to NextJS

Start server:

-   npm run dev

Setup the pages:

-   Each page gets an index.js file which exports a React function which shows up on page
-   Uses file system based routing (rather than config based routing i.e. ReactRouter)
-   Enables hot-reloading for JS/CSS (doesn't need to restart server)
-   Nice error messages (make sure to name each React function)

Server rendered (opt-in):

-   If you go to a NextJS website and view source you would see all the HTML for the rendered production version which React rehydrates on the frontend
-   Good for SEO, or if someone has JS turned off

Static rendered (opt-in):

-   Pre-rendered at build time so that they load really quickly

Data fetching hooks (covered in course):

-   getStaticProps
-   getServerSideProps
-   getInitialProps
