# Employee Directory Exercise

This application is built using React, Node, and GraphQL. A serverless build is deployed to [https://postlight.rocks](https://postlight.rocks).


## Setup

**To run locally**

1. Clone this repository.
1. Set up a Graphcool GraphQL database using the [instructions below](#setting-up-a-graphcool-backend), or provide your own GraphQL endpoint.
1. Install dependencies with `npm install` or `yarn`.
1. Run the development server with `npm start`. This will start the app at [http://localhost:3000](http://localhost:3000).

**To run in production**

1. Run `npm run build`.
1. Upload the contents of the `build` directory to the hosting provider of your choice.
1. Set an environment variable for your GraphQL endpoint. The name of the variable is `REACT_APP_GRAPHCOOL_URI`, and the value is your GraphQL API endpoint.


## Build Overview

This app is based on the [react-admin](https://github.com/marmelab/react-admin), which is a framework for setting up simple admin interfaces with sensible defaults. Its foundation is [create-react-app](https://github.com/facebook/create-react-app), and it makes use of [Material UI](https://material-ui.com), [redux](https://redux.js.org), and [react-router](https://reacttraining.com/react-router).

[Graphcool](https://graph.cool)'s implementation of GraphQL was chosen as a backend due to its opinionated and simple setup.

The production site ([postlight.rocks](https://postlight.rocks)) is deployed on Zeit's [Now](https://zeit.co/now) platform, which allows for simple serverless deployments.


## Features

The app is an employee directory populated with fictitious employee information. The following features are included:

* Sort by column
* Search by name
* Pagination, and show 5, 10, or 25 rows per page
* Export current search results to CSV, defaults to all if no search term entered
* Ability to create, update, delete records if logged in (currently any email address and password are accepted as valid login credentials)
* Responsive layout


## What's Missing

The following are limitations of the current implementation:

**Missing Features**

* Authentication — currently accepting any combination of email address and password
* Restricted database permissions (because of missing authentication)
* Ability to add a profile photo to a contact. Currently using random pictures from [avatars.adorable.io](http://avatars.adorable.io)
* App loading indicator (instead of "Loading! Please wait..." text)
* Ability to view by Department and Title
* Ability to search by any field/full-text search and ability to use operators for advanced search
* Tests — Jest is set up, just verifies that app renders without crashing
* TypeScript or flesh out prop types

**Missing Styling**

* Contact card, currently very basic
* Top bar, alignment of elements not correct
* Overall styling, still clearly Material design

## Related Links

* [react-admin](https://github.com/marmelab/react-admin) package by [Marmelab](https://marmelab.com)
* [Graphcool Home](https://graph.cool)
* [Graphcool Quickstart](https://alligator.io/graphql/graphcool-intro)
* Deployed on [Now](http://now.sh)
* Avatars provided by [Adorable Avatars](http://avatars.adorable.io)
* Fictitious data provided in the form of JSON data by [Mockaroo](https://mockaroo.com)


### Setting Up a Graphcool Backend

1. Install the Graphcool CLI with `npm install -g graphcool` or `yarn global add graphcool`
1. Run `graphcool init postlight-directory-db` from the parent folder of the cloned repository. This creates a new directory called `postlight-directory-db` and creates a base GraphQL service. You should now have two folders, `postlight-directory` and `postlight-directory-db`.
1. Copy `graphcool.yml` and `types.graphql` from the `db` folder in this repository to the newly created `postlight-directory-db` folder, overwriting the existing files.
1. Switch to the `postlight-directory-db` folder and run `graphcool deploy`. Follow the prompts to deploy and create an account or log in. Once done you will be given three API endpoints. Copy the "Simple API" endpoint value. Note that you can visit this URL in your browser to see a GraphQL playground where you can run queries against your database.
1. Create a new file called `.env` at the root of your `postlight-directory` directory and add one line as follows: `REACT_APP_GRAPHCOOL_URI=your_endpoint_here` replacing `your_endpoint_here` with the API endpoint you copied in the previous step. This environment variable is used in `componentDidMount` in `App.js`. This `.env` file should only be used locally. Don't check it in to source control. When you deploy the app, set up the same environment variable with your hosting provider.
1. Go back to your `postlight-directory-db` folder. Import seed data (1000 fictitious employees) by running `graphcool import --source ../postlight-directory/db/seed.zip`. You will see import progress, which should take just a few seconds. You are now ready to use your endpoint.