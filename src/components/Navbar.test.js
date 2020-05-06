import React from "react";
import * as rtl from "@testing-library/react";
import Navbar from "./Navbar";

// tests go here
test("renders Navbar without crashing", () => {
    rtl.render(<Navbar />);
});
