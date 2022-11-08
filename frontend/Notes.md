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

3. Node.js

4. MongoDB (alt setup can be PostgreSQL)

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

# Creating a Page Layout Components

How pages work:

-   All of the HTML elements in the page gets dumped into the body

To create a layout component (i.e. <head>, <nav>) which shows up on every page:

-   Import a page component, which we will use to wrap our pages
-   Pass the children as props
-   Set up the prop types

To override the default App:
<https://nextjs.org/docs/advanced-features/custom-app>

-   Create an \_app.js file inside the pages folder, spread pageProps into the Component prop which is passed into MyApp component
-   Kill/restart frontend dev build

To override the default Document (can be class/functional):
<https://nextjs.org/docs/advanced-features/custom-document>

-   Create an \_document.js file inside the pages folder
-   Create an Html, Head, Body, Main, NextScript tags (boilerplate)

# Creating our Header and Nav components

How do you link from page to page?

-   Use a <Link> tag (NextJS) which we can import from 'next/link' rather than an <a> tag
-   Set up a Nav component containing all of the links
-   Import Nav into our Header (which will end up in our Page)

When do you use an anchor tag?

-   If we are linking to something that is not part of our website

# Intro to Styled Components and CSS

Styled components

-   Allows us to write scoped CSS
-   Relevant in all frameworks (Vue, Angular, etc.)

How it works:

-   You define your CSS in components as well
-   If styles are re-used, then put each styled component in its own file within the styles subfolder and import the styled components as needed, and replace HTML tags with styled tags (i.e. Logo instead of h1)
-   Otherwise, keep the styled component within the component itself to minimize number of files

Benefits:

1. We can scope our CSS really easily
2. You can use JS values inside of CSS (i.e. variable thats part of state/react app)
