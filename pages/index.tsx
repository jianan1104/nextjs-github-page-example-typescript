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
            <ButtonCard name="Dcard" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Dcard_Favicon_x520.png"/>
            <ButtonCard name="Facebook" src="https://mattgeimer.com/resources/experience/Meta.png"/>
            <ButtonCard name="Apple" src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202202150751"/>
            <ButtonCard name="Amzn" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"/>
            <ButtonCard name="Netflix" src="https://inside-assets1.inside.com.tw/2016/06/netflix-new-logo.png?w=500&fit=max&q=80"/>
            <ButtonCard name="Google" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=1649894400&v=beta&t=HM3TkQjXlav6Xh4cKUQtriN8OXTV937mU4V5aWjJER4"/>
        </Grid>
      </div>
    </Container>
    </>
  )
};


export default Index;