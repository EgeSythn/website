import { useState } from 'react';
import { createStyles, Navbar, getStylesRef } from '@mantine/core';
import {
  IconUser,
  IconMicroscope,
  IconBrandGithub,
  IconBackpack,
  IconHome,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
},

  version: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
      0.1
    ),
    color: theme.white,
    fontWeight: 700,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.white,
    opacity: 0.75,
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.15
      ),
      [`& .${getStylesRef('icon')}`]: {
        opacity: 0.9,
      },
    },
  },


}));

const data = [
  { link: '/', label: "Home", icon: IconHome},
  { link: '', label: 'About', icon: IconUser },
  { link: '', label: 'Education', icon: IconBackpack },
  { link: '', label: 'Experience', icon: IconMicroscope },
  { link: '', label: 'Projects', icon: IconBrandGithub },
];

interface CustomNavbarProps {
    hidden: boolean;
}

function CustomNavbar(props:CustomNavbarProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Home');
  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar} hidden={!props.hidden}>
      <Navbar.Section grow>
        {links}
      </Navbar.Section>
    </Navbar>
  );
}

export default CustomNavbar;