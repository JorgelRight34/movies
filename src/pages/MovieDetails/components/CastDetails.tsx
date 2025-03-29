import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import { Actor } from "../../../models/actor";

interface CastDetails {
  cast: Actor[];
}

const CastDetails = ({ cast }: CastDetails) => {
  return (
    <div>
      {cast.map((profile) => (
        <ProfileCard profile={profile} subheading={profile.character} />
      ))}
    </div>
  );
};

export default CastDetails;
