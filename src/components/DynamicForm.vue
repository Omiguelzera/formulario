<template>
    <Form>
        <div v-for="field in schema.fields" :key="field.name">
            <label :for="field.name">{{ field.Label }}</label>
            <Field :as="field.as" :id="field.name" :name="field.name"/>
        </div>

        <button>Submit</button>
    </Form>
</template>

<script>
import { Field, Form } from 'vee-validate'
export default {
    name:'  DynamicForm',
    components: { Field, Form },
    props:{
        schema:{
            type: Object,
            required: true,
        },
    },
};
</script>