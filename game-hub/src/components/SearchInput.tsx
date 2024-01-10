import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) {
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftAddon children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search games"
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
