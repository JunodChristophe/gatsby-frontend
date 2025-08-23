import '../i18n';
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Menu, Hero, About, Services, Projects, Contact} from '../components/frontPage';

const getLangFromSearch = (search) => {
  const params = new URLSearchParams(search)
  return params.get("lang") || "fr"
}

const IndexPage = () => {
  const lang = typeof window !== "undefined"
    ? getLangFromSearch(window.location.search)
    : "fr"
  return (
    <Layout>
      <Menu />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
