import { useColorMode } from "@chakra-ui/react";

const MockSwitchMode: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return <button data-testid="MockSwitchMode" onClick={toggleColorMode} />;
};

export default MockSwitchMode;
