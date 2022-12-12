import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/dist/next-server/lib/head';
import DisplayError from './ErrorMessage';
import OrderItemStyles from './styles/OrderItemStyles';
import OrderStyles from './styles/OrderStyles';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    Order(where: { id: $id }) {
      label
      charge
      items {
        id
        name
        description
        price
        quantity
        photo {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
      user {
        name
      }
    }
  }
`;

export default function SingleOrder({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Order } = data;
  return (
    <OrderStyles>
      <Head>
        <title>Sick Fits | Order: {Order.label}</title>
      </Head>
      <OrderItemStyles>
        <h1>Order number: {id}</h1>
        <p>Order Total: {Order.label}</p>

        {Order.items.map((item) => (
          <div className="order-item-details" key={item.id}>
            <h2>{item.name}</h2>
            <img
              style={{ width: 100 }}
              src={item.photo.image.publicUrlTransformed}
              alt={item.photo.altText}
            />
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </OrderItemStyles>
    </OrderStyles>
  );
}
