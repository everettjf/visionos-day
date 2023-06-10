import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>visionos.day</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="visionos.day"
        />
        <p class="my-6">
          YDNB
        </p>
<!--         <Counter start={3} /> -->
      </div>
    </>
  );
}
