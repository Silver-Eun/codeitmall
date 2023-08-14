import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ul>
        <li>
          <Link href="/products/1">첫 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/2">두 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/3">세 번째 상품</Link>
        </li>
        <li>
          <Link href="https://www.codeit.kr">코드잇</Link>
        </li>
      </ul>
    </>
  );
}
