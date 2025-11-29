import Image from "next/image";
import Link from "next/link";
import TypewriterEffect from "./components/TypewriterEffect";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <div className="mb-8 md:mb-12">
          <TypewriterEffect />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-300 mb-6">
          Welcome to HabitMeister
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-green-500 mb-12">
          Build Better Habits
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Your essential tool for tracking and building positive habits,
          simplifying your journey to a fulfilling life, one habit at a time.
        </p>
        <div className="flex justify-center mb-12">
          <Image
            src="/images/google-play-badge.png"
            alt="Get it on google play"
            width={300}
            height={100}
          />
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/images/home.png"
              alt="habit app home screen"
              width={300}
              height={600}
              className="mx-auto"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Create impactful habits one at a time
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              In a world full of distractions, maintaining positive habits is a
              challenge. That's why HabitMeister focuses on simplicity and
              effectiveness. Start with one habit, master it, then add more.
              Building a better life doesn't have to be complicated.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Powerful Features to Track Your Progress
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">
                  Intuitive Habit Tracking
                </h4>
                <p className="text-gray-300">
                  Log habits quickly and effortlessly, making consistency your
                  new norm with a simple, distraction-free interface.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">
                  Smart Reminders
                </h4>
                <p className="text-gray-300">
                  Never miss a beat with personalized reminders that keep you on
                  track, even on your busiest days.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">
                  Insightful Analytics
                </h4>
                <p className="text-gray-300">
                  Understand your patterns with detailed analytics that shed
                  light on your progress and areas for improvement.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/stats.png"
              alt="habit app stats screen"
              width={300}
              height={600}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Feature Section 3 */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/images/add.png"
              alt="add new habit screen"
              width={300}
              height={600}
              className="mx-auto"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Get Started in Seconds
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Adding a new habit is incredibly simple. Just give it a name, set
              a reminder time, and start tracking. No complicated setup, no
              unnecessary features—just you and your habits.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Download now and start your journey to a more disciplined,
              fulfilling life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-8">
          Ready to Build Better Habits?
        </h3>
        <div className="flex justify-center">
          <Image
            src="/images/google-play-badge.png"
            alt="Get it on google play"
            width={300}
            height={100}
          />
        </div>
      </section>
    </main>
  );
}
