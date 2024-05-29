import Image from 'next/image';

export default function Header() {
  return (
    <Image
      src="/logo.png"
      alt="Roast Logo"
      width={125}
      height={30}
      className="absolute left-1/2 top-[80px] z-50 mx-auto -translate-x-1/2"
    />
  );
}
