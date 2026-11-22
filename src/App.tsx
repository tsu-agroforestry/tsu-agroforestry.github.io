import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ContactPage } from './pages/ContactPage'
import { ExtensionPage } from './pages/ExtensionPage'
import { HomePage } from './pages/HomePage'
import { PeoplePage } from './pages/PeoplePage'
import { PublicationsPage } from './pages/PublicationsPage'
import { ResearchPage } from './pages/ResearchPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { TeachingPage } from './pages/TeachingPage'

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/extension" element={<ExtensionPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
