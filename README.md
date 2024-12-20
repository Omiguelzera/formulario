# formulario

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm serve
```

### Compiles and minifies for production
```
npm build
```

### Lints and fixes files
```
npm lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Documentação do Formulário Dinâmico

## Visão Geral
Este componente de formulário dinâmico foi projetado usando Vue.js e VeeValidate para criar um formulário flexível e reutilizável que valida as entradas do usuário. A abordagem baseada em esquema permite que os desenvolvedores definam os campos do formulário e suas regras de validação dinamicamente, proporcionando escalabilidade e manutenção fácil.

---

## Funcionalidades
1. **Geração Dinâmica de Campos**: Os campos são gerados dinamicamente com base no array `schema.fields`, eliminando a necessidade de codificar campos individuais.
2. **Validação Personalizada**: As regras de validação são gerenciadas pelo `Yup`, oferecendo validação robusta e expressiva baseada em esquemas.
3. **Componente Reutilizável**: O componente `DynamicForm` pode ser reutilizado em diversas partes da aplicação fornecendo diferentes esquemas.
4. **Tratamento de Erros**: Exibe mensagens de erro para cada campo usando o componente `ErrorMessage` do VeeValidate.

---

## Uso

### Componente Pai (`App.vue`)
```vue
<template>
  <DynamicForm :schema="formSchema" />
</template>

<script>
import DynamicForm from './components/DynamicForm.vue';
import * as Yup from 'yup';

export default {
  components: { DynamicForm },

  data() {
    const formSchema = {
      fields: [
        {
          Label: "Seu Nome",
          name: "name",
          as: "input",
          rules: Yup.string()
            .matches(/^[A-Za-z]+$/, "Apenas letras são permitidas")
            .min(2, "O nome deve ter pelo menos 2 caracteres")
            .required("O nome é obrigatório"),
        },
        {
          Label: "Seu Email",
          name: "email",
          as: "input",
          rules: Yup.string()
            .email("Insira um email válido")
            .required("O email é obrigatório"),
        },
        {
          Label: "Sua Data de Nascimento",
          name: "birthday",
          as: "input",
          rules: Yup.date()
            .max(new Date(), "A data de nascimento deve estar no passado")
            .required("A data de nascimento é obrigatória"),
        },
        {
          Label: "Seu Gênero",
          name: "gender",
          as: "input",
          rules: Yup.string()
            .oneOf(["male", "female", "other"], "Escolha o seu gênero")
            .required("O gênero é obrigatório"),
        },
        {
          Label: "Sua Senha",
          name: "password",
          as: "input",
          type: "password",
          rules: Yup.string()
            .min(8, "A senha deve ter pelo menos 8 caracteres")
            .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
            .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
            .matches(/[0-9]/, "A senha deve conter pelo menos um dígito")
            .matches(/[^A-Za-z0-9]/, "A senha deve conter pelo menos um caractere especial")
            .required("A senha é obrigatória"),
        },
        {
          Label: "Confirme sua Senha",
          name: "confirmPassword",
          as: "input",
          type: "password",
          rules: Yup.string()
            .oneOf([Yup.ref("password"), null], "As senhas devem coincidir")
            .required("A confirmação de senha é obrigatória"),
        },
      ],
    };

    return {
      formSchema,
    };
  },
};
</script>
```

### Componente do Formulário Dinâmico (`DynamicForm.vue`)
```vue
<template>
  <Form>
    <div v-for="{ as, name, ...attrs } in schema.fields" :key="name">
      <label :for="name">{{ name }}</label>
      <Field :as="as" :id="name" :name="name" v-bind="attrs" />
      <ErrorMessage :name="name" />
    </div>
    <button>Enviar</button>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';

export default {
  name: 'DynamicForm',
  components: { Field, Form, ErrorMessage },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
};
</script>
```

---

## Regras de Validação

### Por que Essas Regras Foram Escolhidas
1. **Nome**: Garante que o usuário insira um nome significativo com apenas letras e pelo menos 2 caracteres.
2. **Email**: Valida o formato do email para evitar endereços inválidos.
3. **Data de Nascimento**: Restringe a datas passadas para garantir datas de nascimento válidas.
4. **Gênero**: Limita a seleção a valores predefinidos, evitando entradas inválidas.
5. **Senha**:
   - Mínimo de 8 caracteres para segurança básica.
   - Requer letras maiúsculas, minúsculas, dígitos e caracteres especiais para conformidade com senhas fortes.
6. **Confirmação de Senha**: Garante que o usuário confirme sua senha corretamente.

---

## Benefícios da Abordagem
1. **Flexibilidade**: Campos baseados em esquemas permitem que a estrutura do formulário seja alterada facilmente sem modificar o componente.
2. **Escalabilidade**: As regras de validação são gerenciadas centralmente no esquema, facilitando sua manutenção e extensão.
3. **Experiência do Usuário**: Mensagens de erro claras e validações robustas garantem uma interação suave para o usuário.

---

## Melhorias Futuras
1. **Tipos de Campo Personalizados**: Estender suporte para tipos adicionais de campos (ex.: dropdowns, checkboxes).
2. **Estilização Dinâmica**: Adicionar opções de estilização dinâmica para estados de erro e entradas válidas.
3. **Validação Assíncrona**: Incorporar validações no lado do servidor (ex.: verificar se um email já está em uso).

---

## Conclusão
O componente de formulário dinâmico fornece uma solução flexível, eficiente e reutilizável para criar formulários complexos com validações robustas. A utilização do Yup para validação garante consistência e segurança nas entradas do usuário. Além disso, a abordagem baseada em esquema facilita a manutenção e a escalabilidade, tornando o componente uma escolha ideal para projetos que demandam alta flexibilidade e personalização em seus formulários. Com melhorias adicionais planejadas, o componente pode se tornar ainda mais poderoso, atendendo a uma gama mais ampla de requisitos de aplicações modernas.

