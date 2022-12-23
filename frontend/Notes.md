# Tech Stack

## Frontend

1. React

- Library for building user interfaces
- Takes data, puts them into templates, renders them to DOM
- As data updates, updates the page

2. Next.js

- Framework for React
- Adds: routing, linking, pages, static rendering, server rendering, images

3. Apollo Client

- Interface with GraphQL API
- Adds: data loading, caching, loading states, error states

4. Styled Components

- Modular/scoped CSS in React applications
- Adds: pagination, reusable styles
- Applicable to other CSS/JS frameworks

## Backend

1. Keystone.js

- Headless CMS - allows us to login and interface with our data, datatypes, photos, etc.
- Gives us a GraphQL API to query

2. Apollo

- Enables us to make GraphQL queries (CRUD)
- Fetches and injects data into our React App

3. Node.js

4. MongoDB (alt setup can be PostgreSQL)

# Intro to NextJS

Start server:

- npm run dev

Setup the pages:

- Each page gets an index.js file which exports a React function which shows up on page
- Uses file system based routing (rather than config based routing i.e. ReactRouter)
- Enables hot-reloading for JS/CSS (doesn't need to restart server)
- Nice error messages (make sure to name each React function)

Server rendered (opt-in):

- If you go to a NextJS website and view source you would see all the HTML for the rendered production version which React rehydrates on the frontend
- Good for SEO, or if someone has JS turned off

Static rendered (opt-in):

- Pre-rendered at build time so that they load really quickly

Data fetching hooks (covered in course):

- getStaticProps
- getServerSideProps
- getInitialProps

# Creating a Page Layout Components

How pages work:

- All of the HTML elements in the page gets dumped into the body

To create a layout component (i.e. <head>, <nav>) which shows up on every page:

- Import a page component, which we will use to wrap our pages
- Pass the children as props
- Set up the prop types

To override the default App:
<https://nextjs.org/docs/advanced-features/custom-app>

- Create an \_app.js file inside the pages folder, spread pageProps into the Component prop which is passed into MyApp component
- Kill/restart frontend dev build

To override the default Document (can be class/functional):
<https://nextjs.org/docs/advanced-features/custom-document>

- Create an \_document.js file inside the pages folder
- Create an Html, Head, Body, Main, NextScript tags (boilerplate)

# Creating our Header and Nav components

How do you link from page to page?

- Use a <Link> tag (NextJS) which we can import from 'next/link' rather than an <a> tag
- Set up a Nav component containing all of the links
- Import Nav into our Header (which will end up in our Page)

When do you use an anchor tag?

- If we are linking to something that is not part of our website

# Intro to Styled Components and CSS

Styled components

- Allows us to write scoped CSS
- Relevant in all frameworks (Vue, Angular, etc.)

How it works:

- You define your CSS in components as well
- If styles are re-used, then put each styled component in its own file within the styles subfolder and import the styled components as needed, and replace HTML tags with styled tags (i.e. Logo instead of h1)
- Otherwise, keep the styled component within the component itself to minimize number of files

Benefits:

1. We can scope our CSS really easily
2. You can use JS values inside of CSS (i.e. variable thats part of state/react app)

# Global Styles, Typography, Layout Styles

How do we create base (i.e. colors, styles) styles?

- Create a GlobalStyles component using 'createGlobalStyle' from styled components
- Setup CSS variables on the html or :root selectors for colors, max width, box shadow
- Create an @font-face selector for font details
- Within the body, set the font-family with our new font, and the '-app' autocompletion font stack as the fallback
- Apply the styles by adding a <GlobalStyles /> component to the page

# Visualizing Router Changes

Instances where we hook into the Router:

- Listen for events
- Programmatically change the page (buy something and load order page)

Package for loader animation:

- NProgress

# Fixing Styled Component Flicker on Server Rendering

When you see an error "Warning: Prop "className" did not match.":

- The server renders it one way, the client renders it another way
- This occurs because styled components is creating random IDs for components and when it hits the frontend, it creates a new random ID
- When you reload frequently, styling doesnt apply (flicker), we need to render the styles on the server

To fix the issue:

- Adapt TS logic: <https://styled-components.com/docs/advanced#with-babel>, it uses getInitialProps in the \_document.js to accept context, collect styles from each component, and render them on the server

# Wierd errors related to server/client ids mismatching

- Kill the build
- Find the .next folder cache, delete it
- Restart build

# Intro to Apollo Client

What does it do?

- Talks to GraphQL API
- Handles: Queries/Mutations, Caching, Errors

How does it work?

- Apollo Client is made up of links (see withData file in lib folder)
- Each link is responsible for handling how to deal with outgoing requests to get/update data, responses, caches
- Wrapped up in Apollo-Boost package (excl. image uploads - we need createUploadLink package for this to work)
- The Apollo Client config (see lib/withData.js) is mostly boilerplate

createUploadLink method explained (see createClient in lib/withData.js):

- We ensure that the client server-side renders the UI in a logged-in state by passing along the 'headers' with each request (as a cookie), rather than saving the JWT to localstorage, because localstorage can't be sent to the server

How cache works in browser:

- As you click between pages, the browser add/pulls from the cache
- If you hard refresh the page, the cache is lost

What are type policies:

- TBD - Find out later

What is the restore method?

- Restores any initial state (if it exists)
- Uses data from the Apollo Client server to hydrate the frontend Apollo Client

What does the package withApollo do?

- Allows us to crawl our pages/components
- Identify queries (i.e. products, users)
- Waits for fetch to complete before sending the HTML from server to client

What does withData do?

- Once we set up our app to be wrapped in the Apollo provider
- We use the withData function to wrap our app
- The 'restore' method restores the initial state using the SSR'd HTML sent from the server (render on server, rehydrate on client)

# Fetching Data, Hooks, Displaying

How to quickly navigate to a file:

- Search filestructure: CTRL + SHIFT + F
- QuickLink: HOLD CTRL + Click file name
- Open searchbar: CTRL + T

Where to put utility functions:

- Within the lib folder

How to handle forms?

- When you don't need all the bells/whistles of a form library, create a useForm hook for syncing state of inputs, store it in the lib folder

# Form Styling

How to show loading animation?

- Leverage the 'aria-busy=true' tag to represent when something is loading and use it to play a loader animation
- Use a fieldset to disable multiple elements of the form at once

# Creating products using mutations

What is the useMutation hook?

- Returns a tuple containing two values: 1) Mutate function, 2) Mutation result object {data, error, loading}

What is the useQuery hook?

- Returns an object containing results {data, error, loading}

What is a nested create?

- It allows us to create something like a photo and a product at the same time in a mutation (i.e. photo: {create: {image: $image, altText: $name}})

# Refetching queries after a successful mutation

What is an 'optimistic update'?

- Manually inject a new mutation into the cache so that it triggers a refresh on the frontend
- Shows the user that the post was successful (i.e. posting a tweet) eventhough it may take a moment to update on the server side.
- Followers will see the update on their next network refresh
- Alternative: Refetch the query after the mutation, which can be specified as part of the useMutation hook

# Changing page after product creation

How to programatically change the page:

- Import Router from next.js
- Use the 'push' method to make the browser change the URL pathname

# Displaying Single Items, Routing, and SEO

What is the [id].js file?

- Uses a template for anything that matches the pattern '/product/...', this is specific to Next.js

What is the significance of the 'SingleProduct' component?

- Given that it has a built-in GraphQL query, it allows us to put the component wherever we want it will know details about a product as long we pass it an id from the database
- It will also know how to display the data (data, loading, error, etc.)

# Working with Mutations | Updating Items

Steps to create an update form:

1. We need to get the existing product
2. We need to get the mutation to update the product
3. Create some state for our form inputs
4. We need the form to handle the updates

What do we do if there's more than one query/mutation in a component?

- Rename the data/loading/error variables to something more specific (i.e. {data: updateData, loading: updateLoading, error: updateError })

# Pagination

Steps required:

1. Render the actual links
2. Allow for dynamic routing
3. Filter the products for the current page
4. Deal with cache invalidation

# Querying current user

What is a union?

- If we query for authenticatedItem, it returns two different types
- Therefore, we need to use the '... on' syntax in GraphQL to specify which properties to return from each subtype (i.e. query Media { ... on TvShow { episodeCount } ... on Movie { time }})

# Authentication

When sending example emails:

- Use the domain @example.com, it is set up for test purposes and will keep you from accidentally sending someone an email

What to do when you get a bunch of uncaught errors in auth?

- Given that we're using the useMutation hook which stores the error in the {error, data, loading}, we can avoid crashing the app by replacing the signup method with
  'const res = await signup().catch(console.error);'

# Reset Password flow

How it works?

- Backend generates a random token
- You're emailed a link with the token in the URL
- When you try to reset the password, you pass in your email, new password, your token, and checks that your token has been issued in the last half/hour

How to set up the 'Request Reset' mutation?

- Open up the keystone.ts file in the backend
- In the withAuth method, add a property for 'passwordResetLink'
- Create a mutation using the 'sendUserPasswordResetLink' field which returns a code/message
- When the frontend form triggers the mutation, it returns null and logs the token to the server console

# React Context

What is it?

- It allows us to define data (local state) and functionality (update functions) at a very high level
- Access the data/functionality at much lower levels without having to pass via props

How does it work?

- It involves information being passed between a provider (context) and a consumer (useContext)
- We write a custom hook which leverages the useContext hook to connect our component to our local state provider
- You can create helper functions within the provider, and expose them via props

# Search Functionality

Library used:

- Downshift.js

# Permissions

- Checkboxes which determine whether someone can do something

## Roles

Admin

- manageUser
- manageProducts

Editor

- readProducts
- deleteProducts

Access

- permissions - yes/no
- filter functions - query a subset
  { where: user: {id: ID}}

# Testing

About Jest:

- Jest watches your git commit and re-runs on files that have changes
- Jest (extension) runs the tests in the IDE rather than terminal (this may be something that I use in the future)
