import React from 'react';
import {
  Datagrid,
  EmailField,
  Filter,
  List,
  ReferenceInput,
  Responsive,
  SelectInput,
  SimpleList,
  TextField,
  TextInput,
  UrlField,
} from 'react-admin';

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const UserList = props => (
  <List filters={<UserFilter />} {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.company.name}
          tertiaryText={record => record.phone}
          linkType="show"
        />
      }
      medium={
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <UrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      }
    />
  </List>
);

export default UserList;
