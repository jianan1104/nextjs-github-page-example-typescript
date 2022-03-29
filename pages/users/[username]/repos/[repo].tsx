import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { Container } from 'semantic-ui-react';
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import RepositoryMenu from '../../../../components/RepositoryMenu';
import RepositoryHeader from '../../../../components/RepositoryHeader';
import RepositoryContent from '../../../../components/RepositoryContent';

interface IParams extends ParsedUrlQuery {
  username: string;
  repo: string;
};

const Repo = ({ username, repo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data, error, loading} = useTypedSelector((state) => state.repository);
  const { description, topics, readme }: { description: string, topics: string[], readme: string} = data;
  const { GetRepository } = useActions();
  const router = useRouter();
  useEffect(() => {
    GetRepository(username, repo);
  }, []);

  useEffect(() => {
    if(error != null) router.push('/404');
  }, [error]);

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