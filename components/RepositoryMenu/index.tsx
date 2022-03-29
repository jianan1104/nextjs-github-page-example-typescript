import { useState } from 'react';
import styles from './RepositoryMenu.module.css';
import { Menu, Input, Icon, Sidebar } from 'semantic-ui-react';
import { Media, MediaContextProvider } from "../../modules/media";

const DesktopMenu: React.FC = () => {
    return (
        <>
            <Menu className={styles.header}>
                <Menu.Item>
                    <Icon name="github" size='big' className={styles.text} />
                </Menu.Item>
                <Menu.Item>
                    <Input icon='search' placeholder='Search or jump to...' />
                </Menu.Item>
                <Menu.Item header name='Pull requests' className={styles.text} />
                <Menu.Item header name='Issues'        className={styles.text} />
                <Menu.Item header name='Marketplace'   className={styles.text} />
                <Menu.Item header name='Explore'       className={styles.text} />
                <Menu.Menu position='right' >
                    <Menu.Item className={styles.text}>
                        <Icon name="bell outline"/>
                    </Menu.Item>
                    <Menu.Item className={styles.text}>
                        <Icon name="plus"/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </>
    )
};

const MobileMenu: React.FC = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className={styles.header}>
                <div className={styles.text} >
                    <div className={styles.mobileHeader}>
                        <Icon name='bars' size='large' onClick={() => setVisible(true)} style={{ cursor: 'pointer'}}/>
                        <Icon name='github' size='big'/>
                        <Icon name='bell outline' size='large'/>
                    </div>
                </div>
            </div>
            <Sidebar
                as={Menu}
                animation='overlay'
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
            >
                <Menu.Item>
                    <Input icon='search' placeholder='Search or jump to...' />
                </Menu.Item>
                <Menu.Item as='a'>
                    Dashboard
                </Menu.Item>
                <Menu.Item as='a'>
                    Pull requests
                </Menu.Item>
                <Menu.Item as='a'>
                    Issues
                </Menu.Item>
                <Menu.Item as='a'>
                    Marketplace
                </Menu.Item>
                <Menu.Item as='a'>
                    Explore
                </Menu.Item>
                <Menu.Item as='a'>
                    Codespaces
                </Menu.Item>
                <Menu.Item as='a'>
                    Settings
                </Menu.Item>
            </Sidebar>
        </>
    )
};

const RepositoryMenu: React.FC = () => {
    return (
        <>
            <MediaContextProvider>
                <Media at="sm" >
                    <MobileMenu />
                </Media>
                <Media greaterThan="sm" >
                    <DesktopMenu />
                </Media>
            </MediaContextProvider>
        </>
    )
}

export default RepositoryMenu;
