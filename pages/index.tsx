import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import Diagram from "../public/diagram.png";
import styles from "@/pages/index.module.scss";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diagram Creator</title>
      </Head>
      <main>
        <NextLink href="/diagram">
          <a>
            <Button variant="outline">
              <Image src={Diagram} width={100} height={100} />
            </Button>
            <span data-testid="text">Create a New Diagram</span>
          </a>
        </NextLink>
      </main>
      <Footer />
    </div>
  );
}
