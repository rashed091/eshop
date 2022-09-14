import { AppShell, useMantineTheme } from '@mantine/core';

import SideShow from '@/components/SideShow/SideShow';
import { BottomBar } from '@/layout/BottomBar';
import { TopBar } from '@/layout/TopBar';

function App() {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={<BottomBar />}
      header={<TopBar />}
    >
      <SideShow />
    </AppShell>
  );
}

export default App;
