# 540 Frontend Challenge

## Problem definition

SeQura provides the shopper users an aplication where they can see the products they have bought and the instalments they have to pay. The app also allows the shopper to see the details of the product order.

As part of our product iteration process, the Product Designer from the team has made a wireframe and now is asking you to implement an application to display one screen with order list and another with the order details. The Product Designer is also very interested in analysing any shopper interaction with the app so the team can improve it in future iterations.

We expect you to:

1. Create the prototype for the wireframe that the Product Designer has given you a Figma.
2. Integrate the prototype with seQura mock API to fetch orders.
3. Prepare the prototye for an eventual integration for analytics service.
4. Create the animation between the order list and the order detail screen.
5. Create the pay button in the order detail screen that will call the seQura mock API to pay the order.

---

### Things to take into account

- Create a README explaining:
  - Detailed information about how to use the application. Assume a new member is joining the project and don't know anything about it.
  - An explanation of your technical choices, tradeoffs, assumptions you took, etc.
  - If you left things aside due to time constraints, explain why and how you would resolve or improve them.
- You should consider this code ready for production as it was a PR to be reviewed by a colleague. Also, commit as if it were a real-world feature.
- Design, test, develop and document the code. It should be a performant, clean, and well-structured solution.
- We care a lot about testing, so pay special attention to your app tests.
- You shouldn't spend more than 5h on the challenge.
- Since it's frontend challenge, we expect the code based in JavaScript or Typescript.
- As it is a React Native position we expect to use react-native CLI or Expo.
- We expect the demo to work minimum on iOS 17 and Android 14.
- Your experience level will be taken into consideration when evaluating.

## Documentation

### How to run the project

Clone the API repository:

``` cmd
git clone https://github.com/sequra/frontend-mobile-challenge
cd frontend-mobile-challenge
```

Install the dependencies and run the API located in `./api`

``` cmd
cd ./api
npm install
npm start
```

Clone the project repository:

``` cmd
git clone <repository-url>
cd prueba-tecnica-front-540
```

Install project dependencies:

``` cmd
cd ./prueba-tecnica-540
npm install
```

Start the development server:

``` cmd
npm run dev
```

### Run tests

``` cmd
npm run test
```

### Libraries used

- **Core**:
  - React: Main library.
  - React Router: Routing.
  - Framer Motion: Animations and transitions between routes.
  - Classnames: Conditionally joining class names.
- **Data fetching**:
  - React Query: Data fetching and state management.
  - GraphQL Request: Making GraphQL queries and mutations.
- **Testing**
  - Testing Library: For testing React components.
  - Vitest: For running tests.
  - Jest DOM: Test the state of the DOM.

## Future changes

- Funcionbalidad:
  - Arreglar la carga de imágenes de fondo.
  - Implementar iconos.
  - Mejorar la animación de cambio de ruta.
- Testing:
  - Incrementar la cobertura de tests.
  - Añadir tests de accesibilidad (por ej. librería AXE)
  - Hacer testing del componente AnimatedRoutes.
- Arquitectura/Código:
  - Componetizar más los elementos, emejorando así la reutilización de componentes y evitando código duplicado.
  - Realizar una gestión más globar del estado de cada ventana (Contexto).
  - Utilizar CSS Modules en vez de clases planas.
  - Explorar otra forma de generar consultas de GraphQL, sin que sean cadenas de texto.
- Documentación:
  - Añadir documentación sobre la API y las comunicación con el backend.
  - Añadir documentación sobre la arquitectura del proyecto.
  - Añadir documentación de testing: Dónde se deberían ubicar los tests, de qué manera se realizan, etc.
