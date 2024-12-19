<template>
    <Form>
        <div v-for="{as, name, ...attrs } in schema.fields" :key="name"
        
        >
            <label :for="name">{{ name }}</label>
            <Field :as="as" :id="name" :name="name" v-bind="attrs"/>

            <ErrorMessage :name="name" />
        </div>

        <button>Submit</button>
    </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
export default {
    name:'  DynamicForm',
    components: { Field, Form, ErrorMessage },
    props:{
        schema:{
            type: Object,
            required: true,
        },
    },
};
</script>