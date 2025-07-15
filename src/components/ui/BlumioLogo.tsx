import { FC } from "react";

interface BlumioLogoProps {
  className?: string;
}

const BlumioLogo: FC<BlumioLogoProps> = ({ className }) => (
  <img src="/images/logo.svg" alt="Blumio Logo" className={className} />
);

export default BlumioLogo;
