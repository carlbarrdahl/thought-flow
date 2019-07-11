import styled from "styled-components"
import tw from "tailwind.macro"

const Button = styled.button`
  ${tw`bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4`};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

export default Button
