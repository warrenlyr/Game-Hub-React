import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if(!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = children.substring(0, limit);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {expanded ? children : summary + "..."}
      <Button
        onClick={handleExpandClick}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={3}
      >
        {expanded ? "Read Less" : "Read More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
