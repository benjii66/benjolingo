import { SimpleForm, Edit, TextInput, ReferenceInput, NumberInput, required, AutocompleteInput } from "react-admin";

export const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput
          source="title"
          validate={[required()]}
          label="Title"
        />
        <ReferenceInput
          source="unitId"
          sort={{ field: 'unitId', order: 'ASC' }}
          reference="units" 
          
        />
        <NumberInput
          source="order"
          validate={[required()]}
          label="Order"
        />
      </SimpleForm>
    </Edit>
  );
};
