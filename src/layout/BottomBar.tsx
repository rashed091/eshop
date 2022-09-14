import { ActionIcon, Anchor, createStyles, Footer, Group } from '@mantine/core';
import { BrandInstagram, BrandTwitter, BrandYoutube } from 'tabler-icons-react';

import { MantineLogo } from '../assets/MantineLogo';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

export function BottomBar() {
  const { classes } = useStyles();

  const links = [
    { link: '/contact', label: 'Contact' },
    { link: '/privacy', label: 'Privacy' },
    { link: '/blog', label: 'Blog' },
    { link: '/store', label: 'Store' },
    { link: '/careers', label: 'Careers' },
  ];

  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Footer height={60}>
      <div className={classes.inner}>
        <MantineLogo />

        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </div>
    </Footer>
  );
}
