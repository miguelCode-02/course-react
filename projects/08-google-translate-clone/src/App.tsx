import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionTypes } from './types.d'

function App() {

  const { fromLanguage, interchangeLanguages, toLanguage, setFromLanguage, setToLanguage } = useStore()

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector
            type={SectionTypes.From}
            value={fromLanguage}
            onChange={setFromLanguage} />
          {fromLanguage}
        </Col>

        <Col>
          <Button variant='link' disabled={fromLanguage == AUTO_LANGUAGE} onClick={interchangeLanguages}> <ArrowsIcon /></Button>
        </Col>

        <Col>
          <LanguageSelector
            type={SectionTypes.To}
            value={toLanguage}
            onChange={setToLanguage} />
          {toLanguage}
        </Col>


      </Row>
    </Container>
  )
}

export default App
