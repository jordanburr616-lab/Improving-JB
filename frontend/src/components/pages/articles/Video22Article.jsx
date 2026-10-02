import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { trackEvent } from "../../../utils/analytics";

function Video22Article() {
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
          source: "article_22",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      trackEvent("email_signup", {
        page: window.location.pathname,
        metadata: {
          location: "article_22",
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
          <p className="article-category">Mindset</p>
          <p className="article-date">October 2, 2026</p>

          <h1>How to Stop Isolating Yourself</h1>

          <p className="article-subtitle">
            Being an introvert is not the problem. The problem begins when alone
            time turns into avoidance, overthinking, and eventually a life built
            around staying comfortable. Here is how to find the balance again.
          </p>

          {/* Add the Video 22 YouTube URL once the video is live. */}
          <a
            className="article-video-link"
            href="https://www.youtube.com/watch?v=IPPkg0d5nsU"
            onClick={(e) => e.preventDefault()}
            aria-disabled="true"
          >
            <span className="yt-icon">▶</span>
            Watch on YouTube
            <span className="article-link-arrow">↗</span>
          </a>
        </header>

        <section className="article-section">
          <h2>Introduction: Being Introverted Isn't the Problem</h2>

          <p>
            There is nothing wrong with enjoying your own company.
          </p>

          <p>
            You do not need to become the loudest person in the room, go out
            every single weekend, or surround yourself with dozens of friends to have a
            happy life.
          </p>

          <p>
            In fact, being comfortable with staying alone can be one of your greatest
            strengths.
          </p>

          <p>
            The problem begins when being alone stops being a choice
            and becomes the main way you avoid everything that makes you
            uncomfortable.
          </p>

          <p>
            You turn down one invitation because you're burnt out socially. Then you turn down another
            because staying home just sounds easier. Eventually, you start avoiding every
            text, conversation, confrontation, and opportunitie before they
            even happen.
          </p>

          <p>
            What originally felt peaceful can slowly become isolation.
          </p>

          <blockquote>
            The goal is not to become an extrovert. The goal is to make sure
            being introverted does not become an excuse to avoid living.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>How Solitude Turns Into Isolation</h2>

          <p>
            In the 7 Levels of an Introvert video, the progression begins with
            something completely normal: needing time to recharge.
          </p>

          <p>
            You spend time around people... till your social battery runs low so you decide to
            take some time for yourself rather than forcing interactions.
          </p>

          <p>
            Then alone time eventually becomes a preference.
          </p>

          <p>
            The preference can eventually turn into avoidance. Avoidance gives you
            more time inside your own head. More time inside your head creates
            more opportunities to overthink every interaction.
          </p>

          <p>
            And once social situations begin feeling more and more stressful, staying home
            seems like a no brainer.
          </p>

          <p>
            That is how the cycle feeds itself.
          </p>

          <p>
            Recharge becomes preference. Preference becomes avoidance.
            Avoidance becomes overthinking. Overthinking becomes shutdown.
            Shutdown becomes isolation.
          </p>

          <blockquote>
            Alone time helps you recover. Isolation teaches you to keep
            avoiding the things that make you uncomfortable.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-7-levels-of-an-introvert/introvert1.png"
              alt="Bands progressing from healthy alone time into social isolation"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 1: Figure Out What You're Actually Avoiding</h2>

          <p>
            Before trying to become more social, figure out why you are saying
            no in the first place.
          </p>

          <p>
            Cause sometimes, you just genuinely need the break.
          </p>

          <p>
            But sometimes "I would rather stay home" actually means something
            else.
          </p>

          <p>
            It can be that you are worried the interaction will be awkward.
          </p>

          <p>
            Or maybe you are scared people will judge you.
          </p>

          <p>
            Or you possibly been isolated for so long that socializing simply
            feels unfamiliar now.
          </p>

          <p>
            Start paying attention to the moment before you reject an
            invitation, ignore a message, or avoid speaking up.
          </p>

          <p>
            Ask yourself one question:
          </p>

          <blockquote>
            Do I actually want to be alone right now, or am I avoiding
            discomfort?
          </blockquote>

          <p>
            Those are two completely different reasons to stay home.
          </p>

          <p>
            One protects your energy. The other can slowly shrink your life.
          </p>
        </section>

        <section className="article-section">
          <h2>Step 2: Stop Waiting Until You Feel Social</h2>

          <p>
            One of the easiest traps to fall into is waiting until you suddenly
            feel motivated to start putting yourself out there again.
          </p>

          <p>
            That feeling might never come.
          </p>

          <p>
            If you have spent months avoiding uncomfortable situations, your
            brain has learned that staying home is the safe option.
          </p>

          <p>
            You break that pattern by acting before you feel completely ready.
          </p>

          <p>
            Accept one invitation you would normally reject.
          </p>

          <p>
            Send the text you have been putting off.
          </p>

          <p>
            Stay at an event for an hour instead of immediately deciding not to
            go.
          </p>

          <p>
            The goal is not to suddenly fill your calendar. It is to stop
            automatically choosing avoidance every time discomfort appears.
          </p>

          <blockquote>
            You do not have to feel ready before you start. Sometimes starting
            is what makes you feel ready again.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-7-levels-of-an-introvert/introvert2.png"
              alt="Bands choosing to step outside his comfort zone instead of automatically staying home"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 3: Rebuild Your Social Muscle</h2>

          <p>
            If you stop training a muscle, it gets weaker. Simple.
          </p>

          <p>
            Yet social confidence can work the same way.
          </p>

          <p>
            After enough time alone, interactions that once felt completely
            normal can start to feel strangely difficult.
          </p>

          <p>
            The solution is not immediately forcing yourself into the biggest
            social situation possible.
          </p>

          <p>
            Start small.
          </p>

          <p>- Say something to the cashier instead of remaining silent.</p>

          <p>- Start a conversation with someone at work.</p>

          <p>- Ask someone at the gym a question.</p>

          <p>- Text a friend first rather than waiting.</p>

          <p>- Speak when you actually have something you want to say.</p>

          <p>
            These interactions might seem insignificant, but that is exactly
            why they are useful.
          </p>

          <p>
            You are collecting evidence that interacting with people does not
            need to be a massive event.
          </p>

          <blockquote>
            Social confidence is not built by thinking about becoming more
            social. It is built through repeated interactions.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Step 4: Stop Treating Every Interaction Like a Performance</h2>

          <p>
            Isolation gives you a dangerous amount of time to replay things.
          </p>

          <p>
            You remember something you said three hours ago and wonder whether
            it sounded stupid.
          </p>

          <p>
            You question somebody's reaction.
          </p>

          <p>
            You convince yourself people were judging you when they may have
            forgotten the interaction five minutes later.
          </p>

          <p>
            Eventually, every conversation starts feeling like a performance
            you need to get right.
          </p>

          <p>
            But that's when conversations get messy.
          </p>

          <p>
            Sometimes you say something awkward. Sometimes a joke does not land.
            Sometimes there is silence. Sometimes two people simply do not
            connect.
          </p>

          <p>
            None of that means you failed.
          </p>

          <p>
            When you catch yourself replaying an interaction, ask whether there
            is actually something useful to learn from it.
          </p>

          <p>
            If there is, learn it.
          </p>

          <p>
            If there is not, let the interaction end where it actually ended
            instead of continuing it inside your head.
          </p>

          <blockquote>
            Not every interaction needs a post-game analysis.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-7-levels-of-an-introvert/introvert3.png"
              alt="Bands breaking out of a cycle of replaying and overthinking social interactions"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 5: Reconnect Before You Feel Ready</h2>

          <p>
            The deeper you get into isolation, the harder reaching out can
            become.
          </p>

          <p>
            You might feel embarrassed since you disappeared.
          </p>

          <p>
            You might assume people no longer care about you.
          </p>

          <p>
            Or you might convince yourself that too much time has passed and
            reaching out now would be weird.
          </p>

          <p>
            That thinking can actually keep you isolated much longer than necessary.
          </p>

          <p>
            You do not need some massive explanation to reconnect with someone.
          </p>

          <p>
            Send them something that reminded you of them. Ask what they have
            been up to. Invite them to grab food, train, play a game, or do
            something you used to enjoy together.
          </p>

          <p>
            Some relationships may have changed. Some people might not respond
            the way you hoped.
          </p>

          <p>
            But you cannot rebuild a social life while requiring every attempt
            to reconnect to work perfectly.
          </p>

          <blockquote>
            Reconnecting with people requires accepting the possibility that
            things may feel awkward before they feel normal again.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>Step 6: Build a Social Life That Actually Fits You</h2>

          <p>
            Becoming less isolated does not mean you have to copy an exact blueprint of an extrovert's life.
          </p>

          <p>
            Maybe you do not want to go out four nights a week.
          </p>

          <p>
            Maybe you do not want twenty different friends.
          </p>

          <p>
            Maybe your ideal social life is a small group of people you trust,
            seeing friends a couple times each week, and having plenty of time
            alone in between.
          </p>

          <p>
            That is completely fine.
          </p>

          <p>
            The point is to build a social life intentionally instead of ending
            up with no social life because you kept choosing the easiest option.
          </p>

          <p>
            Figure out what actually matters to you.
          </p>

          <p>
            Who are the people you genuinely want to keep in your life?
          </p>

          <p>
            How often would you realistically like to see them?
          </p>

          <p>
            What kinds of social situations do you actually enjoy?
          </p>

          <p>
            Your answer does not need to look like anybody else's.
          </p>

          <blockquote>
            A healthy social life is not measured by how many people surround
            you. It is measured by whether the relationships you value are
            actually present in your life.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-7-levels-of-an-introvert/introvert4.png"
              alt="Bands balancing meaningful friendships with healthy time alone"
            />
          </div>
        </section>

        <section className="article-section">
          <h2>Step 7: Protect Your Alone Time Without Hiding in It</h2>

          <p>
            You do not need to eliminate alone time to escape isolation.
          </p>

          <p>
            You need to change what alone time means.
          </p>

          <p>
            Healthy alone time helps you recharge, think, work on things you
            care about, and enjoy your own company.
          </p>

          <p>
            Unhealthy isolation is different.
          </p>

          <p>
            It becomes a place where you hide from conversations, rejection,
            conflict, uncertainty, and anything else that might make you
            uncomfortable.
          </p>

          <p>
            Keep your quiet weekends.
          </p>

          <p>
            Keep the solo hobbies.
          </p>

          <p>
            Keep the time where nobody needs anything from you.
          </p>

          <p>
            Just make sure you can still leave enough space so something
            important can still exist outside of it.
          </p>

          <blockquote>
            Alone time should recharge the life you are living, not replace it.
          </blockquote>
        </section>

        <section className="article-section">
          <h2>The Level 0 Test</h2>

          <p>
            How do you know whether you are finding the balance again?
          </p>

          <p>
            It is not about suddenly becoming incredibly outgoing.
          </p>

          <p>
            Look at your relationship with solitude instead.
          </p>

          <p>
            Can you turn down plans because you genuinely need rest instead of
            because you are scared of being uncomfortable?
          </p>

          <p>
            Can you reach out to somebody first?
          </p>

          <p>
            Can you have an awkward interaction without replaying it for the
            next two days?
          </p>

          <p>
            Can you enjoy a weekend alone without disappearing from everyone
            for weeks afterward?
          </p>

          <p>
            Can you speak up when something actually matters to you?
          </p>

          <p>
            Can you enjoy your own company while still allowing other people
            into your life?
          </p>

          <blockquote>
            Level 0 is not becoming less introverted. It is being able to enjoy
            solitude without becoming trapped by it.
          </blockquote>

          <div className="article-image">
            <img
              src="/images/articles/the-7-levels-of-an-introvert/introvert5.png"
              alt="Bands reaching Level 0 by balancing solitude, friendships, and social confidence"
            />
          </div>
        </section>

        <section className="article-section article-next">
          <h2>Take the Next Step</h2>

          <p>
            Escaping isolation can get easier when your life has reasons to pull
            you outside of your comfort zone.
          </p>

          <p>
            The Routine helps you build your days around the things that
            actually matter to you, including work, training, relationships,
            recovery, and the time you intentionally want for yourself.
          </p>

          <div
            className="article-next-card"
            onClick={() => {
              trackEvent("article_system_clicked", {
                page: window.location.pathname,
                metadata: {
                  article: "video_22",
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
          onClick={() =>
            navigate("/articles/the-10-levels-of-attractiveness")
          }
        >
          <span>Next Article</span>

          <h3>The 10 Levels of Attractiveness</h3>

          <p>
            Discover how attraction develops beyond appearance through
            discipline, confidence, purpose, leadership, and the person you
            become.
          </p>

          <span className="next-arrow">Read Article →</span>
        </div>
      </article>
    </main>
  );
}

export default Video22Article;
