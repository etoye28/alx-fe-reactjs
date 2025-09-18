// src/App.jsx
/*
import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import './App.css'

import { AddRecipeForm } from './components/AddRecipeForm'
import { RecipeList } from './components/RecipeList'
import  RecipeDetails  from './components/RecipeDetails'
import  EditRecipeForm  from './components/EditRecipeForm'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div style={{ padding: '2rem' }}>
        <header style={{ marginBottom: '1.5rem' }}>
          <h1>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              🍲 Recipe Sharing App
            </Link>
          </h1>
          <nav style={{ marginBottom: '1rem' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/add">Add Recipe</Link>
          </nav>
        </header>

              
      <SearchBar />

        
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>

     
      <div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      </Router>
    </>
  )
}

export default App
*/
// src/App.jsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import { AddRecipeForm } from './components/AddRecipeForm'
import { RecipeList } from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <header style={{ marginBottom: '1.5rem' }}>
          <h1>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              🍲 Recipe Sharing App
            </Link>
          </h1>
          <nav style={{ marginBottom: '1rem' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/add" style={{ marginRight: '1rem' }}>Add Recipe</Link>
            <Link to="/favorites" style={{ marginRight: '1rem' }}>Favorites</Link>
            <Link to="/recommendations">Recommendations</Link>
          </nav>
        </header>

        {/* Search Bar */}
        <SearchBar />
        
        {/* Routing setup */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>

      {/* Demo Vite + React section (optional, can remove later) */}
      <div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Router>
  )
}

export default App
