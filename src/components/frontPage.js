
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import { useTranslation } from 'react-i18next';
import { navigate } from "gatsby"

// Local test :
// const statamicPath = 'http://127.0.0.1:8000/api';
// Prod :
const statamicPath = 'https://laravel.site-demo-christophe-junod.ch/api';

const Menu = () => {
  const { t } = useTranslation(["translation"]);

  return (
    <ul className="section-menu">
      <li><a href="#hero">{t('Accueil')}</a></li>
      <li><a href="#about">{t('À propos')}</a></li>
      <li><a href="#services">{t('Services')}</a></li>
      <li><a href="#projects">{t('Projets')}</a></li>
      <li><a href="#contact">{t('Contact')}</a></li>
    </ul>
  );
}

const LanguageSwitcher = () => {
  const location = useLocation();

  const changeLang = (lang) => {
    const path = location.pathname;
    navigate(`${path}?lang=${lang}`);
  };

  return (
      <div className="language-switcher">
        <button onClick={() => changeLang("fr")}>FR</button>
        <button onClick={() => changeLang("en")}>EN</button>
        <button onClick={() => changeLang("de")}>DE</button>
      </div>
  );
}

const Hero = ({ lang = 'fr' }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${statamicPath}/hero/${lang}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [lang]);

  if (!data) return <p>Loading...</p>;

  return (
    <section id="hero" className="hero">
      <h1>{data.title}</h1>
      <div className="hero__subtitle">{data.content}</div>
    </section>
  );
};

const About = ({ lang = 'fr' }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${statamicPath}/about/${lang}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [lang]);

  if (!data) return <p>Loading...</p>;

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>{data.title}</h2>
        <div className="about__text">{data.content}</div>
      </div>
    </section>
  );
};

const Services = ({ lang = 'fr' }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${statamicPath}/services/${lang}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [lang]);

  if (!data) return <p>Loading...</p>;

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>{data.title}</h2>
        <ul className="services__list">
          <li>{data.content_1}</li>
          <li>{data.content_2}</li>
          <li>{data.content_3}</li>
        </ul>
      </div>
    </section>
  );
};

const Projects = ({ lang = 'fr' }) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${statamicPath}/project/${lang}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [lang]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>{t('Nos projets')}</h2>
        <div className="projects__list">
          {data.length > 0 ? (
            data.map((project, index) => (
              <article key={index} className="project">
                <h3 className="project__title">{project.version_name}</h3>
                <div className="project__description">{project.content}</div>
                <a className="project__lien" href={project.link} target="_blank" rel="noreferrer" >
                  {project.text_field}
                </a>
              </article>
            ))
          ) : (
            <p>{t('Aucun projet.')}</p>
          )}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ lang = 'fr' }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${statamicPath}/contact/${lang}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [lang]);

  if (!data) return <p>Loading...</p>;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>{data.title}</h2>
        <div className="about__text"></div>
        <div className="contact__form">
          <Link className="contact__button" to={`/formPage?lang=${lang}`}>
            {data.content}
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Menu, LanguageSwitcher, Hero, About, Services, Projects, Contact };
