import { Datagrid, List, TextField, ReferenceField, NumberField, BooleanField, ImageField } from "react-admin";

export const ChallengeOptionList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challenges" />
        <ReferenceField source="challengeId" reference="challenges" label="Course" link={false}>
          <ReferenceField source="lessonId" reference="lessons" link={false}>
            <ReferenceField source="unitId" reference="units" link={false}>
              <ReferenceField source="courseId" reference="courses">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ImageField source="imageSrc" style={{ width: '1em', height: '1em', marginTop: '-7em', marginRight: '1em' }} />
                  <TextField source="title" />
                </div>
              </ReferenceField>
            </ReferenceField>
          </ReferenceField>
        </ReferenceField>
        <TextField source="imageSrc" />
        <TextField source="audioSrc" />
      </Datagrid>
    </List>
  );
};

