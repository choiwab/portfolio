import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Blog.css';

const HarnessDiagram = () => (
  <figure className="technical-diagram">
    <div
      className="harness-map"
      role="img"
      aria-label="A case enters a Deep Agents supervisor that delegates focused financial and underwriting tasks, invokes domain tools through MCP, validates structured evidence, and returns the case for human review"
    >
      <div className="diagram-chain diagram-chain--finish">
        <div className="diagram-node">
          <strong>Case request</strong>
          <small>Goal, case context, and constraints</small>
        </div>
        <span className="diagram-arrow" aria-hidden="true">→</span>
        <div className="diagram-node diagram-node--primary">
          <strong>Supervisor agent</strong>
          <small>Plan, delegate, track, and synthesize</small>
        </div>
      </div>

      <div className="diagram-dispatch" aria-hidden="true">↓ delegates focused tasks</div>

      <div className="harness-subagents">
        <div className="diagram-node diagram-node--focus">
          <strong>Financial subagent</strong>
          <small>Resolve the company and collect financial evidence</small>
        </div>
        <div className="diagram-node diagram-node--focus">
          <strong>Underwriting subagent</strong>
          <small>Interpret risk context and prepare a bounded recommendation</small>
        </div>
      </div>

      <div className="diagram-dispatch" aria-hidden="true">↓ discovers and calls approved capabilities</div>

      <div className="mcp-boundary">
        MCP client boundary · tool discovery · schema validation · execution
      </div>

      <div className="harness-tool-row">
        <div className="diagram-node">
          <strong>Research tools</strong>
          <small>Approved external and internal evidence</small>
        </div>
        <div className="diagram-node">
          <strong>Risk tools</strong>
          <small>Policy and case information</small>
        </div>
        <div className="diagram-node">
          <strong>Document tools</strong>
          <small>Read, validate, and assemble artifacts</small>
        </div>
      </div>

      <div className="diagram-dispatch" aria-hidden="true">↓ sourced, structured results</div>

      <div className="diagram-chain diagram-chain--finish">
        <div className="diagram-node">
          <strong>Supervisor synthesis</strong>
          <small>Combine evidence without hiding uncertainty</small>
        </div>
        <span className="diagram-arrow" aria-hidden="true">→</span>
        <div className="diagram-node diagram-node--human">
          <strong>Human review</strong>
          <small>Inspect, correct, approve, or escalate</small>
        </div>
      </div>
    </div>
    <figcaption>
      The public version of my experiment. The harness coordinated work, while
      specialist services and human review kept the decisions bounded.
    </figcaption>
  </figure>
);

const MCPDiagram = () => (
  <figure className="technical-diagram">
    <div
      className="mcp-map"
      role="img"
      aria-label="An agent host uses an MCP client manager to discover and invoke tools exposed by focused MCP servers, with schemas and structured results crossing the boundary"
    >
      <div className="diagram-chain">
        <div className="diagram-node diagram-node--primary">
          <strong>Agent host</strong>
          <small>Chooses a capability for the current task</small>
        </div>
        <span className="diagram-arrow" aria-hidden="true">→</span>
        <div className="diagram-node">
          <strong>MCP client manager</strong>
          <small>Connect, discover, route, and return results</small>
        </div>
        <span className="diagram-arrow" aria-hidden="true">→</span>
        <div className="diagram-node diagram-node--focus">
          <strong>Domain server</strong>
          <small>Own the tool contract and execution</small>
        </div>
      </div>

      <div className="mcp-primitives">
        <div><strong>Tools</strong><small>Actions the model may request</small></div>
        <div><strong>Resources</strong><small>Context the application may supply</small></div>
        <div><strong>Prompts</strong><small>Reusable interaction templates</small></div>
      </div>

      <div className="diagram-observability">
        Names · descriptions · input schemas · permissions · timeouts · structured results
      </div>
    </div>
    <figcaption>
      MCP standardized the connection. It did not decide which tools were safe,
      useful, or appropriate for the case.
    </figcaption>
  </figure>
);

const DeepAgentsBlogPost = () => {
  useEffect(() => {
    document.title = 'I Gave the Agent a Harness | Jaehyeok Choi';
  }, []);

  return (
    <main className="article-page">
      <article className="blog-article">
        <header className="article-hero">
          <Link className="article-back" to="/blog">
            <ArrowBackIcon fontSize="small" /> Back to Blog
          </Link>

          <div className="article-brand">
            <div className="article-brand__mark" aria-hidden="true">DA</div>
            <span>Agent architecture · field notes</span>
          </div>

          <h1>I Gave the Agent a Harness. It Still Needed Boundaries.</h1>
          <p className="article-deck">
            What I learned experimenting with LangChain Deep Agents, specialist
            subagents, and MCP inside a multi-step underwriting workflow.
          </p>
          <div className="article-byline">
            <span>Jaehyeok Choi</span>
            <span>August 2026</span>
            <span>11 min read</span>
          </div>
        </header>

        <div className="article-content">
          <p className="article-lede">
            After building specialist services for Pe’ahi, I found myself with a
            slightly embarrassing problem: the tools worked better than the workflow
            coordinating them.
          </p>

          <p>
            The financial service could resolve a messy company name and retrieve
            evidence. The underwriting services could reason over case information.
            The quotation service could turn validated inputs into a reviewable
            document. Yet a multi-step case could still need a person to remind the
            agent what it was doing, why it had called a tool, or which task came next.
          </p>

          <p>
            So I tried a different abstraction: a LangChain Deep Agents harness with
            specialized financial and underwriting subagents, connected to domain
            capabilities through the Model Context Protocol, or MCP. The goal was not
            to create a tiny digital insurance company. It was to reduce the coordination
            tax around work the services already knew how to perform.
          </p>

          <div className="article-note">
            This article describes my own internship experiment. The examples and diagrams
            are intentionally simplified, and no customer data, proprietary rules, or internal
            system identifiers are included. The 28 percent result refers to the multi-step
            case workflows we evaluated, not a published measure of production business impact.
          </div>

          <section>
            <h2>A harness is not a smarter model</h2>
            <p>
              An agent harness is the machinery around the model loop. It gives the model a
              way to plan, use tools, keep track of context, delegate work, recover state, and
              decide when it is finished. LangChain’s{' '}
              <a
                href="https://docs.langchain.com/oss/python/deepagents/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deep Agents
              </a>{' '}
              packages many of those ideas into an opinionated layer on top of LangGraph.
            </p>
            <p>
              That distinction mattered. Swapping in a harness did not give the model new
              underwriting judgment. It gave the model a workbench: a task list, delegation
              mechanics, context-management patterns, and a clearer route to approved tools.
              The model was still probabilistic. The surrounding workflow became less casual.
            </p>

            <HarnessDiagram />

            <p>
              The supervisor handled the case-level objective. It could break the request into
              smaller tasks, send focused work to a specialist, and combine the returned evidence.
              Each specialist had a narrower prompt, a smaller tool surface, and a clearer output
              contract. The underwriter still owned the consequential decision at the end.
            </p>
          </section>

          <section>
            <h2>A subagent is a context boundary, not a job title</h2>
            <p>
              My first instinct was to think about subagents in organizational terms: one agent
              for finance, one for underwriting, perhaps another agent to supervise the agents.
              This gets silly surprisingly quickly. A diagram can acquire a management hierarchy
              before the code has acquired a reliable test.
            </p>
            <p>
              The more useful mental model was context isolation. The financial subagent did not
              need every policy clause in the main case. It needed the company identity signals,
              the research objective, approved financial tools, and a structured way to return
              evidence. The underwriting subagent needed the relevant risk context and domain
              instructions, not a transcript of every retrieval attempt made upstream.
            </p>
            <p>
              Delegation helped when it removed irrelevant context from the specialist’s view and
              returned a compact result to the supervisor. It hurt when the task was vague, two
              subagents had overlapping responsibilities, or the supervisor had to spend more
              tokens explaining the task than doing it. A subagent with no distinct instructions,
              context, or tools is just the same model wearing a different lanyard.
            </p>
            <p>
              This is why I kept the initial harness small. Financial analysis and underwriting
              represented genuinely different contexts and tool permissions. The boundary was
              doing engineering work, not merely making the architecture diagram look more agentic.
            </p>
          </section>

          <section>
            <h2>MCP gave the tools a shared front door</h2>
            <p>
              Tool calling itself was not new. The useful part of MCP was that a capability could
              describe itself through a standard interface instead of requiring a fresh wrapper
              for every agent framework. An MCP host manages clients, each client connects to a
              server, and the server can expose tools, resources, and prompts. The official{' '}
              <a
                href="https://modelcontextprotocol.io/docs/learn/architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                MCP architecture guide
              </a>{' '}
              explains that client-server boundary in more detail.
            </p>

            <MCPDiagram />

            <p>
              In the harness, MCP acted as the adapter between agent reasoning and domain
              execution. The client discovered the tools exposed by configured servers, converted
              their definitions into something the model could call, routed the request, and
              returned the result to the agent. The domain service kept ownership of the actual
              operation.
            </p>
            <p>
              That separation made the system easier to extend. A service could change how it
              retrieved data without rewriting the supervisor. A capability could be reused by
              another compliant host. Tool metadata lived closer to the service that understood
              it. The agent gained a consistent front door instead of a growing collection of
              framework-specific side entrances.
            </p>
          </section>

          <section>
            <h2>The tool description became part of the control plane</h2>
            <p>
              Standardizing a tool does not make it self-explanatory. The model still chooses
              tools from their names, descriptions, and schemas. If two tools sound interchangeable,
              the agent will eventually prove that they are not. If an input field is ambiguous,
              the ambiguity has simply moved from a meeting into JSON.
            </p>
            <p>
              I treated each MCP tool contract as part API design and part instruction design:
            </p>
            <ul className="article-list">
              <li>Names described a specific capability rather than a broad business area.</li>
              <li>Descriptions explained when to use the tool and when not to use it.</li>
              <li>Input schemas made required identifiers, formats, and constraints explicit.</li>
              <li>Results stayed structured and preserved source information where it mattered.</li>
              <li>Timeouts, retries, permissions, and approval rules lived outside model discretion.</li>
            </ul>
            <p>
              MCP standardized how the plug fit. It did not supply the fuse. Authentication,
              authorization, data boundaries, and human approval still belonged to the host and
              the services behind it. The Deep Agents project makes a similar security point:
              enforce boundaries through tools and sandboxes, not by hoping the model remembers
              to police itself.
            </p>
          </section>

          <section>
            <h2>The failures became more interesting</h2>
            <p>
              A single agent can fail in a fairly direct way. A supervised agent with subagents
              and remote tools can fail with much better choreography. The supervisor can delegate
              the wrong task. A specialist can succeed while another times out. An MCP server can
              return a valid response that is useless for the case. A retry can repeat an action
              that was not designed to be idempotent.
            </p>
            <p>
              Those cases made end-to-end tracing essential. I needed to see the supervisor’s
              plan, the delegated task, the subagent trajectory, the selected MCP tool, the tool
              arguments, latency, retries, and the structured result that came back. A final answer
              alone could tell me that the workflow was wrong. It could not tell me where it became
              wrong.
            </p>
            <p>
              The harness also made latency visible in a new way. Delegation creates another model
              call, and tool discovery or remote execution adds more round trips. Parallel work can
              help, but only when the branches are independent. Otherwise, “multi-agent” becomes an
              expensive spelling of “please wait.”
            </p>
          </section>

          <section>
            <h2>What changed in the evaluation</h2>
            <p>
              Across the multi-step case workflows we evaluated, the Deep Agents and MCP harness
              reduced the manual-intervention rate by 28 percent. I did not read that as the agent
              becoming 28 percent wiser. It meant fewer runs needed a person to repair the
              coordination between steps.
            </p>
            <p>
              My interpretation was that clearer decomposition did most of the useful work.
              Specialists received less irrelevant context. The supervisor got structured results
              back. MCP made tool exposure more consistent. When a step failed, the trace made the
              failure easier to locate instead of leaving one long conversation to excavate.
            </p>
            <p>
              The metric also reinforced something I had learned elsewhere in Pe’ahi: useful
              autonomy is not the absence of human involvement. It is the reduction of avoidable
              intervention while preserving the review that actually carries responsibility.
            </p>
          </section>

          <section>
            <h2>What I would do differently next time</h2>
            <ol className="plain-steps">
              <li><strong>Start from context boundaries.</strong> Add a subagent only when it needs distinct instructions, information, or permissions.</li>
              <li><strong>Keep the initial tool surface small.</strong> A model choosing among twelve precise tools is usually happier than one browsing a department store.</li>
              <li><strong>Version MCP contracts like APIs.</strong> Tool descriptions and schemas affect agent behavior, so changes deserve compatibility tests.</li>
              <li><strong>Evaluate trajectories, not just answers.</strong> Routing, unnecessary calls, source use, recovery, and latency reveal problems hidden by a plausible final paragraph.</li>
              <li><strong>Leave predictable work deterministic.</strong> If the next step is already known, a normal workflow does not need to audition for an agent role.</li>
            </ol>
          </section>

          <section className="article-conclusion">
            <h2>The useful part was not the number of agents</h2>
            <p>
              The experiment changed how I think about agent architecture. Deep Agents gave me
              a useful harness for planning, context management, and delegation. MCP gave domain
              tools a portable interface. Neither removed the need for careful schemas, permission
              boundaries, observability, evaluation, or human judgment.
            </p>
            <p>
              That was the real value of the attempt. The system became easier to reason about not
              because it had more agents, but because responsibilities and interfaces became more
              explicit. The model still needed boundaries. At least now it had a decent toolbox
              and knew which specialist to ask.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default DeepAgentsBlogPost;
