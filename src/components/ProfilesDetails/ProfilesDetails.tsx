import { Actor } from "../../models/actor";
import { Worker } from "../../models/worker";
import CustomSlider from "../common/CustomSlider";
import ProfileCard from "../ProfileCard/ProfileCard";

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
    <CustomSlider>
      {profiles.map((profile) => (
        <div key={profile.credit_id} className="col-lg-4">
          <ProfileCard
            name={profile.name}
            photo={
              profile.profile_path ? `original/${profile.profile_path}` : ""
            }
            subheading={
              subheadingKey in profile
                ? profile[subheadingKey as keyof typeof profile].toString()
                : ""
            }
          />
        </div>
      ))}
    </CustomSlider>
  );
};

export default ProfilesDetails;
