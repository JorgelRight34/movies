import { Card } from "./ui/card";
import { Image } from "./ui/image";
import { Box } from "./ui/box";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import theme from "@/styles/theme";

interface ProfileCardProps {
  name: string;
  photo?: string;
  subheading?: string;
}

const ProfileCard = ({ name, photo, subheading }: ProfileCardProps) => {
  return (
    <Card
      className="rounded-lg p-0 max-w-[360px] m-3"
      style={{ backgroundColor: theme.colors.card }}
    >
      <Image
        source={{
          uri: photo
            ? `https://image.tmdb.org/t/p/w500/${photo}` // Use sized variant (w500)
            : require("../assets/images/default-profile-pic.webp"),
        }}
        defaultSource={require("../assets/images/default-profile-pic.webp")}
        onError={(e) => console.log("Image load error:", e.nativeEvent.error)}
        className="rounded-t-lg w-full h-[240px] object-cover bg-gray-300"
        resizeMode="cover"
        alt={name}
      />
      <Box className="p-3">
        <Heading size="md" className="text-white mb-4">
          {name}
        </Heading>
        <Text className="text-sm font-normal text-white">{subheading}</Text>
      </Box>
    </Card>
  );
};

export default ProfileCard;
