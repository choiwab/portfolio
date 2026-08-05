import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import peahiWave from './public/blog/peahi-wave.jpg';
import zurichLogo from './public/blog/zurich-logo.png';
import './Blog.css';

const SimpleArchitecture = () => (
  <figure className="simple-architecture">
    <div
      className="simple-architecture__flow"
      role="img"
      aria-label="Simplified workflow from an underwriting submission, through orchestration and specialist services, to underwriter review"
    >
      <span>Submission</span>
      <b aria-hidden="true">→</b>
      <span>Orchestration</span>
      <b aria-hidden="true">→</b>
      <span>Specialist services</span>
      <b aria-hidden="true">→</b>
      <span>Underwriter review</span>
    </div>
    <div className="simple-architecture__focus">
      My focus: financial research and quotation generation
    </div>
    <figcaption>
      A simplified public view of the project. Pe’ahi itself was a wider team effort.
    </figcaption>
  </figure>
);

const PeahiBlogPost = () => {
  useEffect(() => {
    document.title = 'Riding the Agentic Wave: Building Pe’ahi | Jaehyeok Choi';
  }, []);

  return (
    <main className="article-page">
      <article className="blog-article">
        <header className="article-hero">
          <Link className="article-back" to="/blog">
            <ArrowBackIcon fontSize="small" /> Back to Blog
          </Link>

          <div className="article-brand">
            <img src={zurichLogo} alt="Zurich Insurance logo" />
            <span>Internship reflection · AI engineering</span>
          </div>

          <h1>Riding the Agentic Wave: What I Learned Building Pe’ahi</h1>
          <p className="article-deck">
            An internship story about underwriting agents, messy company names,
            stubborn Word documents, and learning where AI should stop.
          </p>
          <div className="article-byline">
            <span>Jaehyeok Choi</span>
            <span>August 2026</span>
            <span>10 min read</span>
          </div>

          <figure className="article-cover">
            <img
              src={peahiWave}
              alt="A surfer riding through a large blue wave"
            />
            <figcaption>
              Pe’ahi was named after the wave—a fitting symbol for the agentic wave
              moving through underwriting.
            </figcaption>
          </figure>
        </header>

        <div className="article-content">
          <p className="article-lede">
            Pe’ahi is the name of a formidable wave. It also became the name of the
            agentic underwriting project I joined during my internship at Zurich Insurance.
            The metaphor was intentional: AI was arriving in underwriting like a new wave,
            and our job was to work out how to ride it responsibly.
          </p>

          <p>
            It turned out to be a very good name. Some days we were discussing how agents
            could coordinate complex insurance work. On other days, I was trying to stop a
            Word footer from swallowing a legal clause. Both were part of building production
            AI. Only one looked exciting on an architecture diagram.
          </p>

          <div className="article-note">
            This article is based on my own experience. The architecture and examples are
            intentionally simplified, and no customer data, proprietary underwriting rules,
            or internal system identifiers are included.
          </div>

          <section>
            <h2>I thought the difficult part would be the model</h2>
            <p>
              Before the internship, “building an AI agent” sounded mostly like a model and
              prompting problem. Choose the right model, write a clever system prompt, connect
              a few tools, and watch the agent go. That picture is not completely wrong. It is
              simply missing most of the work.
            </p>
            <p>
              Commercial underwriting does not begin with a tidy request. Information arrives
              through emails, attachments, company names that do not quite match database
              records, and policy details accumulated across conversations. The underwriter
              has to turn those fragments into a defensible view of a business before deciding
              what can be offered.
            </p>
            <p>
              A model can help with ambiguity. It cannot make ambiguity disappear. Once an
              output affects a quotation, the system needs validation, provenance, explicit
              rules, useful failure states, and a human who can inspect what happened. The hard
              question was not “How autonomous can we make this?” It was “Where does autonomy
              help, and where would it create unnecessary risk?”
            </p>
          </section>

          <section>
            <h2>Pe’ahi in one minute</h2>
            <p>
              Pe’ahi was designed as an agent-driven workflow for commercial underwriting.
              Instead of asking one enormous model to understand every document, research a
              company, assess risk, price a policy, and prepare a quotation, the platform split
              the work across an orchestration layer and specialist services. An underwriter
              remained in the loop for consequential decisions.
            </p>

            <SimpleArchitecture />

            <p>
              My main work sat in two parts of that flow: financial research and quotation
              generation. The wider orchestration platform was a team effort. Being precise
              about that distinction matters to me; good engineering is collaborative, and a
              portfolio should not quietly turn “we built” into “I built.”
            </p>
          </section>

          <section>
            <h2>Company names are surprisingly slippery</h2>
            <p>
              My work on the financial service began with a deceptively simple question:
              which company are we talking about?
            </p>
            <p>
              A submission might use a familiar brand while the data provider stores a legal
              parent. It might refer to a subsidiary, omit punctuation, use a ticker, or contain
              only part of an identifier. Private companies add another layer of difficulty
              because the available information is often less uniform.
            </p>
            <p>
              I worked on a preprocessing and retrieval flow that normalized the available
              identity signals, generated possible matches, ranked the candidates semantically,
              and then retrieved financial information from approved sources. Before another
              service could use the result, it passed through typed validation and explicit
              source-handling rules.
            </p>
            <ol className="plain-steps">
              <li><strong>Normalize the input.</strong> Treat names and identifiers as evidence, not unquestionable truth.</li>
              <li><strong>Rank possible entities.</strong> Use semantic similarity where the input is genuinely ambiguous.</li>
              <li><strong>Retrieve and reconcile.</strong> Combine approved sources without silently hiding disagreements.</li>
              <li><strong>Return a typed response.</strong> Downstream systems should receive a contract, not a guess in paragraph form.</li>
            </ol>
            <p>
              This was where probabilistic methods earned their place. They were useful for
              narrowing uncertainty. But the ranking score did not get to declare itself truth
              and wander into the rest of the platform unsupervised.
            </p>
          </section>

          <section>
            <h2>The quotation agent taught me where AI should stop</h2>
            <p>
              My second major area was quotation generation. At first glance, this looked like
              document automation: take the underwriting inputs, fill a template, attach the
              relevant wording, and produce a file. The real challenge was the business logic
              hiding behind the document.
            </p>
            <p>
              Underwriters were making decisions about defaults, coverage details, conditions,
              and legal wording. Those decisions needed to be represented consistently and
              reviewed. I used Pydantic models to turn the agreed inputs and rules into a typed
              source of truth. Cross-field validation caught inconsistent combinations, while a
              deterministic derivation layer applied approved business logic.
            </p>
            <p>
              The distinction became one of my clearest lessons from the internship:
              <strong> use AI to interpret ambiguity; use deterministic software to make commitments.</strong>
              Natural-language assistance could help someone explore domain knowledge. Final
              document conditions could not depend on a model feeling creative that afternoon.
            </p>

            <h3>A Word document is not “just a Word document”</h3>
            <p>
              Then came document generation. A `.docx` file is effectively a bundle of XML
              wearing a tie. Once I had to preserve numbering, tables, page breaks, and formatting
              while combining reusable document sections, ordinary placeholder replacement was
              no longer enough. Some operations required working closer to the OOXML structure.
            </p>
            <p>
              I also moved away from an early attempt to make different quotation structures fit
              one elegant abstraction. Separate templates introduced a little duplication, but
              they made behavior easier to reason about and safer to maintain. It was a useful
              reminder that the cleanest whiteboard design is not always the kindest design for
              the person debugging it later.
            </p>
          </section>

          <section>
            <h2>The underwriters were part of the engineering system</h2>
            <p>
              Many rules did not arrive in a specification precise enough to implement. They
              existed as professional judgment: use a condition in the usual case, look at a
              combination of indicators, or escalate when two pieces of information conflict.
            </p>
            <p>
              I learned to slow the conversation down and walk through the decision field by
              field. What happens if this value is missing? What if two sources disagree? Is this
              a default or a requirement? Which exceptions matter? I would then reflect the answer
              back as a schema, a decision table, or an example output and ask the underwriter to
              challenge it.
            </p>
            <p>
              That process changed how I think about schema design. A schema is not merely a
              backend convenience. In a domain-heavy system, it is a shared language between
              business knowledge and executable software. If the conversation is vague, the code
              will eventually become vague too—just with better indentation.
            </p>
          </section>

          <section>
            <h2>Production is where the prototype starts paying rent</h2>
            <p>
              A local demo could prove that the idea worked. It could not prove that another team
              could safely depend on it. The services also needed stable API contracts, strict
              validation, asynchronous handling for slow work, observable failures, repeatable
              deployment, and tests around integration boundaries.
            </p>
            <p>
              The tools included Python, FastAPI, Pydantic, queues for asynchronous processing,
              tracing for agent behavior, Docker, automated delivery, and Azure container
              infrastructure. The stack mattered, but the reasons mattered more:
            </p>
            <ul className="article-list">
              <li>Typed contracts kept services honest when schemas changed.</li>
              <li>Queued work kept slow external retrieval away from immediate request paths.</li>
              <li>Tracing helped separate model problems from data and integration problems.</li>
              <li>Preview and review steps made automation easier for underwriters to trust.</li>
              <li>Tests gave the team a safer way to change a fast-moving agentic system.</li>
            </ul>
            <p>
              None of these features produces an impressive chatbot screenshot. They are also
              the features that decide whether a chatbot demo can become a useful service.
            </p>
          </section>

          <section>
            <h2>What I can honestly claim</h2>
            <p>
              I would love to finish the project section with a suspiciously precise claim such
              as “improved underwriting productivity by 73%.” I cannot. I do not have an approved
              production measurement I can publish, and inventing one would be a strange way to
              advertise reliability.
            </p>
            <p>
              What I can defend is that I helped take two bounded services from domain
              conversations to deployed software. One turned uncertain company inputs into
              structured financial responses. The other transformed validated underwriting
              inputs into reviewable quotation documents. Along the way, I worked across API
              design, business rules, document generation, testing, observability, CI/CD, and
              cloud deployment.
            </p>
            <p>
              That is less cinematic than “AI transformed underwriting overnight.” It is also a
              much better description of useful engineering.
            </p>
          </section>

          <section>
            <h2>The lessons I kept</h2>
            <ul className="lessons-list">
              <li><strong>Use AI at the uncertainty boundary.</strong> Semantic methods are valuable when inputs are messy. Commitments still need explicit controls.</li>
              <li><strong>Agents are distributed systems with an unusually charming failure mode.</strong> Queues, retries, contracts, and observability matter as much as model choice.</li>
              <li><strong>Domain translation is engineering.</strong> Good questions and counterexamples can prevent more bugs than another abstraction layer.</li>
              <li><strong>Human review is a feature.</strong> In consequential workflows, a thoughtful handoff is better than pretending uncertainty does not exist.</li>
              <li><strong>Simple and predictable usually wins.</strong> Especially when the alternative is a clever system nobody wants to maintain.</li>
            </ul>
          </section>

          <section>
            <h2>What I would build next</h2>
            <p>
              If I continued the project, I would focus less on adding more agents and more on
              measuring the ones already present. My next priorities would be:
            </p>
            <ol className="plain-steps">
              <li><strong>A versioned evaluation set</strong> built from anonymized, expert-reviewed cases.</li>
              <li><strong>Confidence-aware escalation</strong> so uncertain matches become visible review tasks rather than hidden assumptions.</li>
              <li><strong>End-to-end operational traces</strong> linking retrieval, validation, rule execution, document generation, and human approval.</li>
            </ol>
            <p>
              Those capabilities would make quality visible over time and turn underwriter
              corrections into durable improvements instead of one-off fixes.
            </p>
          </section>

          <section className="article-conclusion">
            <h2>Leaving the wave with a different view of AI engineering</h2>
            <p>
              Pe’ahi was a fitting name. A wave is powerful, but riding it requires respect for
              the forces around it. The same is true of agentic AI. The model matters, but so do
              the data contracts, business rules, failure handling, human judgment, and people
              who understand the domain better than the software ever will.
            </p>
            <p>
              I entered the internship thinking mostly about models and agent frameworks. I left
              thinking about boundaries: between probabilistic and deterministic logic, between
              a service and its consumers, and between automation and accountability. That is the
              kind of AI engineering I want to keep doing.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default PeahiBlogPost;
