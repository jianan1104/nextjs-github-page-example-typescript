import { Container, Grid } from 'semantic-ui-react';
import { ButtonCard } from '../components/ButtonCard';

const Index: React.FC = () => {
  return (
    <>
    <Container>
      { /* Slogan */}
      <div style={{ display: 'flex' , flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <h2 style={{ textAlign: 'center', 
              marginBottom: '32px',
              background: 'linear-gradient(to right, #30CFD0, #c43ad6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
              }}>Dcard or FAANG?</h2>
        { /* Make Some ButtonCards to explore user repositories quickly */}
        <Grid stackable centered>
            <ButtonCard name="Dcard" src="/dcard.png"/>
            <ButtonCard name="Facebook" src="/meta.png"/>
            <ButtonCard name="Apple" src="apple.png"/>
            <ButtonCard name="Amzn" src="/amazon.svg"/>
            <ButtonCard name="Netflix" src="/netflix.png"/>
            <ButtonCard name="Google" src="/google.jpeg"/>
        </Grid>
        <h3>Created by <a href='https://github.com/jianan1104/nextjs-github-page-example' target='_blank' rel="noreferrer">@jianan1104</a></h3>
      </div>
    </Container>
    </>
  )
};


export default Index;