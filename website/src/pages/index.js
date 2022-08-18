import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import ReactiveButton from 'reactive-button';
import { FaArrowRight } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import { useHistory } from '@docusaurus/router';
import Playground from '../components/Playground/Playground';
import PropTypes from 'prop-types';

const showcaseCode = `
function App() {
  const [state, setState] = useState('idle');

  return (
    <ReactiveButton
      buttonState={state}
      onClick={() => {
        setState('loading');
        setTimeout(() => {
          setState('success');
        }, 2000);
      }}
    />
  );
}
`.trim();

const showcaseScope = { ReactiveButton, useState };

const features = [
  {
    title: 'Progress Indicator',
    description: (
      <>
        Don&apos;t just click button. See what is happening behind your button
        click.
      </>
    ),
  },
  {
    title: 'Animated',
    description: (
      <>
        The 3D animated buttons replace the traditional buttons with reactive
        behavior.
      </>
    ),
  },
  {
    title: 'Customizable',
    description: (
      <>
        Comes with proper customization. Use the beautiful default themes or
        create your own.
      </>
    ),
  },
  {
    title: 'Simple',
    description: (
      <>
        You know button? Use it just like a button. It&apos;s super easy and
        simple.
      </>
    ),
  },
  {
    title: 'Lightweight',
    description: (
      <>Extremely small in size. Less than 20 KB with zero dependency.</>
    ),
  },
  {
    title: 'Flexible',
    description: (
      <>Reactive button is an isolated component. Use it with any UI library.</>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4 text--center p-4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const {
    siteConfig: { title, customFields, tagline },
  } = useDocusaurusContext();

  const { description } = customFields;

  const [showGetStartedButton, setShowGetStartedButton] = useState(false);
  const docLink = useBaseUrl('docs/introduction');
  const history = useHistory();

  useEffect(() => {
    setShowGetStartedButton(true);
  }, []);

  const buttonOnClickHandler = () => {
    history.push(docLink);
  };

  return (
    <Layout title={tagline} description={description}>
      <div className={styles.root}>
        <header className={clsx('hero ', styles.heroBanner)}>
          <div className="container">
            <div className="text--center">
              <img
                alt={title}
                className={styles.logo}
                src={useBaseUrl('img/logo/logo.png')}
              />
            </div>
            <h1 className="hero__title">
              <span className={styles.heroProjectKeywords}>React</span>
              <span className={styles.heroProjectKeywordsSecondary}>
                ive
              </span>{' '}
              <span className={styles.heroProjectKeywords}>Button</span>
            </h1>
            <p className="hero__subtitle">{tagline}</p>
            <div className={styles.buttons}>
              <ReactiveButton
                style={{ display: showGetStartedButton ? 'block' : 'none' }}
                size={'large'}
                onClick={buttonOnClickHandler}
                idleText={
                  <span>
                    Get Started &nbsp;
                    <FaArrowRight className="react-icon" />
                  </span>
                }
                width={'170px'}
                height={'50px'}
                className={'fadeIn'}
              />
            </div>
          </div>
        </header>
        {showGetStartedButton && (
          <main>
            <section className={styles.exampleComponent}>
              <div className={styles.exampleComponent__container}>
                <div className="row">
                  <div className="col col--12">
                    <div className={styles.exampleComponent__item}>
                      <Playground
                        code={showcaseCode}
                        scope={showcaseScope}
                        height={'250px'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        )}
        <main>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row justify-content-center">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </Layout>
  );
}

Feature.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
};

export default Home;
