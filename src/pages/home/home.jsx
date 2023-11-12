import React from "react";
import PageContainer from "../../components/container/PageContainer";

function Home() {
  return (
    <PageContainer title="Pagina inicio" description="aaaaaaaaaaaaaaaaa" >
      <div
        style={{
          backgroundColor: "#757ce8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <h1>Home</h1>
      </div>
    </PageContainer>
  );
}

export default Home;