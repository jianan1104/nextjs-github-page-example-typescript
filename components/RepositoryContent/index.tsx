import About from '../About';
import Readme from '../Readme';
import Skeleton from 'react-loading-skeleton';
import styles from './RepositoryContent.module.css';
import { Grid, Card, Icon } from 'semantic-ui-react';
import { useTypedSelector } from "../../hooks/useTypedSelector";



interface RepositoryContentProps {
    description: string;
    topics: string[];
    readme: string;
};

const RepositoryContent: React.FC<RepositoryContentProps> = ({description, topics, readme}) => {
    const { loading } = useTypedSelector((state) => state.repository);
    return(
        <Grid stackable>
            <Grid.Row>
            <Grid.Column width={12}>
                <Card className={styles.card}>
                <Card.Header className={styles.cardHeader}><h3><Icon name="list"/>&nbsp;&nbsp;readme.md</h3></Card.Header>
                <Card.Content className={styles.cardContent}>
                    { !loading ? <Readme content={readme}/> : <Skeleton count={20}/> }
                </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={4}>
                <h3>About</h3>
                { !loading ? <About description={description} topics={topics}/> : <Skeleton count={10}/> }
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
};

export default RepositoryContent;