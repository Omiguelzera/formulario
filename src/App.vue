<template>
  <DynamcForm :schema="formSchema" />
</template>

<script>  
  import DynamcForm from './components/DynamicForm.vue'

  export default {
    components: { DynamcForm },

    data(){
      const formSchema = {
        fields:[
          {
            Label: "Your Name",
            name: "name",
            as: "input",
          },
          {
            Label: "Your Email",
            name: "email",
            as: "input",
          },
          {
            Label: "Your Birthday",
            name: "birthday",
            as: "input",
          },
          {
            Label: "Your gender",
            name: "gender",
            as: "input",
          },
          {
            Label: "Your Password",
            name: "password",
            as: "input",
          },
          {
            Label: "Your Confirm Password",
            name: "confirmPassword",
            as: "input",
          }
        ],
      };

      return{
        formSchema,
      };
    },
  };
</script>