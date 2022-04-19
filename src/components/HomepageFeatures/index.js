import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Rapido y sencillo',
    Svg: require('@site/static/img/undraw_speed_test_wxl0.svg').default,
    description: (
      <>
        Encuentra lo que necesitas rápida y eficazmente en esta página de documentación.
      </>
    ),
  },
  {
    title: 'Caracteristicas únicas',
    Svg: require('@site/static/img/undraw_uploading_re_okvh.svg').default,
    description: (
      <>
        Documentate sobre funcionalidades y servicios especiales que solo Obsly Host ofrece.
      </>
    ),
  },
  {
    title: 'Soporte activo',
    Svg: require('@site/static/img/undraw_active_support_re_b7sj.svg').default,
    description: (
      <>
        Necesitas más ayuda? Entra a nuestro servidor de <Link href="https://discord.obsly.host">discord</Link> y 
        resuelve tus dudas con la comunidad o el staff!

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
