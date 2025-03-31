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
    <div className="row mx-0 p-3 border-bottom">
      {/* Left column */}
      <div className="col-6 d-flex align-items-center">
        {/* Profile rounded pic */}
        <img
          alt={profile.name}
          loading="lazy"
          className="profile-pic rounded-circle me-3"
          src={
            profile.profile_path
              ? `https://image.tmdb.org/t/p/w92/${profile.profile_path}`
              : "/icons/default-profile-pic.webp"
          }
        />
        <b className="d-none d-lg-block">{profile.name}</b>
      </div>
      {/* Right column */}
      <div className="col-6">
        <b className="d-block d-lg-none">{profile.name}</b>
        <span>{subheading}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
