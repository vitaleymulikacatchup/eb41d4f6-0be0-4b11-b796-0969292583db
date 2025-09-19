"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id='nav' data-section='nav'>
        <NavbarLayoutFloatingInline
          logoSrc='/images/logo.svg'
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'FAQ', id: 'faq' },
            { name: 'Footer', id: 'footer' }
          ]}
          buttonText='Start Free Trial'
        />
      </div>
      <div id='hero' data-section='hero' className='scroll-mt-24'>
        <VoidHero
          title='Welcome to NovaCloud'
          description='Your one-stop solution for cloud services.'
          tagLabel='Experience Innovation'
          primaryButtonText='Get Started'
          secondaryButtonText='Learn More'
        />
      </div>
      <div id='about' data-section='about' className='scroll-mt-24'>
        <SocialsAbout
          title='About NovaCloud'
          descriptions={['We provide top-notch cloud solutions', 'Flexible and scalable services', 'Join us for a reliable cloud experience']}
        />
      </div>
      <div id='how-to-buy' data-section='how-to-buy' className='scroll-mt-24'>
        <HowToBuy2D
          variant='simple'
        />
      </div>
      <div id='tokenomics' data-section='tokenomics' className='scroll-mt-24'>
        <NumberGridTokenomics
          title='Tokenomics Overview'
          description='Our token structure is ethical and sustainable.'
          kpiItems={[{ value: '100M', description: 'Total Supply' }, { value: '10M', description: 'Market Cap' }]}
        />
      </div>
      <div id='faq' data-section='faq' className='scroll-mt-24'>
        <CentralFAQ
          items={[
            { title: 'What is NovaCloud?', content: 'NovaCloud is a cloud service provider.' },
            { title: 'How do I get started?', content: 'Visit our website to sign up.' },
            { title: 'Is there a free trial?', content: 'Yes, we offer a 30-day free trial.' },
            { title: 'What payment methods do you accept?', content: 'We accept all major credit cards.' },
          ]}
        />
      </div>
      <div id='footer' data-section='footer' className='scroll-mt-24'>
        <FooterLogoEmphasis
          logoSrc='/images/logo.svg'
          logoAlt='NovaCloud Logo'
          logoText='NovaCloud'
          columns={[
            { items: [{ label: 'Privacy Policy', onClick: () => console.log('Privacy Policy') }] },
            { items: [{ label: 'Terms of Service', onClick: () => console.log('Terms of Service') }] },
            { items: [{ label: 'FAQs', onClick: () => console.log('FAQs') }] }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
