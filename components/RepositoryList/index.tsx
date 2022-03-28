import React from 'react';
import Link from 'next/link';
import { Card, Icon, Container } from 'semantic-ui-react';
import color from '../../modules/colors';
import styles from './RepositoryList.module.css';
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Skeleton from 'react-loading-skeleton';

TimeAgo.addLocale(en);

interface RepositoryListProps {
  response: any[]
}



const RepositoryList: React.FC<RepositoryListProps> = ({ response }) => {
    const { loading } = useTypedSelector((state) => state.repositories);

    const SkeletonRows = Array.from(Array(20)).map(() => {
      return <div style={{ marginBottom: '16px'}}><Skeleton height={30}/><Skeleton count={4}/></div>
    });
    const renderRepositories = () => {
      const items = response.map((repo, idx) => {
      const { name, description, 
              language, license, forks_count,
              stargazers_count, updated_at, owner
            } = repo;
      return {
          header: (
            <Link href={ `/users/${owner.login}/repos/${name}` }>
              <a>{ name }</a>
            </Link>
          ),
          description: description,
          // Display language, start, fork, pull request, update_date
          extra: (
            <>
              <p>
                { language !== null ? (
                  <>
                    <span className={styles.repo_language} style={{backgroundColor: `${color[language]}`}}></span>
                    <span className={styles.label_mr}>{ language }</span>
                  </>
                  ) : null }
                { license && license.spdx_id !== 'NOASSERTION' ? (
                    <>
                      <Icon name='balance scale' /><span className={styles.label_mr}>{ license.spdx_id }</span> 
                    </>
                  )  : null }
                { <>
                    <span className={styles.label_mr}><Icon name='fork' />{ forks_count }</span>
                    <span className={styles.label_mr}><Icon name='star outline'/>{ stargazers_count }</span>
                    <span className={styles.label_mr}><Icon name='arrows alternate vertical'/>{ stargazers_count }</span>
                  </> }
                <span>Updated <ReactTimeAgo date={new Date(updated_at)} locale="en-US"/></span>
                
              </p>
            </>
          ),
          key: idx,
          fluid: true
        }
      });
      return <Card.Group items={items} /> 

  };
  return (
    <>
    <Container>
        { !loading ? renderRepositories() : SkeletonRows }
    </Container>
    </>
  )
};


export default RepositoryList;