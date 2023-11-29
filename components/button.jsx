"use client";

import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();
  return <button type="submit" onClick={router.push("/")}></button>;
};

export default Button;
