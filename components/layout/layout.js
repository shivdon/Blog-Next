import MainNav from "./main-nav";

const Layout = (props) => {
  return (
    <>
      <MainNav />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
