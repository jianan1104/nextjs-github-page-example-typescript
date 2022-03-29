import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';
import { Image, Button, Modal } from 'semantic-ui-react';

interface Props {
    statusCode?: number
};

const Error: NextPage<Props> = ({ statusCode }) => {
    const router = useRouter();
    const home = () => {
        router.push('/');
    }
    return (
        <>
        <div style={{ display: 'flex' , flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Image src="https://i.imgur.com/c738l7Q.jpg" size='large'/>
            <p>
                房間代碼: { statusCode } <br />
                痾...你好像走錯房間，被你看到我們在打UNO了，一起玩？ 
            </p>
            <Modal
                trigger={<Button primary>一起玩！！</Button>}
                header='一起玩！'
                content='要一起玩要先找我來面試，到時我會帶一副UNO.. XD'
                actions={[{ key: 'cancel', content: '算了', color: 'red', onClick: home }, { key: 'done', content: '好啊', positive: true, onClick: home }]}
                />
        </div>
        </>
    )
  };
  
  Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  };
  
  export default Error;




