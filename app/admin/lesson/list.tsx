import { Datagrid, List, TextField, ReferenceField, NumberField, ImageField } from 'react-admin';

export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="unitId" reference="units">
          <TextField source="title" />
        </ReferenceField>
        <ReferenceField source="unitId" reference="units" link={false} label="Course">
          <ReferenceField source="courseId" reference="courses">
            <div style={{ display: 'flex', alignItems: 'center',  }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ImageField source="imageSrc" style={{ width: '1em', height: '1em', marginTop: '-7em', marginRight: '1em'}} />
                <TextField source="title" />
              </div>
            </div>
          </ReferenceField>
        </ReferenceField>
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
