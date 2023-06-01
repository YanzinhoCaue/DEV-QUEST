import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-contex"

export const Button = (props) => {
  const { theme } = useContext(ThemeContext) 

  return (
    <button {...props } 
      style={{ color: theme.color, backgroundColor: theme.background }}/>
  )
}