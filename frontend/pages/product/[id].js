import PleaseSignIn from '../../components/PleaseSignIn';
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  return (
    <PleaseSignIn>
      <SingleProduct id={query.id} />
    </PleaseSignIn>
  );
}
