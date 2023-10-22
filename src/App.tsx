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

const StyledThirdPartyComponentPassingThemePropAsIs = styled(
  ThirdPartyComponent
)`
  box-shadow: 0 8px 8px 0px #333;
`;

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
      <h1>Example</h1>
      <hr />
      <h2>Case 1: Original components</h2>
      <ThirdPartyComponent theme={"filled"}>
        ThirdPartyComponent's children...
      </ThirdPartyComponent>
      <ThirdPartyComponent theme={"outlined"}>
        ThirdPartyComponent's children...
      </ThirdPartyComponent>
      <hr />
      <h2>
        Case 2: Pass the <code>theme</code> prop as is.
      </h2>
      <StyledThirdPartyComponentPassingThemePropAsIs theme={"filled"}>
        StyledThirdPartyComponentPassingThemePropAsIs's children...
      </StyledThirdPartyComponentPassingThemePropAsIs>
      <StyledThirdPartyComponentPassingThemePropAsIs theme={"outlined"}>
        StyledThirdPartyComponentPassingThemePropAsIs's children...
      </StyledThirdPartyComponentPassingThemePropAsIs>
      <hr />
      <h2>
        Case 3: Bypass the <code>theme</code> prop.
      </h2>
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
