import Link from 'next/link';
import { Image, Button } from 'semantic-ui-react';

interface ButtonCardProps {
  src: string;
  name: string;
}

export const ButtonCard: React.FC<ButtonCardProps> = ({src, name}) => {
    return (
      <>
      <Link href={`/users/${name}/repos`}>
        <Button basic >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Image size='tiny' circular src={src} />
            { /* Because Amazon user name on github is Amzn, so do this little trick to fix it.*/}
            <h3>{ name === 'Amzn' ? 'Amazon' : name  }</h3>
          </div>
        </Button>
      </Link>
      </>
    )
  }