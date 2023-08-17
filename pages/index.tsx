import LoginModal from '@/components/login-modal/login-modal';
import Navbar from '@/components/navbar/navbar';
import MainViewmodel from '@/viewmodels/index';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const sdkMock = {
    startLoginWithPhantom: () => Promise.resolve(() => { setTimeout(() => {return { message: 'Sucess' }}, 500)})
  };

  const viewmodel = new MainViewmodel(sdkMock);

  return (
    <main className={roboto.className}>
      <Navbar viewmodel={viewmodel}/>
      <LoginModal />
    </main>
  )
}
