import React from 'react';

import { Content } from '../components/Content/Content';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Main/Meta';

const About = () => (
  <Main
    meta={(
      <Meta
        title="Sobre mim"
        description="Olá, meu nome é Gabriel Tosta, sou desenvolvedor autodidata apaixonado por
  javascript. Trabalho na área de programação desde 2015..."
      />
    )}
  >
    <Content>
      <p>
        Olá, meu nome é Gabriel Tosta, sou desenvolvedor autodidata apaixonado por javascript.
        Trabalho desde 2015 principalmente com front-end, mas também com uma baita experiência em
        back-end e infraestrutura.
      </p>
      <p>
        Ajudo a organizar comunidades locais de tecnologia na cidade de Sorocaba - SP e também sou
        palestrante, onde já tive a oportunidade de compartilhar conhecimento em varias conferências
        de tecnologia - Geekle, BrazilJS, TDC, etc... - com o objetivo de espalhar para o mundo o
        poder da programação.
      </p>
    </Content>
  </Main>
);

export default About;
