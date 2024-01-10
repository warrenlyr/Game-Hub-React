import { HStack, Switch, useColorMode } from '@chakra-ui/react'
import { BsFillMoonStarsFill } from "react-icons/bs";

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
    const isDark = colorMode === 'dark';

  return (
    <HStack>
        <Switch colorScheme='green' isChecked={isDark} onChange={toggleColorMode} />
        <BsFillMoonStarsFill />
    </HStack>
  )
}

export default ColorModeSwitch