import { LazyLoadImage } from "react-lazy-load-image-component";
import { Person } from "../../models/person";
import "./profile-card.css";

interface ProfileCardProps {
  profile: Person;
  subheading?: string;
}

/**
 * A prpfile component for displaying profile details.
 *
 * @component
 * @param {Person} props.Person - The person (actor or worker) associated with the card.
 * @param {string} [subheading] - Subheading that will be shown on the other column.
 * @returns {JSX.Element} The rendered profile component.
 */
const ProfileCard = ({ profile, subheading }: ProfileCardProps) => {
  return (
    <div className="border rounded">
      {/* Profile rounded pic */}
      <LazyLoadImage
        alt={profile.name}
        className="profile-pic img-fluid w-100 rounded-top mb-3"
        src={
          profile.profile_path
            ? `https://image.tmdb.org/t/p/original/${profile.profile_path}`
            : "/icons/default-profile-pic.webp"
        }
        style={{
          display: "block",
          backgroundColor: "#cccccc", // Gray background placeholder
        }}
      />
      <div className="p-3">
        <h5 className="d-none d-lg-block text-truncate" title={profile.name}>
          {profile.name}
        </h5>
        {/* Right column */}
        <div className="row">
          <b className="d-block d-lg-none">{profile.name}</b>
          <span className="text-truncate" title={subheading || "Participant"}>
            {subheading || "Participant"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
