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
  SelectInput,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput,
  UrlField,
} from 'react-admin';

const UserFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="Name" source="id" reference="User" allowEmpty>
      <TextInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const UserList = props => (
  <List filters={<UserFilter />} {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.company}
          tertiaryText={record => record.phone}
          linkType="show"
        />
      }
      medium={
        <Datagrid rowClick="edit">
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <TextField source="company" />
          <UrlField source="website" />
        </Datagrid>
      }
    />
  </List>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="company" />
      <TextInput source="website" />
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
