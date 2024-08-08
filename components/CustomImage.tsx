import nextConfig from "@/next.config.mjs";
import Image, { ImageProps } from "next/image";

const BASE_PATH = nextConfig.basePath || "";

interface CustomImageProps extends Omit<ImageProps, "src"> {
  src: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, ...props }) => (
  <Image src={basePathJoin(src)} alt={alt} {...props} />
);

/**
 * URLにbasePathの値を結合して返却。
 * URLがhttp始まりの場合はそのまま返却。
 */
const basePathJoin = (src: string) => {
  if (src.startsWith("http")) return src;

  const isBasePathEndSlash = BASE_PATH.endsWith("/");
  const isSrcStartSlash = src.startsWith("/");

  if (isBasePathEndSlash && isSrcStartSlash) {
    return `${BASE_PATH}${src.slice(1)}`;
  }
  if (!isBasePathEndSlash && !isSrcStartSlash) {
    return `${BASE_PATH}/${src}`;
  }
  return `${BASE_PATH}${src}`;
};

export default CustomImage;
