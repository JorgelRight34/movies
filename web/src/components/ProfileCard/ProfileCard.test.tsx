import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import ProfileCard from "./ProfileCard";
import { Person } from "../../models/person";

export const mockProfile: Person = {
  adult: true,
  gender: "Male",
  id: 12345,
  name: "John Doe",
  original_name: "Johnathan Doe",
  popularity: 85.4,
  profile_path: "/path/to/profile.jpg", // Mocked profile image path
  credit_id: "abc123xyz",
};

describe("ProfileCard", () => {
  it("image should have as alt the name of the person", async () => {
    render(
      <ProfileCard
        name={mockProfile.name}
        photo={mockProfile.profile_path}
        subheading="Spiderman"
      />
    );
    const regex = new RegExp(mockProfile.name, "i");
    await expect(screen.getByAltText(regex)).toBeInTheDocument();
  });

  it("profile subheading should be visible", async () => {
    render(
      <ProfileCard
        name={mockProfile.name}
        photo={mockProfile.profile_path}
        subheading="Spiderman"
      />
    );
    const regex = new RegExp("Spiderman", "i");
    await expect(screen.getByText(regex)).toBeInTheDocument();
  });
});
