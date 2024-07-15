/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Sorbit Earn',
  description:
    'Aiming to connect crypto projects with talented individuals through bounties, freelance gigs, and grants, enabling participants to earn in Stellar-based tokens.p',
  icons: ['/favicon.svg'],
};

export default function Home() {
  return (
    <main className='w-full h-full relative'>
      <nav className='w-full absolute inset-0 px-6 md:px-[114px] z-10 bg-transparent h-[76px]'>
        <div className='max-w-[1440px] flex items-center justify-between mx-auto py-7'>
          <img src='/icon.svg' alt='icon' className='max-w-[150px]' />
          <a
            href='https://tally.so/r/mZJvly'
            target='_blank'
            className='py-2 px-5 rounded-full bg-[#431F8C] text-white text-lg font-semibold inline-flex w-fit'
          >
            Join waitlist
          </a>
        </div>
      </nav>
      <Group key='hero'>
        <div className='w-full md:h-screen max-md:pt-[140px] max-md:pb-[200px] gr-bg flex flex-col items-center justify-center relative'>
          <img
            src='/stars.png'
            alt='stars background'
            className='absolute inset-0 w-full h-full md:h-screen mix-blend-color-dodge max-md:object-cover '
          />
          <div className='flex flex-col items-center justify-center w-full h-full relative'>
            <img src='/favicon.svg' alt='icon' style={{ scale: 2 }} />
            <h1 className='text-[42px] md:text-[100px] font-extrabold max-w-[1185px] text-center text-white leading-none mt-16 md:mt-10'>
              Unlock the talent potential of Stellar
            </h1>
            <p className='text-[#D4D5D8] font-medium text-xl max-md:px-10 md:text-[30px] max-w-[735px] mt-[60px] text-center'>
              Access a global pool of crypto-native talent. Build the
              Future,Together.
            </p>

            <a
              href='https://tally.so/r/mZJvly'
              target='_blank'
              className='py-2 px-5 rounded-full bg-[#431F8C] text-white text-lg font-semibold form-btn inline-flex mt-20'
            >
              Join waitlist
            </a>
          </div>
        </div>
      </Group>
      <Group key='space'>
        <div className='w-full px-6 md:px-[114px] bg-[#0C0911]'>
          {' '}
          <div className='w-full md:h-screen flex flex-col pt-[140px] bg-[#0C0911] max-w-[1440px] md:mx-auto'>
            <div className='border border-[#2B2B2E] overflow-clip flex max-md:flex-col items-center rounded-[40px] py-10 md:py-[108px] justify-between gap-10 w-full'>
              <Group key='left'>
                <div className='flex flex-col pl-10 md:pl-[91px] max-w-[692px] shrink-0 max-md:px-6 '>
                  <img src='/badge.svg' alt='badge' className='w-[70px]' />
                  <h3 className='mt-10 md:mt-20 font-bold text-[40px] md:text-[50px] text-white'>
                    Build on Stellar.{' '}
                    <span className='together p-1'>Together</span>
                  </h3>
                  <p className='text-[#D4D5D8] md:text-2xl font-medium mt-10'>
                    Sorbit Earn connects founders with crypto experts, building
                    a stronger Stellar community through collaboration. Leading
                    to more successful projects and a vibrant network of
                    builders.
                  </p>
                  <a
                    href='https://tally.so/r/mZJvly'
                    target='_blank'
                    className='py-2 px-5 rounded-full bg-[#431F8C] text-white text-lg font-semibold form-btn inline-flex mt-20 w-fit'
                  >
                    Join waitlist
                  </a>
                </div>
              </Group>
              <Group key='right'>
                <img
                  src='/iphone.png'
                  alt='mockup'
                  className='max-w-[500px] md:max-w-[750px] md:translate-x-[-12%] w-full max-md:ml-auto'
                />
              </Group>
            </div>
          </div>
        </div>
      </Group>
      <Group key='footer'>
        <div className='w-full  px-6 md:px-[114px] bg-[#0C0911]'>
          <div className='bg-[#0C0911] pt-[120px] flex flex-col pb-[106px] max-w-[1440px] w-full mx-auto'>
            <img src='/icon.svg' alt='icon' className='max-w-[150px]' />
            <div className='flex max-md:flex-col md:items-center gap-x-[35px] mt-[65px] gap-y-3'>
              <span className='text-[#82848A] font-semibold text-xl'>
                © 2024 Sorbit. All rights reserved.
              </span>
              <div className='flex items-center gap-x-[35px]'>
                <a href='https://x.com/GetSorbit' target='_blank'>
                  <svg
                    width='24'
                    height='25'
                    viewBox='0 0 24 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.8771 10.6818L22.5577 0.800598H20.5014L12.9609 9.37853L6.94287 0.800598H0L9.10247 13.7732L0 24.1339H2.05628L10.0141 15.0733L16.371 24.1339H23.3138M2.79843 2.31911H5.95746L20.4999 22.6899H17.3401'
                      fill='#82848A'
                    />
                  </svg>
                </a>
                <a
                  href='https://www.linkedin.com/company/sorbit/'
                  target='_blank'
                >
                  {' '}
                  <svg
                    width='24'
                    height='25'
                    viewBox='0 0 24 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12.9306 11.275C12.9394 11.2641 12.9474 11.2524 12.9532 11.24V11.275H12.9306ZM23.6472 0.800568V24.1339H0.313843V0.800568H23.6472ZM7.55084 9.75837H4.07124V20.2248H7.55084V9.75837ZM7.77831 6.52234C7.75644 5.49422 7.02364 4.71255 5.8329 4.71255C4.64364 4.71255 3.86562 5.49422 3.86562 6.52234C3.86562 7.52497 4.6203 8.32997 5.7877 8.32997H5.8103C7.02364 8.32997 7.77831 7.52497 7.77831 6.52234ZM20.0954 14.223C20.0954 11.0089 18.3782 9.51337 16.0894 9.51337C14.2438 9.51337 13.4177 10.5276 12.9532 11.24V9.75837H9.47511C9.51958 10.7398 9.47511 20.2248 9.47511 20.2248H12.9532V14.3798C12.9532 14.0634 12.9758 13.7564 13.0677 13.5311C13.32 12.9084 13.8931 12.258 14.8527 12.258C16.1134 12.258 16.6158 13.2161 16.6158 14.6248V20.2248H20.0947L20.0954 14.223Z'
                      fill='#82848A'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Group>
    </main>
  );
}

const Group = ({ children }: { children: any }) => <>{children}</>;
