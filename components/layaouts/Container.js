import NavBar from "./NavBar";
import Head from "next/head";

const Container = (props) => (
  <div>
    <Head>
      <title>Next.js</title>
      {/*
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
      />
      */}
    </Head>
    <NavBar />
    <div style={{"margin-left":"85px","margin-top":"15px"}}> {props.children}</div>
  </div>
);

export default Container;