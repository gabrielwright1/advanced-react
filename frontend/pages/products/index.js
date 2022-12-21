import { useRouter } from 'next/router';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';
import PleaseSignIn from '../../components/PleaseSignIn';

export default function ProductsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <PleaseSignIn>
      <div>
        <Pagination page={page || 1} />
        <Products page={page || 1} />
        <Pagination page={page || 1} />
      </div>
    </PleaseSignIn>
  );
}
