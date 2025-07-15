type BlumioLogoProps = {
  className?: string;
};

const BlumioLogo = ({ className }: BlumioLogoProps) => (
  <img src="/images/logo.svg" alt="Blumio Logo" className={className} />
);

export default BlumioLogo;
