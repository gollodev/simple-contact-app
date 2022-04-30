import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './views/Contact'
import ContactDetail from './views/ContactDetail'
import ContactAdd from './views/ContactAdd'
import Layout from './components/Layout'

const App: FC = (): JSX.Element => (
  <Layout>
    <Router>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/contacts/:id" element={<ContactDetail />} />
        <Route path="/contacts/add" element={<ContactAdd />} />
      </Routes>
    </Router>
  </Layout>
)

export default App
