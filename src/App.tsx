import Corner from './Components/Corner';
import Container from './Layout/Container'
import FloatingImage from './Layout/FloatingImage';
import Header from './Layout/Header'
import Skills from './Layout/Skills'
import Computer from './assets/Computer.svg';

function App() {
  return (<Container>
    <Header />
    <Skills />
    <Corner topRight={<FloatingImage intensity={3} image={Computer} />}>
      <FloatingImage intensity={5}>
        <div style={{ background: 'white', height: 300 }}>OI</div>
      </FloatingImage>
    </Corner>

  </Container>)
}

export default App
