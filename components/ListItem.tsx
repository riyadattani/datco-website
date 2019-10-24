import * as React from 'react'
import Link from 'next/link'

import { Product } from '../interfaces'

type Props = {
  data: Product
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/products/[id]" as={`/products/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
