import { Search } from "./components/Search"
import { User } from "./components/User"
import { useSearch } from "./contexts/ContextSearch"
import { data } from "./data"

function App() {

  const { textInput } = useSearch();

  const dataWithFilter = data.filter(item => item.name.toLowerCase().includes(textInput.toLowerCase()))

  return (
    <div className="App">
      <Search />
      <ul>
        {
          data.length > 0 && dataWithFilter.map(user => {
            return (
              <li key={user.id}>
                <hr className="w-full"></hr>
                <User name={user.name} bio={user.bio} image={user.image} />
                <hr className="w-full"></hr>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
