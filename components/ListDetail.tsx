import * as React from 'react'

import { Product } from '../interfaces'

type ListDetailProps = {
  item: Product
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: user,
}) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail
