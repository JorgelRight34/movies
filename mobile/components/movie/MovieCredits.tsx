import { Actor } from "@/models/actor";
import { Worker } from "@/models/worker";
import { Box } from "../ui/box";
import { FlatList } from "react-native";
import ProfileCard from "../ProfileCard";
import { ProductionCompany } from "@/models/productionCompany";
import TitleHeading from "../ui/TitleHeading";

interface MovieCreditsProps {
  credits: { cast: Actor[]; crew: Worker[]; companies: ProductionCompany[] };
}

/**
 * Displays a horizontal scrollable list of movie credits (cast, crew, and production companies)
 * as interactive profile cards. Each card shows an image, name, and subheading (role/department).
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {MovieCreditsData} props.credits - Contains `cast`, `crew`, and `companies` arrays.
 * @param {Actor[]} props.credits.cast - Array of actors with `name`, `character`, and `profile_path`.
 * @param {Worker[]} props.credits.crew - Array of crew members with `name`, `job`, and `profile_path`.
 * @param {ProductionCompany[]} props.credits.companies - Array of companies with `name` and `logo_path`.
 * @returns {React.ReactElement} Horizontal stack of profile cards with lazy-loaded images.
 */
const MovieCredits = ({ credits }: MovieCreditsProps) => {
  return (
    <Box className="p-3">
      {/* Cast */}
      <Box className="mb-3">
        <TitleHeading>Cast ({credits.cast.length})</TitleHeading>
        <FlatList
          data={credits.cast}
          renderItem={({ item }) => (
            <ProfileCard
              name={item.name}
              photo={item.profile_path}
              subheading={item.character}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
      {/* Crew */}
      <Box className="mb-3">
        <TitleHeading>Crew ({credits.crew.length})</TitleHeading>
        <FlatList
          data={credits.crew}
          renderItem={({ item }) => (
            <ProfileCard
              name={item.name}
              photo={item.profile_path}
              subheading={item.job}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
      {/* Production companies */}
      <Box className="mb-3">
        <TitleHeading>Compañías ({credits.companies.length})</TitleHeading>
        <FlatList
          data={credits.companies}
          renderItem={({ item }) => (
            <ProfileCard
              name={item.name}
              photo={item.logo_path}
              subheading={item.name}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
};

export default MovieCredits;
