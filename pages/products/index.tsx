import { NextPage } from 'next'
import Link from 'next/link'

import Layout from '../../components/Layout'
import List from '../../components/List'
import { Product } from '../../interfaces'
import { sampleFetchWrapper } from '../../utils/sample-api'

type Props = {
  items: Product[]
  pathname?: string
}

const WithInitialProps: NextPage<Props> = ({ items }) => (
  <Layout title="Products List">
    <h1>Products List</h1>
      {/*Example fetching data from inside <code>getInitialProps()</code>.*/}
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

WithInitialProps.getInitialProps = async ({ pathname }) => {
  // Example for including initial props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Product[] = await sampleFetchWrapper(
    'http://localhost:3000/api/products'
  )

  return { items, pathname }
}

export default WithInitialProps
