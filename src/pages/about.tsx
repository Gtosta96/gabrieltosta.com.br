import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>
        Olá, meu nome é Gabriel Tosta, sou engenheiro de software autodidata apaixonado por
        javascript e seu mundo, desde 2015 trabalhando principalmente com front-end, mas também com
        uma boa experiência em back-end e infraestrutura (DevOps).
      </p>
      <p>
        Ajudo a organizar comunidades locais de tecnologia e também sou palestrante, onde já tive a
        oportunidade de compartilhar conhecimento em grandes conferências de tecnologia (Geekle |
        BrazilJS | TDC) com o objetivo de espalhar para o mundo o poder da programação.
      </p>
    </Content>
  </Main>
);

export default About;
