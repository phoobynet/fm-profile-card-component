import ProfileCard from '@/routes/ProfileCard'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={<ProfileCard />}
      />
    </Routes>
  )
}
