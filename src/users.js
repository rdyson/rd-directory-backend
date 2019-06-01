import React from 'react';
import {
  Create,
  Datagrid,
  Edit,
  EmailField,
  Filter,
  List,
  ReferenceInput,
  Responsive,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput,
} from 'react-admin';

const UserFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="Search" source="name_contains" reference="User" allowEmpty alwaysOn>
      <TextInput label="Search" resettable />
    </ReferenceInput>
  </Filter>
);

export const UserList = props => (
  <List filters={<UserFilter />} {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.title}
          tertiaryText={record => record.email}
          linkType="show"
        />
      }
      medium={
        <Datagrid rowClick="edit">
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <TextField source="title" />
          <TextField source="department" />
        </Datagrid>
      }
    />
  </List>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="title" />
      <TextField source="department" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="company" />
      <TextInput source="website" />
    </SimpleForm>
  </Create>
);
