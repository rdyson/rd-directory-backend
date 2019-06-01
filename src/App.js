import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import buildGraphCoolProvider from 'ra-data-graphcool';
import UserIcon from '@material-ui/icons/Group';
import { EmployeeList, EmployeeCreate, EmployeeEdit } from './employees';

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
        <Resource name="Employee" list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate} icon={UserIcon} />
      </Admin>
    );
  }
}

export default App;
