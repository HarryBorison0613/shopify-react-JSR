import { Page, Layout, Button } from '@shopify/polaris';
import {
  NotifiContext,
  NotifiSubscriptionCard,
} from '@notifi-network/notifi-react-card';
import '@notifi-network/notifi-react-card/dist/index.css';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

const Notifi = () => {
  const { connection } = useConnection();

  const { wallet, sendTransaction, signMessage } = useWallet();

  const adapter = wallet?.adapter;
  const publicKey = adapter?.publicKey?.toBase58() ?? null;
  // if (publicKey === null) {
  //   return null;
  // }

  const inputLabels = {
    email: 'Email',
    sms: 'Text Message',
    telegram: 'Telegram',
  };

  const inputSeparators = {
    smsSeparator: {
      content: 'OR',
    },
    emailSeparator: {
      content: 'OR',
    },
  };
  return (
    <Page>
      <Layout>
        <NotifiContext
          dappAddress='shopifytest.x'
          walletBlockchain='SOLANA'
          env='Production'
          signMessage={signMessage}
          walletPublicKey={publicKey}
          connection={connection}
          sendTransaction={sendTransaction}
        >
          <NotifiSubscriptionCard
            cardId='b5ac6462044d4835ad9138d5aa82ce1e'
            inputLabels={inputLabels}
            inputSeparators={inputSeparators}
            darkMode
            classNames={'NotifiSubscribeButton'}
          />
        </NotifiContext>
      </Layout>
    </Page>
  );
};

export default Notifi;
