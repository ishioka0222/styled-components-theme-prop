import { PropsWithChildren } from "react";
import styled from "styled-components";

type ThirdPartyTheme = "filled" | "outlined";

interface ThirdPartyComponentProps {
  className?: string;
  theme: ThirdPartyTheme;
}

const ThirdPartyComponent: React.FC<
  PropsWithChildren<ThirdPartyComponentProps>
> = (props) => {
  return (
    <div
      className={props.className}
      style={{
        padding: "0.5rem",
        margin: "0.5rem 0",
        border: "1px solid dodgerblue",
        backgroundColor:
          props.theme === "filled" ? "dodgerblue" : "transparent",
        color: props.theme === "filled" ? "whitesmoke" : "dodgerblue",
      }}
    >
      {`theme: ${props.theme}`}
      <hr />
      {props.children}
    </div>
  );
};

type StyledThirdPartyComponentProps = Omit<
  ThirdPartyComponentProps,
  "theme"
> & { _theme: ThirdPartyTheme };

const StyledThirdPartyComponent = styled(
  ({ _theme, ...props }: PropsWithChildren<StyledThirdPartyComponentProps>) => (
    <ThirdPartyComponent {...props} theme={_theme} />
  )
)`
  box-shadow: 0 8px 8px 0px #333;
`;

function App() {
  return (
    <>
      <StyledThirdPartyComponent _theme={"filled"}>
        StyledThirdPartyComponent's children...
      </StyledThirdPartyComponent>
      <StyledThirdPartyComponent _theme={"outlined"}>
        StyledThirdPartyComponent's children...
      </StyledThirdPartyComponent>
    </>
  );
}

export default App;
