import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { trackEvent } from "../../../utils/analytics";

function Video21Article() {
  const navigate = useNavigate();

  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

  const [email, setEmail] = useState("");
  const [signupStatus, setSignupStatus] = useState("");

  async function handleSignupSubmit(e) {
    e.preventDefault();
    setSignupStatus("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "article_21",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      trackEvent("email_signup", {
        page: window.location.pathname,
        metadata: {
          location: "article_21",
          form: "article_newsletter",
        },
      });

      setSignupStatus("Thank you for signing up!");
      setEmail("");
    } catch (err) {
      setSignupStatus("Something went wrong. Try again.");
      console.error(err);
    }
  }

  return (
    <main className="article-page">
      <article className="article-container">
        <button
          className="article-back-button"
          onClick={() => navigate("/articles")}
        >
          ← Back to Articles
        </button>

        <header className="article-header">
          <p className="article-category">Addiction</p>
          <p className="article-date">September 9, 2026</p>

          <h1>The 7 Levels of YouTube Addiction</h1>

          <p className="article-subtitle">
            YouTube can begin as a useful tool for you till it quietly becomes the default
            way you spend your free time. Here is how you can take back control and
            rebuild your relationship with the platform.
          </p>

          <a
            className="article-video-link"
            href="https://www.youtube.com/watch?v=4s3YOThlIDI"
            target="_blank"
            rel="noreferrer"
          >
            <span className="yt-icon">▶</span>
            Watch on YouTube
            <span className="article-link-arrow">↗</span>
          </a>
        </header>

        <section className="article-section">
          <h2>Introduction</h2>

          <p>
            YouTube is one of those social media addictions... that's easy to justify.
          </p>

          <p>
            You can watch a documentary, learn a new skill, find a tutorial,
            listen to someone explain how to improve your life, or so many other ways to consume content on this platform. Compared to
            mindlessly scrolling through short-form content, it can feel like
            you are doing something productive.
          </p>

          <p>
            And sometimes you actually are.
          </p>

          <p>
            The problem begins when something you once chose to use becomes
            something you automatically reach for without consciously thinking about it.
          </p>

          <p>
            You start watching while you eat. Then while you work. Then while
            you walk. Till eventually, every empty moment starts feeling like an
            opportunity to put something on.
          </p>

          <p>
            That is why getting back to Level 0 is not as simple as just deleting
            YouTube.
          </p>

          <blockquote>
            The goal is not to stop watching Youtube all together. The goal is to make
            YouTube a tool again instead of your default.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>How YouTube Became Your Default</h2>

          <p>
            At Level 1, you open YouTube because you need something.
          </p>

          <p>
            You have a question, find the answer, and leave. That's it.
          </p>

          <p>
            But eventually, YouTube starts filling the empty parts of your day.
          </p>

          <p>
            You're standing around doing nothing, so you open YouTube. You are eating, so you open
            YouTube. You have twenty minutes before leaving the house, so you
            open YouTube.
          </p>

          <p>
            Meanwhile, every video you click, skip, finish, and return to gives
            the algorithm more and more information about what can keep you watching.
          </p>

          <p>
            Eventually, opening YouTube requires almost no decision at all.
          </p>

          <blockquote>
            Something you originally used with intention can slowly become
            something you use without even thinking.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-7-levels-of-youtube-addiction/youtube1.png"
              alt="Bands going from intentionally using YouTube to automatically opening it"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 1: Find Out What YouTube Is Actually Costing You</h2>

          <p>
            Looking at your screen time is a good place to start, but the number alone does not
            tell the whole story.
          </p>

          <p>
            Five hours on YouTube sounds bad. But the bigger question is what
            those five hours replaced.
          </p>

          <p>
            Did you push back a workout?
          </p>

          <p>
            Did you stay up later than you planned?
          </p>

          <p>
            Did you avoid working on something that matters to you?
          </p>

          <p>
            Did you spend another night learning about something you have been
            telling yourself you are going to start?
          </p>

          <p>
            Look at all the places YouTube has started taking time from:
          </p>

          <p>- Sleep</p>
          <p>- Work</p>
          <p>- Training</p>
          <p>- Relationships</p>
          <p>- Hobbies</p>
          <p>- Quiet time</p>
          <p>- The goals you keep saying you care about</p>

          <p>
            The problem is not simply that YouTube steals time.
          </p>

          <p>
            It is what that time could have been used for.
          </p>

          <blockquote>
            Do not only measure how much YouTube you watch. Measure what you are
            no longer doing because of it.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-7-levels-of-youtube-addiction/youtube2.png"
              alt="Bands looking at everything his YouTube screen time is taking time away from"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 2: Destroy the Algorithm's Advantage</h2>

          <p>
            Trying to beat an endless recommendation system with willpower is
            making the problem more difficult than it needs to be.
          </p>

          <p>
            Change what YouTube is allowed to show you instead.
          </p>

          <p>- Remove YouTube Shorts.</p>
          <p>- Turn off autoplay.</p>
          <p>- Remove or hide recommendations.</p>
          <p>- Set a daily limit.</p>
          <p>- Remove YouTube from your phone if necessary.</p>
          <p>- Use browser extensions that simplify the homepage.</p>

          <p>
            You want to create friction between the impulse of watch something
            and actually watching it.
          </p>

          <p>
            If opening YouTube immediately presents dozens of videos designed
            around your interests, you are forcing yourself to make another
            decision every time you see one.
          </p>

          <p>
            A blank homepage changes the relationship though.
          </p>

          <p>
            Now you need to know exactly what you went on the platform for.
          </p>

          <blockquote>
            Stop trying to become better at resisting the algorithm. Give the
            algorithm less power to begin with.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Step 3: Give Every YouTube Session a Purpose</h2>

          <p>
            Think about how you used YouTube before the algorithm became a professional at
            knowing you.
          </p>

          <p>
            You probably opened it because you were looking for something specific.
          </p>

          <p>
            That is the exact relationship you are trying to rebuild.
          </p>

          <p>
            Before opening YouTube, ask yourself one simple question:
          </p>

          <blockquote>
            What am I opening YouTube to do?
          </blockquote>

          <p>
            Maybe you want to watch content from a specific creator.
          </p>

          <p>
            Maybe you have questions so you need a tutorial.
          </p>

          <p>
            Maybe there is a video you intentionally saved to watch for later.
          </p>

          <p>
            And sometimes you genuinely just want to watch something for
            entertainment.
          </p>

          <p>
            There is nothing inherently wrong with that.
          </p>

          <p>
            The important part is that you made the decision before the
            algorithm made it for you.
          </p>

          <div className="article-image">
            <img
              src="/images/articles/the-7-levels-of-youtube-addiction/youtube3.png"
              alt="Bands intentionally searching for a specific YouTube video instead of scrolling"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 4: Learn How to Be Bored Again</h2>

          <p>
            One of the clearest signs that YouTube has gone way too far is when
            normal activities start feeling incomplete without it.
          </p>

          <p>
            Eating without a video just feels boring.
          </p>

          <p>
            Walking without something playing feels exhausting.
          </p>

          <p>
            Working in silence feels deathenign.
          </p>

          <p>
            Falling asleep without background noise feels impossible.
          </p>

          <p>
            So start intentionally creating moments where nothing is playing.
          </p>

          <p>
            Eat one meal without your phone.
          </p>

          <p>
            Go on a walk without a video.
          </p>

          <p>
            Work for thirty minutes without something playing in the
            background.
          </p>

          <p>
            Give your brain opportunities to experience lower levels of
            stimulation again.
          </p>

          <p>
            It might feel uncomfortable at first.
          </p>

          <p>
            Yet that discomfort is exactly why you need to practice it.
          </p>

          <blockquote>
            Silence is not the problem. Needing to escape silence every time it
            appears is.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Step 5: Stop Confusing Consumption With Progress</h2>

          <p>
            This is where self-improvement content can become dangerous.
          </p>

          <p>
            You want to get in shape, so you watch fitness videos.
          </p>

          <p>
            You want to make more money, so you watch business videos.
          </p>

          <p>
            You want to become disciplined, so obviously you watch videos about
            discipline.
          </p>

          <p>
            You can spend hours learning about the person you want to become
            without doing anything that allows you to become that person.
          </p>

          <p>
            Knowledge is useful when it changes your actions.
          </p>

          <p>
            Otherwise, consuming more information can become another form of
            procrastination.
          </p>

          <p>
            Start forcing your consumption to produce something.
          </p>

          <p>
            If you watch a fitness video, actually use something from it in your
            training.
          </p>

          <p>
            If you watch a business video, implement one simple idea.
          </p>

          <p>
            If you watch a tutorial, build the thing.
          </p>

          <p>
            If you watch a productivity video, close YouTube and put in the work.
          </p>

          <blockquote>
            Watching yourself improve is not the same thing as actually
            improving.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-7-levels-of-youtube-addiction/youtube4.png"
              alt="Bands choosing action instead of endlessly consuming self improvement videos"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 6: Replace the Time You Just Created</h2>

          <p>
            This might be the most important part of the entire process.
          </p>

          <p>
            If you normally spend four hours a day on YouTube and suddenly cut
            that down to one, you have created three hours of empty space.
          </p>

          <p>
            If you do nothing with those hours, YouTube is going to look very
            appealing once again.
          </p>

          <p>
            You need something that can also compete for that time.
          </p>

          <p>- Start working out.</p>
          <p>- Build something.</p>
          <p>- Read.</p>
          <p>- Spend time with your friends.</p>
          <p>- Learn a skill by actually practicing it.</p>
          <p>- Work toward something you have been putting off.</p>

          <p>
            You are not trying to fill every second of your life with
            productivity either.
          </p>

          <p>
            You are building enough outside of YouTube that closing the app no
            longer leaves a giant hole in your day.
          </p>

          <blockquote>
            Removing the distraction creates time. What you build with that time
            determines whether the change lasts.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Step 7: Make YouTube Earn Its Place Back</h2>

          <p>
            The final goal is not necessarily quitting YouTube forever.
          </p>

          <p>
            YouTube can still be an incredible tool.
          </p>

          <p>
            The difference is that it should have a specific place in your life
            instead of filling every place where nothing else is happening.
          </p>

          <p>
            Over time, you want the relationship to start looking like Level 1 once
            again.
          </p>

          <p>
            You need something, so you open YouTube.
          </p>

          <p>
            You watch it.
          </p>

          <p>
            You get what you came for.
          </p>

          <p>
            Then you leave. Simple.
          </p>

          <p>
            Entertainment can still exist too. But now it is something you
            choose rather than something that automatically happens.
          </p>

          <blockquote>
            You do not need to remove YouTube from your life. You need to stop
            letting YouTube decide how much of your life it gets.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-7-levels-of-youtube-addiction/youtube5.png"
              alt="Bands returning YouTube to its original role as a useful tool"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>The Level 0 Test</h2>

          <p>
            So how do you know when you are finally moving back towards Level 0?
          </p>

          <p>
            It is not about reaching some perfect screen-time number.
          </p>

          <p>
            Look at your relationship with the platform instead.
          </p>

          <p>
            Can you eat without needing something playing?
          </p>

          <p>
            Can you work without constantly looking for stimulation?
          </p>

          <p>
            Can you open YouTube for one thing without disappearing into the
            homepage?
          </p>

          <p>
            Can you watch something useful and then actually apply it?
          </p>

          <p>
            Can you close YouTube and already have things in your life that you
            would rather be doing?
          </p>

          <p>
            Those are much better signs of control than only obsessing over one
            screen-time number.
          </p>

          <blockquote>
            Level 0 is when YouTube supports the life you are building instead
            of becoming the life you are living.
          </blockquote>
        </section>

        <section className="article-section article-next">
          <h2>Take the Next Step</h2>

          <p>
            Cutting down YouTube creates something extremely valuable: time.
          </p>

          <p>
            But that time does need somewhere to go. The Routine helps you turn the
            empty parts of your day into an actual schedule built around your
            priorities, responsibilities, training, recovery, and free time.
          </p>

          <div
            className="article-next-card"
            onClick={() => {
              trackEvent("article_system_clicked", {
                page: window.location.pathname,
                metadata: {
                  article: "video_21",
                  system: "the_routine",
                },
              });

              navigate("/systems/routine");
            }}
          >
            <span>Free System</span>

            <h3>The Routine</h3>

            <p>
              Build a realistic daily schedule around the things you actually
              want to spend your time doing.
            </p>

            <span className="next-arrow">Build Your Routine →</span>
          </div>
        </section>

        <section className="article-section">
          <h2>Final Thoughts: Make YouTube a Tool Again</h2>

          <p>
            YouTube is not evil.
          </p>

          <p>
            You do not need to delete it forever, avoid every entertaining
            video, or turn every second of your life into only work.
          </p>

          <p>
            You just need to recognize when something that was supposed to help
            your life has quietly started replacing it.
          </p>

          <p>
            Remove the parts of YouTube that are designed to pull you deeper. Create
            moments with no stimulation. Turn the information you
            consume into action. Then finally fill the time you recover with things that
            actually matter to you.
          </p>

          <p>
            Eventually, YouTube can become what it was supposed to be from the
            beginning.
          </p>

          <p>A tool.</p>

          <blockquote>
            Build a life where closing YouTube doesn't leave you wondering what
            else life has to offer.
          </blockquote>
        </section>

        <section className="article-newsletter">
          <h2>Get Future Systems & Weekly Updates</h2>

          <p>
            Be the first to know when new systems, videos, and updates drop.
          </p>

          <form className="newsletter-form" onSubmit={handleSignupSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Join</button>
          </form>

          {signupStatus && <p>{signupStatus}</p>}
        </section>

        <div
          className="article-next-card"
          onClick={() => navigate("/articles/how-to-reverse-alcoholism")}
        >
          <span>Next Article</span>

          <h3>How to Reverse Alcoholism</h3>

          <p>
            Learn how to reverse alcohol dependence, rebuild what drinking took
            from your life, and work your way back to Level 0.
          </p>

          <span className="next-arrow">Read Article →</span>
        </div>
      </article>
    </main>
  );
}

export default Video21Article;