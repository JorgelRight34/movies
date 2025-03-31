import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import { Actor } from "../../../models/actor";
import { Worker } from "../../../models/worker";

interface ProfilesDetails {
  profiles: Actor[] | Worker[];
  subheadingKey: string;
}

/**
 * A details component for displaying a list of persons (profiles).
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Person[]} props.profiles - The profiles to use as list.
 * @param {Actor[] | Worker[]} props.subheadingKey - The key to access a value inside each individual profile that will serve as subheading
 * @returns {JSX.Element} The rendered profiles details component.
 */
const ProfilesDetails = ({ profiles, subheadingKey }: ProfilesDetails) => {
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

export default ProfilesDetails;
