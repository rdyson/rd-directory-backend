import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import buildGraphCoolProvider from 'ra-data-graphcool';
import UserIcon from '@material-ui/icons/Group';
import { UserList, UserCreate, UserEdit } from './users';

// const client = new ApolloClient();

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }

  componentDidMount() {
    buildGraphCoolProvider({
      clientOptions: { uri: process.env.REACT_APP_GRAPHCOOL_URI },
    }).then(dataProvider => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="User" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
      </Admin>
    );
  }
}

export default App;
