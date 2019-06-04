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
  Show,
  SimpleForm,
  SimpleList,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';

const EmployeeTitle = ({ record }) => <span>{record ? `${record.name}` : ''}</span>;
const EmployeePhoto = ({ record, size }) => (
  <img
    src={record ? `https://api.adorable.io/avatars/${size}/${record.id}` : ''}
    alt={record ? `${record.name}'s Profile Photo` : ''}
  />
);

const EmployeeFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="Search" source="name_contains" reference="Employee" allowEmpty alwaysOn>
      <TextInput label="Search" resettable />
    </ReferenceInput>
  </Filter>
);

export const EmployeeList = props => (
  <List filters={<EmployeeFilter />} bulkActionButtons={false} {...props}>
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
          <EmployeePhoto size="50" />
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

export const EmployeeView = props => (
  <Show actions={null} title={<EmployeeTitle />} {...props}>
    <SimpleShowLayout>
      <EmployeePhoto size="200" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="title" />
      <TextField source="department" />
    </SimpleShowLayout>
  </Show>
);

export const EmployeeEdit = props => (
  <Edit title={<EmployeeTitle />} {...props}>
    <SimpleForm>
      <EmployeePhoto size="200" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="title" />
      <TextInput source="department" />
    </SimpleForm>
  </Edit>
);

export const EmployeeCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="title" />
      <TextInput source="department" />
    </SimpleForm>
  </Create>
);
