import { useState, type ReactNode } from 'react';

type PracticeCardProps = {
  title: string;
  detail: string;
  status: string;
  statusTone: 'active' | 'ready';
  children: ReactNode;
};

const array = [1, 5, 10, 22, 6, 3, 7];
const evenNumbers = array.filter((value) => value % 2 === 0);

function PracticeCard({ title, detail, status, statusTone, children }: PracticeCardProps) {
  return (
    <article className="practice-card">
      <div className="card-heading">
        <div>
          <p className="eyebrow">Exercise</p>
          <h2>{title}</h2>
          <p className="muted">{detail}</p>
        </div>
        <span className={`status ${statusTone}`}>{status}</span>
      </div>
      {children}
    </article>
  );
}

function App() {
  const [target, setTarget] = useState('22');
  const [checkedTarget, setCheckedTarget] = useState<number | null>(null);
  const [showNotes, setShowNotes] = useState(false);

  const targetIndex = array.indexOf(Number(target));

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-mark">LC</span>
          <span>Practice lab</span>
        </a>
        <span className="topbar-note">TypeScript / React</span>
      </header>

      <section className="hero">
        <div>
          <p className="kicker">01 / fundamentals</p>
          <h1>Turn small loops<br />into strong instincts.</h1>
          <p className="hero-copy">A visual workspace for building fluency with the everyday patterns behind great solutions.</p>
        </div>
        <div className="hero-stamp" aria-label="Current practice streak">
          <strong>03</strong>
          <span>sessions<br />logged</span>
        </div>
      </section>

      <section className="workspace" aria-label="Practice exercises">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Today&apos;s board</p>
            <h2>For loops in motion</h2>
          </div>
          <button className="notes-toggle" onClick={() => setShowNotes((visible) => !visible)}>
            {showNotes ? 'Hide notes' : 'Show notes'}
          </button>
        </div>

        {showNotes && (
          <aside className="note-panel">
            <span className="note-pin">i</span>
            <p>Start with the invariant: what should be true after every pass through the loop?</p>
          </aside>
        )}

        <div className="card-grid">
          <PracticeCard title="Find an index" detail="Return the position of a target, or -1 when it is absent." status="Ready" statusTone="ready">
            <div className="array-row" aria-label="Array values">
              {array.map((value, index) => (
                <span className={value === Number(target) ? 'array-value selected' : 'array-value'} key={`${value}-${index}`}>
                  {value}
                </span>
              ))}
            </div>
            <div className="control-row">
              <label htmlFor="target">Target value</label>
              <input id="target" type="number" value={target} onChange={(event) => setTarget(event.target.value)} />
              <button className="primary-button" onClick={() => setCheckedTarget(Number(target))}>Check index</button>
            </div>
            {checkedTarget !== null && <p className="result">{targetIndex === -1 ? 'Not found' : `Found at index ${targetIndex}`}</p>}
          </PracticeCard>

          <PracticeCard title="Filter the evens" detail="Walk an array and keep values divisible by two." status="Complete" statusTone="active">
            <div className="result-block">
              <span className="result-label">Input</span>
              <div className="number-list">{array.map((value) => <span key={value}>{value}</span>)}</div>
            </div>
            <div className="result-block accent-block">
              <span className="result-label">Even numbers</span>
              <div className="number-list strong-list">{evenNumbers.map((value) => <span key={value}>{value}</span>)}</div>
            </div>
          </PracticeCard>
        </div>
      </section>

      <footer className="footer">
        <span>Keep going, one pass at a time.</span>
        <span>LeetCode / Siva</span>
      </footer>
    </main>
  );
}

export default App;
