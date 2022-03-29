import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import MenuComponent from '../../../components/Menu';
import { useActions } from "../../../hooks/useActions";
import { useState, useCallback, useEffect } from 'react';
import RepositoryList from "../../../components/RepositoryList";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

interface IParams extends ParsedUrlQuery {
  username: string;
};

const Repos = ({ username }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [pageNumber, setPageNumber] = useState<number>(2);
  const { SearchRepositoriesByUser } = useActions();
  const { user, data, error } = useTypedSelector((state) => state.repositories);
  const router = useRouter();
  const handleOnDocumentBottom = useCallback(() => {
    // When repos still available
      if((pageNumber*10 <= user.public_repos)) {
        SearchRepositoriesByUser(username, pageNumber, true);
        setPageNumber(pageNumber + 1);
      }
    }, []);
    // When reach page bottom, get new data
  useBottomScrollListener(handleOnDocumentBottom);

  useEffect(() => {
    SearchRepositoriesByUser(username);
    if(error != null) router.push('/404')
  }, [error]);

  

  return (
    <>
    <div>
      <MenuComponent user={user} />
      <RepositoryList response={data} />
    </div>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.query as IParams;

  return { props: { username } };
};

export default Repos;