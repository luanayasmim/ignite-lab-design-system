/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //Adicionando arquivos de conteúdo para o tailwind
    './src/**/*.tsx'
  ],
  theme: {
    //Quando não se usa a tag extends ele sobreescreve o que vem padrão na biblioteca

    //Redefinindo o tamanho dos textos
    fontSize:{
      xs: 14, //extra-small
      sm: 16, //small
      md: 18, //medium
      lg: 20, //large
      xl: 24, //extra-large
      '2xl': 32, //2 extra-large
    },

    //Redefinindo as cores que serão utilizadas no projeto
    colors:{
      'transparent': 'transparent',
      'black': '#000000',
      'white': '#ffffff',

      gray:{
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },
      
      cyan:{
        500: '#81d8f7',
        300: '#9be1fb',
      }
      
    },
    extend: {
      //Definindo a fontFamily padrão sem serifa que o tailwind irá utilizar
      fontFamily:{
        sans: 'Inter, san-serif' 
      }
    },
  },
  plugins: [],
}
