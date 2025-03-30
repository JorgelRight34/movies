import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import { Actor } from "../../../models/actor";
import { Worker } from "../../../models/worker";

interface ProfileDetails {
  profiles: Actor[] | Worker[];
  subheadingKey: string;
}

const ProfileDetails = ({ profiles, subheadingKey }: ProfileDetails) => {
  return (
    <ul className="list-unstyled">
      {profiles.map((profile, key) => (
        <li>
          <ProfileCard
            key={key}
            profile={profile}
            subheading={
              subheadingKey in profile
                ? profile[subheadingKey as keyof typeof profile].toString()
                : ""
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ProfileDetails;
