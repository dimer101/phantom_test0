import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import SignMessage from './components/SignMessage';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🦄 Phantom Подключение</h1>
      <WalletMultiButton />
      <hr style={{ margin: '20px 0' }} />
      <SignMessage />
    </div>
  );
}
