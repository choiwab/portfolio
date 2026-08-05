import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Blog.css';

const PlatformDiagram = () => (
  <figure className="article-figure" aria-labelledby="platform-diagram-caption">
    <div className="platform-diagram" role="img" aria-label="Simplified agentic underwriting workflow. An underwriting submission enters an orchestration layer, which coordinates research and quotation services before human review.">
      <div className="diagram-node diagram-node--external">Underwriting submission</div>
      <div className="diagram-arrow" aria-hidden="true">→</div>
      <div className="diagram-node">Orchestration layer</div>
      <div className="diagram-arrow" aria-hidden="true">→</div>
      <div className="platform-diagram__services">
        <div className="diagram-node diagram-node--owned">
          <span className="diagram-node__label">My focus</span>
          Financial research
          <small>Identity + structured data</small>
        </div>
        <div className="diagram-node">Other specialist services</div>
        <div className="diagram-node diagram-node--owned">
          <span className="diagram-node__label">My focus</span>
          Quotation generation
          <small>Rules + documents</small>
        </div>
      </div>
      <div className="diagram-arrow diagram-arrow--vertical" aria-hidden="true">↓</div>
      <div className="diagram-node diagram-node--human">Underwriter review</div>
    </div>
    <figcaption id="platform-diagram-caption">
      A deliberately abstracted view of the workflow. The highlighted services show my
      primary focus; the orchestration layer and wider platform were team efforts.
    </figcaption>
  </figure>
);

const BoundaryDiagram = () => (
  <figure className="article-figure" aria-labelledby="boundary-diagram-caption">
    <div className="boundary-diagram" role="img" aria-label="Decision boundary between probabilistic methods for ambiguous inputs and deterministic software for validated business outputs.">
      <section className="boundary-panel boundary-panel--ai">
        <p className="boundary-panel__kicker">Use probability to</p>
        <h3>Resolve ambiguity</h3>
        <ul>
          <li>Interpret incomplete names</li>
          <li>Rank likely matches</li>
          <li>Navigate domain knowledge</li>
        </ul>
      </section>
      <div className="boundary-divider" aria-hidden="true">
        <span>typed boundary</span>
      </div>
      <section className="boundary-panel boundary-panel--rules">
        <p className="boundary-panel__kicker">Use rules to</p>
        <h3>Guarantee behavior</h3>
        <ul>
          <li>Validate required fields</li>
          <li>Apply approved logic</li>
          <li>Assemble final documents</li>
        </ul>
      </section>
    </div>
    <figcaption id="boundary-diagram-caption">
      Probabilistic methods narrow uncertainty. Typed contracts and deterministic rules
      take over before consequential business outputs are produced.
    </figcaption>
  </figure>
);

const QuotationFlow = () => {
  const steps = [
    ['01', 'Structured input', 'Account, policy and coverage details'],
    ['02', 'Validation', 'Types, required fields and constraints'],
    ['03', 'Rule derivation', 'Approved defaults and conditions'],
    ['04', 'Document assembly', 'Templates, clauses and formatting'],
    ['05', 'Human review', 'Preview, approve and distribute'],
  ];

  return (
    <figure className="article-figure" aria-labelledby="quotation-diagram-caption">
      <ol className="flow-diagram">
        {steps.map(([number, title, detail]) => (
          <li className="flow-step" key={number}>
            <span className="flow-step__number">{number}</span>
            <strong>{title}</strong>
            <small>{detail}</small>
          </li>
        ))}
      </ol>
      <figcaption id="quotation-diagram-caption">
        Quotation generation was a visible, testable pipeline—not a single prompt that
        jumped directly from an email to a business document.
      </figcaption>
    </figure>
  );
};

const PeahiBlogPost = () => {
  useEffect(() => {
    document.title = 'Where AI Stops and Business Rules Begin | Jaehyeok Choi';
  }, []);

  return (
    <main className="article-page">
      <article className="blog-article">
        <header className="article-hero">
          <Link className="article-back" to="/blog">
            <ArrowBackIcon fontSize="small" /> Back to Blog
          </Link>
          <p className="eyebrow">AI Engineering · Internship Case Study</p>
          <h1>Where AI Stops and Business Rules Begin</h1>
          <p className="article-deck">
            What I learned building financial-research and quotation services for an
            agent-driven underwriting project during my internship at Zurich Insurance.
          </p>
          <div className="article-byline">
            <span>Jaehyeok Choi</span>
            <span>August 2026</span>
            <span>10 min read</span>
          </div>
          <div className="article-disclosure">
            This article reflects my own experience. Technical details and examples are
            deliberately simplified; no customer data, proprietary rules or internal
            system identifiers are included.
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-sidebar">
            <nav className="article-toc" aria-label="Article contents">
              <p>In this article</p>
              <a href="#problem">The real problem</a>
              <a href="#architecture">System and ownership</a>
              <a href="#financial">Resolving identity</a>
              <a href="#quotation">Encoding judgment</a>
              <a href="#production">Production engineering</a>
              <a href="#stakeholders">Working with experts</a>
              <a href="#lessons">Results and lessons</a>
              <a href="#next">What I would build next</a>
            </nav>
          </aside>

          <div className="article-content">
            <p className="article-lede">
              When I began my internship at Zurich Insurance, I expected the hardest part
              of building an underwriting agent to be prompting the model. It was not. The
              real challenge was deciding which decisions could tolerate probabilistic
              reasoning—and which had to remain deterministic, explainable and reproducible.
            </p>

            <p>
              I worked on an internal agent-driven platform for commercial insurance
              underwriting. My primary responsibility was developing two services: a
              financial-research service that identified companies and assembled structured
              information, and a quotation service that converted underwriting inputs into
              validated business documents.
            </p>

            <div className="project-snapshot" aria-label="Project snapshot">
              <div><span>Role</span><strong>Data Scientist Intern</strong></div>
              <div><span>Domain</span><strong>Commercial insurance</strong></div>
              <div><span>Primary focus</span><strong>Financial + quotation services</strong></div>
              <div><span>Core stack</span><strong>Python, FastAPI, Pydantic, Azure</strong></div>
            </div>

            <section id="problem">
              <p className="section-number">01</p>
              <h2>The real problem was not generating text</h2>
              <p>
                A commercial underwriting submission rarely arrives as a clean JSON object.
                It can begin as an email with attachments, inconsistent company names,
                incomplete financial information and policy details carried over from earlier
                conversations. An underwriter must assemble those fragments into a defensible
                view before deciding coverage and producing a quotation.
              </p>
              <p>
                The workflow contains uncertainty, but its final outputs cannot be casual. A
                mistaken company match affects every downstream financial field. An incorrect
                document condition can alter the meaning of a quotation. The goal was therefore
                not simply to “make an agent autonomous.” It was to reduce repetitive work while
                preserving the control and reviewability an underwriter needs.
              </p>
              <blockquote>
                Production AI was less about giving a model more freedom and more about
                designing safe boundaries around uncertainty.
              </blockquote>
            </section>

            <section id="architecture">
              <p className="section-number">02</p>
              <h2>The platform—and the part I owned</h2>
              <p>
                The wider project connected an orchestration layer with several specialist
                services. Each service handled a bounded part of the underwriting workflow,
                while a human underwriter remained responsible for reviewing consequential
                outputs.
              </p>
              <p>
                I focused on financial research and quotation generation, together with the
                API contracts that connected those services to the wider workflow. Keeping this
                distinction explicit matters: the surrounding platform was a team effort, while
                these services were where I spent most of my implementation and stakeholder time.
              </p>
              <PlatformDiagram />
            </section>

            <section id="financial">
              <p className="section-number">03</p>
              <h2>Challenge one: resolving a company before evaluating it</h2>
              <p>
                Financial research starts with a deceptively difficult question: which company
                are we talking about? A submission may use a trading name instead of a legal
                entity, omit punctuation, refer to a subsidiary, or contain only a partial
                identifier. Public and private companies also expose different levels of data.
              </p>
              <p>
                I developed a preprocessing and retrieval flow that accepted several identity
                signals, normalized them, generated candidate companies and ranked the likely
                matches. Once an identity was established, the service retrieved information
                from approved sources, reconciled overlapping values and returned a typed API
                response.
              </p>

              <div className="pipeline-grid" role="img" aria-label="Financial research pipeline from mixed identifiers through candidate ranking and source reconciliation to a validated response.">
                <div><span>Input</span><strong>Names + identifiers</strong></div>
                <div><span>Resolve</span><strong>Normalize + rank candidates</strong></div>
                <div><span>Retrieve</span><strong>Approved data sources</strong></div>
                <div><span>Return</span><strong>Validated response</strong></div>
              </div>

              <p>
                This was an appropriate place for semantic methods because the input itself was
                ambiguous. But the ranking result did not automatically become the system’s
                truth. It still had to cross validation, source-priority and error-handling
                boundaries before another service could consume it.
              </p>
            </section>

            <section id="quotation">
              <p className="section-number">04</p>
              <h2>Challenge two: turning underwriting judgment into executable rules</h2>
              <p>
                The quotation project began with a manual document workflow. The apparent task
                was filling templates. The deeper task was discovering and formalizing the
                decision process behind them: which information was required, how defaults were
                derived, which conditions affected coverage wording and what needed human review.
              </p>
              <p>
                I designed the service around Pydantic models as the source of truth. The schema
                represented account, coverage and policy inputs; cross-field validators caught
                inconsistent combinations; and a deterministic derivation layer applied only
                approved business logic. The final stage assembled the relevant document
                sections while preserving their formatting and structure.
              </p>

              <BoundaryDiagram />

              <p>
                The important design decision was where not to use an LLM. Natural-language
                assistance could help someone navigate domain documentation, but final condition
                selection and document composition followed validated, testable rules. The model
                could assist at an ambiguity boundary; it could not improvise consequential
                wording.
              </p>

              <QuotationFlow />

              <h3>Document generation became a systems problem</h3>
              <p>
                Generating a Word file was more involved than replacing placeholders. Reusable
                clauses carried their own numbering, tables, page breaks and formatting. A
                high-level document library covered ordinary operations, but preserving
                structure across combined documents sometimes required lower-level OOXML work.
              </p>
              <p>
                I also learned to prefer predictable designs over premature abstraction. A more
                unified template initially looked elegant, but separating genuinely different
                document structures made behavior easier to test and maintain. The cleanest
                diagram is not always the safest production implementation.
              </p>
            </section>

            <section id="production">
              <p className="section-number">05</p>
              <h2>Making the services production-ready</h2>
              <p>
                Shipping inside an enterprise environment changed the definition of “working.”
                A successful local demo was only the beginning. The services needed stable API
                contracts, strict validation, useful failure states, containerized deployment
                and predictable behavior when external dependencies were slow or unavailable.
              </p>
              <ul className="article-list">
                <li><strong>Typed boundaries:</strong> FastAPI and Pydantic aligned HTTP schemas, domain models and validation.</li>
                <li><strong>Asynchronous work:</strong> long-running retrieval could move away from the immediate request path.</li>
                <li><strong>Observability:</strong> tracing helped separate model behavior from data-provider and service failures.</li>
                <li><strong>Deployment:</strong> containers and automated delivery created a repeatable path between code and environment.</li>
                <li><strong>Integration safety:</strong> contract and integration tests protected downstream consumers as schemas evolved.</li>
              </ul>
              <p>
                The quotation workflow also offered a preview path so derived values could be
                inspected before generating and storing the final document. Controls like this
                are less dramatic than an agent demo, but they are what make automation easier
                for another team to trust.
              </p>
            </section>

            <section id="stakeholders">
              <p className="section-number">06</p>
              <h2>The most valuable data source was an underwriter conversation</h2>
              <p>
                Many rules did not begin in a specification precise enough to code. They existed
                as professional judgment: use a certain condition in the usual case, check a
                combination of indicators, or escalate when information conflicts. My job was to
                turn that knowledge into a deterministic schema without flattening important
                exceptions.
              </p>
              <p>
                I learned to walk through decisions field by field, ask what should happen when
                information was missing and test counterexamples rather than accepting the first
                happy path. I then reflected the rule back as a schema, decision table or example
                output for confirmation. Schema design became more than a backend task—it became
                a negotiated representation of underwriting knowledge.
              </p>
            </section>

            <section id="lessons">
              <p className="section-number">07</p>
              <h2>Results I can defend—and lessons I kept</h2>
              <p>
                I do not want to manufacture an efficiency percentage without an approved
                production measurement. The concrete outcome is that I helped take two bounded
                services from domain conversations to deployed software: one resolved uncertain
                company inputs into structured financial responses, and the other transformed
                validated underwriting inputs into reviewable quotation documents.
              </p>

              <div className="lesson-grid">
                <div><span>01</span><h3>Use AI at the uncertainty boundary</h3><p>Semantic methods are useful when the input is ambiguous. Consequential outputs still need typed contracts and controls.</p></div>
                <div><span>02</span><h3>Domain translation is engineering</h3><p>Good questions, decision tables and counterexamples can matter as much as implementation skill.</p></div>
                <div><span>03</span><h3>Agents are distributed systems</h3><p>Queues, retries, contracts, observability and failure semantics determine whether an agent survives production.</p></div>
                <div><span>04</span><h3>Trust must be designed</h3><p>Preview modes, deterministic rules and human approval make automation easier to adopt.</p></div>
              </div>
            </section>

            <section id="next">
              <p className="section-number">08</p>
              <h2>What I would build next</h2>
              <p>
                If I continued the project, I would focus less on adding more agents and more on
                measuring the agents already present. My next iteration would center on:
              </p>
              <ol className="article-list article-list--numbered">
                <li><strong>A versioned evaluation set</strong> built from anonymized, expert-reviewed cases, with separate measures for identity matching, field completeness and rule correctness.</li>
                <li><strong>Confidence-aware escalation</strong> so uncertain matches or conflicting source values become explicit review tasks instead of hidden assumptions.</li>
                <li><strong>End-to-end operational traces</strong> connecting a request to retrieval, validation, rule evaluation, document generation and human approval.</li>
              </ol>
              <p>
                Those capabilities would make quality visible over time and convert stakeholder
                corrections into durable system improvements.
              </p>
            </section>

            <section className="article-conclusion">
              <p className="eyebrow">Final reflection</p>
              <h2>A different definition of AI engineering</h2>
              <p>
                I entered the internship thinking primarily about models and agent frameworks.
                I left thinking about boundaries: between uncertain and deterministic logic,
                between a service and its consumers, and between automation and human judgment.
              </p>
              <p>
                Reliable AI is rarely one clever prompt. It is a system of schemas, data sources,
                business rules, failure handling, deployment infrastructure and conversations
                with the people whose decisions the software is meant to support. That is the
                kind of AI engineering I want to keep doing.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
};

export default PeahiBlogPost;
