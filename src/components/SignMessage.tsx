import { useWallet } from '@solana/wallet-adapter-react';
import { useCallback } from 'react';

export default function SignMessage() {
  const { publicKey, signMessage } = useWallet();

  const handleSign = useCallback(async () => {
    if (!signMessage || !publicKey) {
      alert('Сначала подключи кошелёк');
      return;
    }

    try {
      const message = new TextEncoder().encode("Я подтверждаю своё согласие ✅");
      const signature = await signMessage(message);
      const encoded = Buffer.from(signature).toString('base64');
      alert(`Сообщение подписано!\n\nSignature:\n${encoded}`);
    } catch (error) {
      console.error(error);
      alert('Ошибка при подписи');
    }
  }, [signMessage, publicKey]);

  return (
    <button onClick={handleSign} disabled={!publicKey}>
      Подписать сообщение
    </button>
  );
}
