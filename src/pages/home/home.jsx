import React from "react";
import PageContainer from "../../components/container/PageContainer";
import { Box } from "@mui/material";
import Carousel from "./componentes/carrusel";


function Home() {

  return (
<PageContainer>
<Box height="100%">
        <Carousel />
      </Box>
    </PageContainer>
    

  );
}

export default Home;