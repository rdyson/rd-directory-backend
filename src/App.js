import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import buildGraphCoolProvider from 'ra-data-graphcool';
import UserIcon from '@material-ui/icons/Group';
import { createMuiTheme } from '@material-ui/core/styles';
import CustomLayout from './CustomLayout';
import authProvider from './authProvider';
import { EmployeeList, EmployeeCreate, EmployeeEdit, EmployeeView } from './employees';
import CustomLoginPage from './CustomLoginPage';

const customTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#392C9C',
    },
  },
  typography: {
    fontFamily: ['Avenir', 'Arial', 'sans-serif'].join(','),
  },
});

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
      return <div>Loading! Please wait...</div>;
    }

    return (
      <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        theme={customTheme}
        appLayout={CustomLayout}
        loginPage={CustomLoginPage}
        sidebar={null}
      >
        {() => [
          <Resource
            name="Employee"
            list={EmployeeList}
            edit={localStorage.getItem('username') ? EmployeeEdit : EmployeeView}
            create={localStorage.getItem('username') ? EmployeeCreate : null}
            icon={UserIcon}
          />,
        ]}
      </Admin>
    );
  }
}

export default App;
