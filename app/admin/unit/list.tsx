import { Datagrid, List, TextField, ReferenceField, ImageField } from "react-admin";

export const UnitList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <ReferenceField source="courseId" reference="courses" >
          <div style={{ display: 'flex', alignItems: 'center', }}>
            <div style={{ width: '1em', height: '1em', marginTop: '-7em', marginRight: '1em' }}>
              <ImageField source="imageSrc" />
              <TextField source="title" />
            </div>
          </div>
        </ReferenceField>
        <TextField source="order" />
      </Datagrid>
    </List>
  );
};
