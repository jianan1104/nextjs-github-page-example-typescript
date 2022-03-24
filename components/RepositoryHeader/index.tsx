import { Icon, Container, Breadcrumb, Button, Label, Menu, Dropdown } from 'semantic-ui-react';
import { Media, MediaContextProvider } from "../../modules/media";
import millify from "millify";
import styles from './RepositoryHeader.module.css';
import { RepositoryType } from '../../modules/interface';

interface HeaderProps {
  username: string;
  repo: string;
  data: RepositoryType
}

const RepositoryHeader: React.FC<HeaderProps> = ({ username, repo, data }) => {
    return (
        <div className={styles.header}>
        <div className={styles.titleBar}>
          <Breadcrumb style={{ fontSize: '20px'}}>
            <Icon name='book' size='small' style={{color: 'grey'}}/>
            <Breadcrumb.Section><a href={`/users/${username}/repos`}>{ username }</a></Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section style={{ fontWeight: '600'}} target="_blank" href={data.html_url}>
                { repo }
            </Breadcrumb.Section>
          </Breadcrumb>
          <MediaContextProvider>
              <Media greaterThan="sm">
                <span>
                  <Button basic className={styles.Button}>
                    <Icon name='eye' />Unwatch&nbsp; 
                    <Label circular>
                      {millify(data.subscribers_count | 0)}
                    </Label>
                  </Button>
                  <Button basic className={styles.Button}>
                    <Icon name='fork' />Fork&nbsp; 
                    <Label circular>
                      {millify(data.forks_count | 0)}
                    </Label>
                  </Button>
                  <Button basic className={styles.Button}>
                    <Icon name='star outline' />Star&nbsp; 
                    <Label circular>
                      {millify(data.stargazers_count | 0)}
                    </Label>
                  </Button>
                </span>
              </Media>
          </MediaContextProvider>
        </div>
        <MediaContextProvider>
          <Media at='sm'>
            <Container>
              <p>{data.description}</p>
              { data.homepage ? (
              <p><Icon name='chain'/><a href={data.homepage}>{data.homepage}</a></p>) : null
              }
              <p>
                <span><a style={{ color: '#57606a'}} href={`https://github.com/${username}/${repo}/stargazers`}><Icon name='star outline'/> {millify(data.stargazers_count | 0)} stars&nbsp; </a></span>
                <span><a style={{ color: '#57606a'}} href={`https://github.com/${username}/${repo}/network/members`}><Icon name='fork'/>{millify(data.forks_count | 0)} forks</a></span>
              </p>
              <div style={{ display: 'flex'}}>
              <Button basic className={styles.ButtonSM}>
                  <Icon name='star outline' />Star&nbsp; 
                </Button>
                <Button basic className={styles.ButtonSM}>
                  <Icon name='eye' />Watch&nbsp; 
                </Button>
              </div>
            </Container>
          </Media>
        
        <div>
          <Menu pointing secondary style={{ borderBottom: '0px'}}>
          <Menu.Menu style={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Menu.Item active={true}>
              <Icon name='code'/><span> Code</span>
            </Menu.Item>
            <Menu.Item>
              <Icon name='dot circle outline'/><span> Issues</span>
              <Label circular>
                {millify(data.open_issues_count | 0)}
              </Label>
            </Menu.Item>
            <Media at='sm'>
              <Dropdown item text='More'>
                <Dropdown.Menu>
                  <Dropdown.Item  text='Pull requests' />
                  <Dropdown.Item  text='Actions' />
                  <Dropdown.Item  text='Projects' />
                  <Dropdown.Item  text='Wiki' />
                  <Dropdown.Item  text='Security' />
                  <Dropdown.Item  text='Insights' />
                </Dropdown.Menu>
              </Dropdown>
            </Media>
            <Media greaterThan='sm' style={{ display: 'flex' }}>
              <Menu.Item>
                <Icon name='play circle outline'/><span>  Actions</span>
              </Menu.Item>
              <Menu.Item>
                <Icon name='file alternate outline'/><span>  Projects</span>
              </Menu.Item>
              <Menu.Item>
                <Icon name='info'/><span>  Wiki</span>
              </Menu.Item>
              <Menu.Item>
                <Icon name='shield alternate'/><span>  Security</span>
              </Menu.Item>
              <Menu.Item>
                <Icon name='chart line'/><span>  Insights</span>
              </Menu.Item>
              <Menu.Item>
                <Icon name='cog'/><span>  Settings</span>
              </Menu.Item>
            </Media>
          </Menu.Menu>
        </Menu>
        </div>
        </MediaContextProvider>
      </div>
    )
};

export default RepositoryHeader;