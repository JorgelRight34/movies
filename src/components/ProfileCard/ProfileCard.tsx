import { Person } from "../../models/person";
import "./profile-card.css";

interface ProfileCardProps {
  profile: Person;
  subheading?: string;
}

const ProfileCard = ({ profile, subheading }: ProfileCardProps) => {
  return (
    <div className="row mx-0 p-3 border-bottom">
      <div className="col-lg-6 d-flex align-items-center">
        <img
          loading="lazy"
          className="profile-pic rounded-circle me-3"
          src={
            profile.profile_path
              ? `https://image.tmdb.org/t/p/w92/${profile.profile_path}`
              : "/default-profile-pic.webp"
          }
        />
        <b>{profile.name}</b>
      </div>
      <div className="col-lg-6">
        <span>{subheading}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
