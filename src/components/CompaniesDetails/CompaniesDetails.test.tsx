import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import CompaniesDetails from "./CompaniesDetails";
import { ProductionCompany } from "../../models/productionCompany";

const mockCompany: ProductionCompany = {
  id: 138743,
  logo_path: "/abFJGmtPFs6Bq5cBavmrnXDcpf8.png",
  name: "Anton",
  origin_country: "GB",
};

describe("CompaniesDetails", () => {
  it("it renders", () => {
    const result = render(<CompaniesDetails companies={[mockCompany]} />);
    expect(result).toBeInTheDocument();
  });

  it("it renders company label", () => {
    // Render component
    render(<CompaniesDetails companies={[mockCompany]} />);

    // Look for element
    const regex = new RegExp(mockCompany.name, "i");
    const element = screen.getAllByText(regex);

    // Expect
    expect(element).toBeInTheDocument();
  });
});
