import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Container } from 'semantic-ui-react';
import RepositoryMenu from '../../../../components/RepositoryMenu';
import RepositoryHeader from '../../../../components/RepositoryHeader';
import RepositoryContent from '../../../../components/RepositoryContent';
import { ParsedUrlQuery } from 'querystring'
import { useEffect } from 'react';
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

interface IParams extends ParsedUrlQuery {
  username: string;
  repo: string;
}

const Repo = ({ username, repo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data, error, loading} = useTypedSelector((state) => state.repository);
  const { description, topics, readme }: { description: string, topics: string[], readme: string} = data;
  const { GetRepository } = useActions();
  useEffect(() => {
    GetRepository(username, repo);
  }, []);

  return (
    <>
      <RepositoryMenu />
      <RepositoryHeader username={username} repo={repo} data={data}/>
      <Container>
        <RepositoryContent description={description} topics={topics}  readme={readme} />
      </Container>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username, repo } = context.query as IParams;

  return { props: { username, repo } };
};


export default Repo;