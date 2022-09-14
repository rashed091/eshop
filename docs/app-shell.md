Mantine is a React components library focused on providing great user and developer experience. Mantine development was started in January 2021 and 1.0 version was published on May 3rd, 2021, and since then more than 100 releases were published.

Browser support
Mantine is tested on real devices in the following browsers before each minor and major release: Chrome, Safari, Firefox, Edge, Safari for iOS, Chrome for Android. Testing in other browsers is not performed.


```
yarn add @mantine/core @mantine/hooks @mantine/form @mantine/dates dayjs @mantine/notifications @mantine/dropzone @mantine/carousel embla-carousel-react @mantine/spotlight @mantine/modals @mantine/nprogress @emotion/react
```


### Writing styles
Mantine is built with a css-in-js library based on emotion. You can use any other styling solution but we recommend working with createStyles to avoid styles collisions.

```javascript
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Dynamic media queries, define breakpoints in theme, use anywhere
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      // Type safe child reference in nested selectors via ref
      [`& .${getRef('child')}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // assign ref to element
    ref: getRef('child'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles demo</div>
    </div>
  );
}
```
where ... represents the existing code.

### Theming
Theme object supports changing colors, spacing, box-shadows, font families, font sizes and many other properties. To configure theme, wrap your app with a MantineProvider component:

```javascript
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        fontFamily: 'Open Sans, sans serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }}
    >
      <App />
    </MantineProvider>
  );
}
```
