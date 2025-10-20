import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto">
      <h1
        className={`mt-60 text-center text-lg sm:text-2xl font-bold text-slate-300 animate-slidein3`}
      >
        Welcome to HabitMeister.
      </h1>
      <div className="container mx-auto w-1/2">
        <h2 className="mt-2 text-center text-5xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-green-500 animate-slidein2">
          Build Better Habits
        </h2>
      </div>

      <div className="container mx-auto flex justify-center mt-20 animate-slidein cursor-pointer">
        <Image
          src="/images/google-play-badge.png"
          alt="Get it on google play"
          width={300}
          height={100}
        />
      </div>
      <h2 className="text-2xl font-normal mb-8 mt-20 text-center">
        Create impactful habits one at a time
      </h2>

      <div className="container mx-auto flex justify-center">
        <Image
          src="/images/home.png"
          alt="habit app screen"
          width={300}
          height={100}
        />
      </div>

      <div
        className={`flex flex-row container mx-auto mt-20 transition-opacity ease-in
        duration-1000 md:opacity-100`}
      >
        <div className="basis-1/2 flex flex-col justify-center px-20">
          <h2 className="text-xl font-bold">
            In a world full of distractions, maintaining positive habits is a
            challenge.
          </h2>
          <p className="text-lg">
            <br />
            Enter <strong>HabitMeister</strong>: your essential tool for
            tracking and building positive habits, simplifying your journey to a
            fulfilling life, one habit at a time.
          </p>
        </div>
        <div className="basis-1/2">
          <Image
            src="/images/stats.png"
            alt="habit app screen example"
            width={300}
            height={100}
          />
        </div>
      </div>

      <div className="flex flex-row container mx-auto mt-20">
        <div className="basis-1/2 flex justify-end">
          <Image
            src="/images/settings.png"
            alt="habit app screen example"
            width={300}
            height={100}
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-center p-20 ">
          <p className="text-lg">
            <strong>Intuitive Habit Tracking:</strong> Log habits quickly and
            effortlessly, making consistency your new norm.
            <br />
            <strong>Smart Reminders:</strong> Never miss a beat with
            personalized reminders that keep you on track, even on your busiest
            days.
            <br />
            <strong>Insightful Analytics:</strong> Understand your patterns with
            detailed analytics that shed light on your progress and areas for
            improvement.
            <br />
          </p>
        </div>
      </div>

      <div className="flex flex-row container mx-auto mt-20">
        <div className="basis-1/2 flex flex-col justify-center">
          <p className="text-lg p-20">
            Download now and start your journey to a more disciplined,
            fulfilling life.
          </p>
        </div>
        <div className="basis-1/2">
          <Image
            src="/images/add.png"
            alt="add new habit - screen example"
            width={300}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}
