export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // default prop value ButtonsContainer = "menu", we can now do not set ButtonsContainer prop in Examples
  // we create a const which can be used as a custom component, must start with uppercase
  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
