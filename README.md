# Cinema Frontend

This is a basic cinema frontend.

## Codegen

Run the codegenerator in the backend (simply open this page `http://localhost:8080/api/v1/api-docs`) and paste the content into `/src/schemas/openapi/api-docs.json`. The you can run `npm run codegen` and the hooks and classes will be created.

## Styling

**Breakpoints**

This app is a mobile first app. So every style is written for the mobile view. To adjust something for the other views you can use:

```scss
@include responsive("desktop") {
  // Your styles
}
```

You can also past things like "1920px" directly into the mixin instead of using variables.

Dont forget to import the breakpoints in the scss file:
`@import "../styles/breakpoints";`

**Components**

This project uses [Material UI Components](https://mui.com/base-ui/getting-started/). All of them are wrapped with an extra layer, so that the components can be swapped later, when another component library should be used.
