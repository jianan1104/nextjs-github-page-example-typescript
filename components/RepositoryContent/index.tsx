import {Grid, Card, Icon } from 'semantic-ui-react';
import About from '../About';
import Readme from '../Readme';
import styles from './RepositoryContent.module.css';

interface RepositoryContentProps {
    description: string;
    topics: string[];
    readme: string;
}

const RepositoryContent: React.FC<RepositoryContentProps> = ({description, topics, readme}) => {
    return(
        <Grid stackable>
            <Grid.Row>
            <Grid.Column width={12}>
                <Card className={styles.card}>
                <Card.Header className={styles.cardHeader}><h3><Icon name="list"/>&nbsp;&nbsp;readme.md</h3></Card.Header>
                <Card.Content className={styles.cardContent}>
                    <Readme content={readme}/>
                </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={4}>
                <About description={description} topics={topics}/>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
};

export default RepositoryContent;