import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, Welcome to <br />
        Mekarosi Assa's Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a passionate Software Engineer, who is always seeking for better ways to get things done. I am a full-stack developer that is skilled with MERN stack. 
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Mekarosi'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;