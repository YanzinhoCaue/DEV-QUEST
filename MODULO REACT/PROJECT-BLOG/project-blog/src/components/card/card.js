import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-contex"

export const Card = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={{ color: theme.color, backgroundColor: theme.background }}>
      <h1>Titulo do card</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, voluptatem provident earum labore</p>
    </div>
  )
}