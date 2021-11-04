import React from 'react';

import Image from 'next/image';

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
      <div className="w-full text-center">
        <Image
          className="rounded-full"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEa1JupM6oKow/profile-displayphoto-shrink_800_800/0/1581986697399?e=1640822400&v=beta&t=ZnToXoSeE27BVvdgSpwj3UIh_2ypnjH3UVGgbT8TbuU"
          height="200"
          width="200"
        />
      </div>
      <p className="p-2">
        Olá, meu nome é Gabriel Tosta , sou desenvolvedor autodidata apaixonado por javascript .
        <section>
          <br />
          Trabalho desde 2015 principalmente com front-end, mas também com uma baita experiência em
          back-end e infraestrutura.
        </section>
      </p>
      <p className="p-2">
        Ajudo a organizar comunidades locais de tecnologia na cidade de Sorocaba - SP e também sou
        palestrante, onde já tive a oportunidade de compartilhar conhecimento em varias conferências
        de tecnologia - Geekle, BrazilJS, TDC, etc... - com o objetivo de espalhar para o mundo o
        poder da programação.
      </p>
    </Content>
  </Main>
);

export default About;
