import { Theme } from "@/theme/Theme";
import { AppProps } from "next/app";
import { FC, ReactElement } from "react";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
};

export default App;
