import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import { Worker } from "../../../models/worker";

interface CastDetails {
  crew: Worker[];
}

const CrewDetails = ({ crew }: CastDetails) => {
  return (
    <div>
      {crew.map((worker) => (
        <ProfileCard profile={worker} subheading={worker.job} />
      ))}
    </div>
  );
};

export default CrewDetails;
