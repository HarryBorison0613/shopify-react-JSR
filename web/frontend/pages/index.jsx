import { Page, Layout, Button, Icon } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';
import { useCallback, useState } from 'react';
// import {
//   NotifiContext,
//   NotifiSubscriptionCard,
// } from '@notifi-network/notifi-react-card';
// import '@notifi-network/notifi-react-card/dist/index.css';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

// import {
//   WalletMultiButton,
//   WalletDisconnectButton,
// } from '@solana/wallet-adapter-react-ui';

import Notifi from '../components/Notifi';
import { AlertMinor } from '@shopify/polaris-icons';
export default function HomePage() {
  const [active, setActive] = useState(true);
  const handleChange = useCallback(() => setActive(!active), [active]);

  const wallet = useWallet();

  console.log('Connected', wallet.connected);
  return (
    <>
      <Page fullWidth>
        <Layout>
          <Layout.Section oneThird></Layout.Section>
          <Layout.Section oneThird>{active ? '' : <Notifi />}</Layout.Section>

          <Layout.Section oneThird>
            <Button
              plain
              onClick={handleChange}
              disabled={wallet.connected ? false : true}
            >
              <Icon source={AlertMinor} />
            </Button>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}
