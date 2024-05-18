import Link from "next/link";

const Page = () => {
  return (
    <div className="card">
      <div className="card-header">React API UNAMA</div>
      <div className="card-body">
        Data di Aplikasi ini dari{" "}
        <a href="https://belajar-api.unama.ac.id" target="blank">
          https://belajar-api.unama.ac.id
        </a>{" "}
        <br />
        Menu yang tersedia:
        <Link href="/login">Login</Link>
        atau
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};

export default Page;
