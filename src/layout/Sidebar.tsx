import {
  createStyles,
  Navbar,
  Stack,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import { useState } from 'react';
import {
  CalendarStats,
  DeviceDesktopAnalytics,
  Fingerprint,
  Gauge,
  Home2,
  Logout,
  Settings,
  SwitchHorizontal,
  User,
} from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

const mockdata = [
  { icon: Home2, label: 'Home' },
  { icon: Gauge, label: 'Dashboard' },
  { icon: DeviceDesktopAnalytics, label: 'Analytics' },
  { icon: CalendarStats, label: 'Releases' },
  { icon: User, label: 'Account' },
  { icon: Fingerprint, label: 'Security' },
  { icon: Settings, label: 'Settings' },
];

interface NavbarLinkProps {
  icon: typeof Home2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon />
      </UnstyledButton>
    </Tooltip>
  );
}

export function SideBar() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar width={{ base: 80 }} p="md">
      <Stack justify="center" spacing={0}>
        {links}
      </Stack>
      <Navbar.Section grow>{}</Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={SwitchHorizontal} label="Change account" />
          <NavbarLink icon={Logout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
