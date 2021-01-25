# Rick and Morty

_Buscador de los personajes de Rick and Morty_

Funcionalidades principales:
- Versión clara/oscura
- Buscador de personajes
- Filtro por estado

## Comenzando 🚀

_Puedes ver una DEMO del proyeto en este enlace [https://rick-and-morty.rtelenta.vercel.app/](https://rick-and-morty.rtelenta.vercel.app/)._

Mira **Instalación** para conocer ejecutarlo en un ambiente local.


### Pre-requisitos 📋

```
node.js
yarn
```

### Instalación 🔧

_Instalando de dependencias_

```
yarn install
```

_Ejecutando el proyecto en local. [http://localhost:3000](http://localhost:3000)_

```
yarn start
```

_Compilando el proyecto. Se generará una carpeta **build** con los archivos compilados_ 

```
yarn build
```


## Ejecutando las pruebas ⚙️

_El proyecto cuenta con pruebas unitarias y un reporte de cobertura de código_

### Analizando las pruebas unitarias 🔩

_Ejecutando las pruebas unitarias_

```
yarn test
```

_Ejecutando la cobertura de código_

```
yarn test:coverage
```

## Estructura de las carpetas ⌨️

_Dentro de la carpeta **components** se encuentran los componentes generales acompañados cada uno de su respectivo test. Ejemplo:_

```
components
  CardImage
    CardImage.test.tsx
    index.tsx
```

_Dentro de la carpeta **features** se encuentra una carpeta Finder con todos los archivos y tests del buscador. Ejemplo:_

```
features
  Finder
    index.tsx

    __tests__
      Finder.test.tsx

      components
        SearchForm.test.tsx
        ...

    components
      SearchForm.tsx
      ...

    graphql
      queries
        getCharactersQuery.ts
        ...

      types
        charactersDataType.ts
        ...
    hooks
      useCharacters.ts

    services
      getCharacters.ts
```

## Construido con 🛠️

_Liberías y tecnologías usadas en el proyecto_

* [React](https://es.reactjs.org/) - Estructuración y construcción de interfaces de usuario
* [Typescript](https://www.typescriptlang.org/) - Extensión a javascript para agregar tipado
* [GraphQL](https://graphql.org/) - Lenguaje de queries para APIs
* [React Query](https://react-query.tanstack.com/) - Libería para caché de datos
* [Mock Service Worker](https://mswjs.io/) - Libería para Mock de APIs
* [Chakra UI](https://chakra-ui.com/) - Sistema de diseño

