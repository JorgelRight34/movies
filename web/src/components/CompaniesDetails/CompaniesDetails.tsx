import CustomSlider from "../common/CustomSlider";
import ProfileCard from "../ProfileCard/ProfileCard";
import { ProductionCompany } from "../../models/productionCompany";

interface CompaniesDetailsProps {
  companies: ProductionCompany[];
}

/**
 * A details component for displaying a list of companies.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Person[]} props.companies - The companies to use as list.
 * @returns {JSX.Element} The rendered companies details component.
 */
const CompaniesDetails = ({ companies }: CompaniesDetailsProps) => {
  return (
    <CustomSlider slidesToShow={3}>
      {companies.map((company) => (
        <ProfileCard
          key={company.id}
          name={company.name}
          photo={company.logo_path ? `w185/${company.logo_path}` : ""}
          subheading={company.origin_country}
        />
      ))}
    </CustomSlider>
  );
};

export default CompaniesDetails;
