import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Confetti from "./pages/Confetti";
import App from "./App";
import BentoGrid from "./pages/BentoGrid";
import KanbanBoard from "./pages/KanbanBoard";
import ParallaxZoom from "./pages/ParallaxZoom";

const RouterInterface = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="confetti" element={<Confetti />} />
          <Route path="bento-grid" element={<BentoGrid />} />
          <Route path="grid" element={<BentoGrid />} />
          <Route path="kanban" element={<KanbanBoard />} />
          <Route path="parallax" element={<ParallaxZoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterInterface;
