import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {LanguageSwitcher} from '../components/frontPage';
import LongSejourForm from '../components/formData';

const SecondPage = () => (
  <Layout>
    <nav>
      <Link to="/">Go back to the homepage</Link>
      <LanguageSwitcher />
    </nav>
    <LongSejourForm />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
