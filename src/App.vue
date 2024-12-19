<template>
  <DynamcForm :schema="formSchema" />
</template>

<script>  
  import DynamcForm from './components/DynamicForm.vue'
  import * as Yup from 'yup';

  export default {
    components: { DynamcForm },

    data(){
      const formSchema = {
        fields:[
          {
            Label: "Your Name",
            name: "name",
            as: "input",
            rules: Yup.string()
            .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
            .min(2,"Name must be at least 2 characters long")
            .required("Name is required"),
          },
          {
            Label: "Your Email",
            name: "email",
            as: "input",
            rules: Yup.string().email("Enter valid email").required("emai is required"),
          },
          {
            Label: "Your Birthday",
            name: "birthday",
            as: "input",
            rules: Yup.date()
            .max(new Date(), "Birthday must be in the past")
            .required("Birthday is required"),
          },
          {
            Label: "Your gender",
            name: "gender",
            as: "input",
            rules: Yup.string()
            .oneOf(["male", "female", "other"], "Choose your gender")
            .required("Gender is required"),
          },
          {
            Label: "Your Password",
            name: "password",
            as: "input",
            type: "password",
            rules: Yup.string().min(8, "Password must be at least 8 characters long")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[0-9]/, "Password must contain at least one digit")
            .matches(/[^A-Za-z0-9]/, "Password must contain at least one special character")
            .required("Password is required"),
          },
          {
            Label: "Your Confirm Password",
            name: "confirmPassword",
            as: "input",
            type: "password",
            rules: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
          }
        ],
      };

      return{
        formSchema,
      };
    },
  };
</script>