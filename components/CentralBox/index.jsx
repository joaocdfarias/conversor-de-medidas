import React from "react";
import { Box } from "./style";

export default function CentralBox() {
  return (
    <div>
      <Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="currentColor"
          className="bi bi-rulers"
          viewBox="0 0 16 16"
        >
          <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
        </svg>
        <h3>Conversor de Medidas</h3>
      </Box>
    </div>
  );
}
