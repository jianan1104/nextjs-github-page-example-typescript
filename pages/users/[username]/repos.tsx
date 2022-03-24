import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState, useCallback, useEffect } from 'react';
import RepositoryList from "../../../components/RepositoryList";
import MenuComponent from '../../../components/Menu';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { ParsedUrlQuery } from 'querystring'


interface IParams extends ParsedUrlQuery {
  username: string;
}

const Repos = ({ username }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [pageNumber, setPageNumber] = useState<number>(2);
  const { SearchRepositoriesByUser } = useActions();
  const { user, data, error, loading} = useTypedSelector((state) => state.repositories);
  useEffect(() => {
    SearchRepositoriesByUser(username);
  }, []);
  const handleOnDocumentBottom = useCallback(() => {
  // When repos still available
    if((pageNumber*10 <= user.public_repos)) {
      SearchRepositoriesByUser(username, pageNumber);
      setPageNumber(pageNumber + 1);
    }
  }, []);
  // When reach page bottom, get new data
  useBottomScrollListener(handleOnDocumentBottom);

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
}

export default Repos;