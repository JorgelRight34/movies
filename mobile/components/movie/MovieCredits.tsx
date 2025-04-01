import { Actor } from "@/models/actor";
import { Worker } from "@/models/worker";
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import styles from "@/styles/styles";
import { FlatList } from "react-native";
import ProfileCard from "../ProfileCard";
import { ProductionCompany } from "@/models/productionCompany";
import TitleHeading from "../TitleHeading";

interface MovieCreditsProps {
  credits: { cast: Actor[]; crew: Worker[]; companies: ProductionCompany[] };
}

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
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
      {/* Production companies */}
      <Box className="mb-3">
        <TitleHeading>
          Production Companies ({credits.companies.length})
        </TitleHeading>
        <FlatList
          data={credits.companies}
          renderItem={({ item }) => (
            <ProfileCard
              name={item.name}
              photo={item.logo_path}
              subheading={item.name}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
};

export default MovieCredits;
