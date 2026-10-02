import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { trackEvent } from "../../../utils/analytics";

function Video1KArticle() {
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
          source: "article_1k",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      trackEvent("email_signup", {
        page: window.location.pathname,
        metadata: {
          location: "article_1k",
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
          <p className="article-category">Self-Improvement</p>
          <p className="article-date">October 2, 2026</p>

          <h1>How to Become More Attractive</h1>

          <p className="article-subtitle">
            Attractiveness is not just a number decided by your genetics.
            Appearance matters, but the person you build underneath it matters
            even more. Here is how to improve the parts of attraction you can
            actually control.
          </p>

          {/* Add the 1K Special YouTube URL once the video is live. */}
          <a
            className="article-video-link"
            href="#"
            onClick={(e) => e.preventDefault()}
            aria-disabled="true"
          >
            <span className="yt-icon">▶</span>
            Watch on YouTube
            <span className="article-link-arrow">↗</span>
          </a>
        </header>

        <section className="article-section">
          <h2>Introduction: Attraction Is Bigger Than Your Appearance</h2>

          <p>
            When most people think about becoming more attractive, they
            immediately think about their face, body, hair, clothes, or genetics.
          </p>

          <p>
            Those things matter.
          </p>

          <p>
            Pretending appearance has nothing to do with attraction would be
            ridiculous.
          </p>

          <p>
            But appearance is only one part of what makes somebody attractive.
          </p>

          <p>
            The way you carry yourself matters. Your health matters. Your
            confidence matters. Your social skills matter. Your discipline
            matters. The direction of your life matters.
          </p>

          <p>
            That is why chasing a number can become such a trap.
          </p>

          <p>
            You can improve your appearance and still feel insecure. You can get
            more attention and still feel empty. You can become the person you
            once wanted to look like and immediately find another flaw to fix.
          </p>

          <p>
            Eventually, becoming more attractive has to become less about
            convincing everybody else that you are valuable and more about
            building somebody you genuinely respect.
          </p>

          <blockquote>
            Attraction may get noticed on the outside, but a large part of it is
            built by what you repeatedly do when nobody is watching.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Why Chasing Attractiveness Can Become a Trap</h2>

          <p>
            The 10 Levels of Attractiveness begins with somebody who has
            essentially stopped participating in life.
          </p>

          <p>
            Maybe they were rejected. Maybe they were bullied. Maybe they spent
            years comparing themselves to people who seemed to have everything
            they wanted.
          </p>

          <p>
            Eventually, it becomes easier to believe that the entire world is
            against you than to keep putting yourself in situations where you
            might fail.
          </p>

          <p>
            Then self-improvement finally starts working.
          </p>

          <p>
            You get in better shape. You dress better. You take care of
            yourself. People begin treating you differently.
          </p>

          <p>
            And that can create a completely different problem.
          </p>

          <p>
            You become obsessed with improving every tiny detail because you
            believe the next improvement will finally make you feel good enough.
          </p>

          <p>
            But there is always another detail.
          </p>

          <p>
            That is the turning point: realizing that becoming attractive cannot
            only be about getting attention.
          </p>

          <blockquote>
            If every improvement exists to earn somebody else's approval, there
            will always be another person you need to impress.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-10-levels-of-attractiveness/attractiveness1.png"
              alt="Bands progressing from insecurity into an obsession with improving his appearance"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 1: Start Participating in Your Own Life Again</h2>

          <p>
            Before worrying about becoming extremely attractive, you need to
            actually participate in life.
          </p>

          <p>
            Go outside.
          </p>

          <p>
            See your friends.
          </p>

          <p>
            Train.
          </p>

          <p>
            Apply for things.
          </p>

          <p>
            Talk to people.
          </p>

          <p>
            Put yourself into situations where rejection and discomfort are
            possible.
          </p>

          <p>
            This sounds almost too simple, but isolation makes improvement
            incredibly difficult because you have no evidence that your negative
            beliefs about yourself are wrong.
          </p>

          <p>
            Every difficult situation you willingly enter gives you new
            evidence.
          </p>

          <p>
            Maybe you can hold a conversation.
          </p>

          <p>
            Maybe you can survive rejection.
          </p>

          <p>
            Maybe people do enjoy being around you.
          </p>

          <p>
            Maybe you are not as hopeless as you convinced yourself you were.
          </p>

          <blockquote>
            You cannot build an attractive life while hiding from the life you
            are trying to improve.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Step 2: Focus on What You Can Actually Control</h2>

          <p>
            You did not choose every part of your genetics.
          </p>

          <p>
            You did not choose your starting point either.
          </p>

          <p>
            But your starting point does not decide everything that happens
            afterward.
          </p>

          <p>
            There are plenty of things you can improve:
          </p>

          <p>- Your physique.</p>

          <p>- Your hygiene.</p>

          <p>- Your hairstyle.</p>

          <p>- Your clothes.</p>

          <p>- Your posture.</p>

          <p>- Your communication skills.</p>

          <p>- Your health.</p>

          <p>- Your confidence.</p>

          <p>- The way you treat people.</p>

          <p>
            None of these require pretending that everyone has the exact same
            advantages.
          </p>

          <p>
            They simply move your attention away from complaining about the
            things you cannot change and toward improving the things you can.
          </p>

          <blockquote>
            Your genetics may influence the foundation. Your habits determine
            what you actually build on top of it.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-10-levels-of-attractiveness/attractiveness2.png"
              alt="Bands improving controllable areas like fitness, hygiene, clothing, and social skills"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 3: Build the Habits That Make You Look Better</h2>

          <p>
            A glow up is rarely one massive transformation.
          </p>

          <p>
            Most of it is boring.
          </p>

          <p>
            You train consistently.
          </p>

          <p>
            You sleep.
          </p>

          <p>
            You eat well enough to support your goals.
          </p>

          <p>
            You take care of your skin, teeth, hair, and basic hygiene.
          </p>

          <p>
            You find clothes that actually fit you.
          </p>

          <p>
            You stop treating taking care of yourself like something you only do
            when somebody else might notice.
          </p>

          <p>
            Over enough time, these habits become visible.
          </p>

          <p>
            Your physique changes. Your appearance becomes more intentional. You
            carry yourself differently because you know how much work went into
            becoming that person.
          </p>

          <p>
            That is where appearance and identity begin working together.
          </p>

          <blockquote>
            Looking better becomes much easier to maintain when taking care of
            yourself becomes part of who you are.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Step 4: Stop Turning Self-Improvement Into an Obsession</h2>

          <p>
            Improvement feels good.
          </p>

          <p>
            That can make it surprisingly easy to take too far.
          </p>

          <p>
            You fix one insecurity and immediately find another.
          </p>

          <p>
            You start comparing facial features, measurements, physiques,
            clothes, status, and every tiny detail that could theoretically make
            you more attractive.
          </p>

          <p>
            Suddenly, the person who started improving because they hated
            themselves is still constantly thinking about everything they hate
            about themselves.
          </p>

          <p>
            The packaging changed. The insecurity did not.
          </p>

          <p>
            At some point, you need to ask what the entire journey is for.
          </p>

          <p>
            Are you becoming healthier?
          </p>

          <p>
            Are you becoming more confident?
          </p>

          <p>
            Are you building a life you actually enjoy?
          </p>

          <p>
            Or are you endlessly modifying yourself because you are terrified
            somebody might not approve of you?
          </p>

          <blockquote>
            Self-improvement should help you build yourself, not give you
            unlimited new reasons to hate yourself.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-10-levels-of-attractiveness/attractiveness3.png"
              alt="Bands stepping away from obsessive self improvement and recognizing how far he has already come"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 5: Build Discipline Before Trying to Look Confident</h2>

          <p>
            Confidence is difficult to fake when there is nothing underneath it.
          </p>

          <p>
            You can memorize confident body language. You can try to speak
            louder. You can tell yourself that you are amazing.
          </p>

          <p>
            But when pressure arrives, fake confidence is easy to expose.
          </p>

          <p>
            Discipline gives confidence evidence.
          </p>

          <p>
            Every workout you complete is evidence.
          </p>

          <p>
            Every difficult conversation you stop avoiding is evidence.
          </p>

          <p>
            Every promise you make to yourself and actually keep is evidence.
          </p>

          <p>
            Over time, you begin trusting yourself because you have repeatedly
            watched yourself do what you said you would do.
          </p>

          <p>
            Other people can often see the result too.
          </p>

          <p>
            It shows in the way you look, speak, move, and handle difficult
            situations.
          </p>

          <blockquote>
            Discipline builds self-trust. Self-trust gives confidence something
            real to stand on.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Step 6: Learn How to Actually Use Your Confidence</h2>

          <p>
            Building confidence internally is only half of the equation.
          </p>

          <p>
            Eventually, you have to express it.
          </p>

          <p>
            Start the conversation.
          </p>

          <p>
            Say what you actually think.
          </p>

          <p>
            Apply for the opportunity.
          </p>

          <p>
            Ask the question.
          </p>

          <p>
            Stop editing every sentence inside your head before you say it.
          </p>

          <p>
            The goal is not to become arrogant or dominate every room you enter.
          </p>

          <p>
            It is to become comfortable enough with yourself that you are no
            longer constantly asking what everybody else thinks of you.
          </p>

          <p>
            Your attention begins shifting toward a better question:
          </p>

          <blockquote>
            Instead of asking "What does everybody think of me?" ask "What do I
            want out of this situation?"
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-10-levels-of-attractiveness/attractiveness4.png"
              alt="Bands using earned confidence during conversations, opportunities, and uncomfortable situations"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 7: Build Something Bigger Than Your Appearance</h2>

          <p>
            There eventually comes a point where another haircut, outfit, or
            physical improvement cannot give you what you are actually looking
            for.
          </p>

          <p>
            You need direction.
          </p>

          <p>
            You need something you care about enough to struggle for.
          </p>

          <p>
            That could be building a business, becoming great at your career,
            creating something, competing in a sport, raising a family, serving
            a community, or pursuing a goal that genuinely matters to you.
          </p>

          <p>
            The exact purpose is personal.
          </p>

          <p>
            What matters is that your life begins moving toward something.
          </p>

          <p>
            Purpose changes the way you carry yourself because your attention is
            no longer entirely focused on yourself.
          </p>

          <p>
            You have somewhere to go.
          </p>

          <p>
            And when somebody has real direction, they do not need to constantly
            announce it for other people to notice.
          </p>

          <blockquote>
            Purpose makes your life more interesting because your appearance is
            no longer the most interesting thing about you.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Step 8: Become Someone Who Makes Other People Better</h2>

          <p>
            Self-improvement begins as a very individual journey.
          </p>

          <p>
            You want to fix your problems.
          </p>

          <p>
            You want to improve your life.
          </p>

          <p>
            You want to become somebody you are proud of.
          </p>

          <p>
            But eventually, the strongest version of that growth begins
            affecting other people.
          </p>

          <p>
            You organize things.
          </p>

          <p>
            You make decisions.
          </p>

          <p>
            You take responsibility.
          </p>

          <p>
            You help somebody else improve instead of only worrying about
            yourself.
          </p>

          <p>
            That is where leadership begins.
          </p>

          <p>
            Leadership is not controlling everybody around you. It is becoming
            somebody people can trust when a decision needs to be made or
            something needs to get done.
          </p>

          <blockquote>
            Attraction becomes more powerful when people do not only enjoy your
            presence—they trust who you are.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-10-levels-of-attractiveness/attractiveness5.png"
              alt="Bands becoming a leader and helping the people around him improve"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 9: Let Your Actions Build Your Reputation</h2>

          <p>
            Reputation is what begins happening when the person you have built
            consistently shows up around other people.
          </p>

          <p>
            People remember how you treated them.
          </p>

          <p>
            They remember whether you kept your word.
          </p>

          <p>
            They remember what you created, contributed, taught, or helped them
            through.
          </p>

          <p>
            That is a much deeper form of attraction than simply being the
            best-looking person in a room.
          </p>

          <p>
            Over enough time, your work and behavior can leave an impact even
            when you are not physically there.
          </p>

          <p>
            You do not need to become famous for that to happen.
          </p>

          <p>
            Your legacy could exist through a family, business, community,
            friendship, project, or something you created that continues helping
            people.
          </p>

          <blockquote>
            Eventually, what you contribute to people's lives matters more than
            whether you impressed them when you walked into the room.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Step 10: Stop Chasing the Number</h2>

          <p>
            This is where the entire idea of becoming a "10" starts falling
            apart.
          </p>

          <p>
            Nobody is objectively required to see you as a 10.
          </p>

          <p>
            Somebody will always prefer a different face, body, personality,
            lifestyle, or type of person.
          </p>

          <p>
            You cannot win that game.
          </p>

          <p>
            The final shift is realizing that the person you see in the mirror
            was built through years of discomfort, mistakes, discipline, and
            growth.
          </p>

          <p>
            You stopped hiding.
          </p>

          <p>
            You improved what you could control.
          </p>

          <p>
            You learned how to take care of yourself.
          </p>

          <p>
            You built discipline, confidence, and purpose.
          </p>

          <p>
            Eventually, those things became more important than the number you
            originally wanted somebody else to give you.
          </p>

          <blockquote>
            The highest level of attractiveness is no longer needing everybody
            else to agree that you are attractive.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-10-levels-of-attractiveness/attractiveness6.png"
              alt="Bands reaching the final level and no longer chasing validation or an attractiveness score"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>The Attraction Test</h2>

          <p>
            So how do you know whether you are actually becoming more
            attractive?
          </p>

          <p>
            Do not only look at the mirror.
          </p>

          <p>
            Ask better questions.
          </p>

          <p>
            Are you healthier than you were a year ago?
          </p>

          <p>
            Do you take care of yourself without needing somebody else to
            notice?
          </p>

          <p>
            Do you keep promises to yourself?
          </p>

          <p>
            Can you walk into uncomfortable situations without immediately
            folding?
          </p>

          <p>
            Can you have a conversation without constantly wondering how you are
            being judged?
          </p>

          <p>
            Are you working toward something that genuinely matters to you?
          </p>

          <p>
            Do the people around you become better because you are in their
            lives?
          </p>

          <p>
            Would you still want to become this person if nobody could give you
            a number at the end?
          </p>

          <p>
            Those questions reveal much more than a rating ever could.
          </p>

          <blockquote>
            Becoming attractive is not about reaching a perfect number. It is
            about building a person you no longer feel the need to run away
            from.
          </blockquote>
        </section>

        <section className="article-section article-next">
          <h2>Take the Next Step</h2>

          <p>
            Attraction becomes sustainable when the habits behind it stop being
            temporary.
          </p>

          <p>
            The Routine helps you organize your training, responsibilities,
            goals, recovery, and free time so the person you want to become has
            a place in your actual schedule.
          </p>

          <div
            className="article-next-card"
            onClick={() => {
              trackEvent("article_system_clicked", {
                page: window.location.pathname,
                metadata: {
                  article: "video_1k",
                  system: "the_routine",
                },
              });

              navigate("/systems/routine");
            }}
          >
            <span>Free System</span>

            <h3>The Routine</h3>

            <p>
              Build a realistic daily schedule around the habits and priorities
              that move your life forward.
            </p>

            <span className="next-arrow">Build Your Routine →</span>
          </div>
        </section>

        <section className="article-section">
          <h2>Final Thoughts: Build Someone You Respect</h2>

          <p>
            Wanting to look better is not a bad thing.
          </p>

          <p>
            Get in shape. Dress better. Take care of yourself. Improve your
            social skills. Become more confident.
          </p>

          <p>
            Just do not make the mistake of believing that one more improvement
            will finally force the entire world to approve of you.
          </p>

          <p>
            The journey becomes much more valuable when your attention shifts
            from proving your worth to building your life.
          </p>

          <p>
            Develop discipline.
          </p>

          <p>
            Learn how to use your confidence.
          </p>

          <p>
            Find something worth working toward.
          </p>

          <p>
            Help the people around you.
          </p>

          <p>
            And eventually, stop chasing the number altogether.
          </p>

          <p>
            Because the best version of you probably will not care whether
            somebody calls them a 6, an 8, or a 10.
          </p>

          <p>
            They will have much bigger things to worry about.
          </p>

          <blockquote>
            Build yourself until becoming attractive is a side effect of the
            life you created, not the entire reason you created it.
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
          onClick={() => navigate("/articles")}
        >
          <span>More Articles</span>

          <h3>Keep Improving</h3>

          <p>
            Explore more breakdowns on mindset, fitness, self-control,
            addiction, and building a better life.
          </p>

          <span className="next-arrow">Browse Articles →</span>
        </div>
      </article>
    </main>
  );
}

export default Video1KArticle;
