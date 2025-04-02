import { LazyLoadImage } from "react-lazy-load-image-component";
import "./profile-card.css";

interface ProfileCardProps {
  name: string;
  photo?: string;
  subheading?: string;
}

/**
 * A profile component for displaying profile details.
 *
 * @component
 * @param {Person} props.Person - The person (actor or worker) associated with the card.
 * @param {string} [subheading] - Subheading that will be shown on the other column.
 * @returns {JSX.Element} The rendered profile component.
 */
const ProfileCard = ({ name, photo, subheading }: ProfileCardProps) => {
  return (
    <div className="border rounded">
      {/* Profile rounded pic */}
      <LazyLoadImage
        alt={name}
        className="profile-pic img-fluid w-100 rounded-top mb-3"
        src={
          photo
            ? `https://image.tmdb.org/t/p/${photo}`
            : "/icons/default-profile-pic.webp"
        }
        style={{
          display: "block",
          backgroundColor: "#cccccc", // Gray background placeholder
        }}
      />
      <div className="p-3">
        <h5 className="d-none d-lg-block text-truncate" title={name}>
          {name}
        </h5>
        {/* Right column */}
        <div className="row">
          <b className="d-block d-lg-none">{name}</b>
          <span className="text-truncate" title={subheading || "Participant"}>
            {subheading || "Participant"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
