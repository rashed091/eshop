import { AppShell, Text, useMantineTheme } from '@mantine/core';

import { BottomBar } from '@/layout/BottomBar';
import { SideBar } from '@/layout/Sidebar';
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
      navbar={<SideBar />}
      footer={<BottomBar />}
      header={<TopBar />}
    >
      <Text>Containers</Text>
    </AppShell>
  );
}

export default App;
