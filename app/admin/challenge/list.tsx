import { Datagrid, List, TextField, ReferenceField, NumberField, ImageField, SelectField } from "react-admin";

export const ChallengeList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="question" />
        <SelectField
          source="type"
          choices={[
            { id: "SELECT", name: "SELECT" },
            { id: "ASSIST", name: "ASSIST" }
          ]}
        />
        <ReferenceField source="lessonId" reference="lessons" label="Lesson">
          <TextField source="title" />
        </ReferenceField>
        <ReferenceField source="lessonId" reference="lessons" link={false} label="Course">
          <ReferenceField source="unitId" reference="units" link={false}>
            <ReferenceField source="courseId" reference="courses">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ImageField source="imageSrc" style={{ width: '1em', height: '1em', marginTop: '-7em', marginRight: '1em' }} />
                <TextField source="title" />
              </div>
            </ReferenceField>
          </ReferenceField>
        </ReferenceField>
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
