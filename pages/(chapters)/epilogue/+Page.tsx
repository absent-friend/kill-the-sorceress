import Chapter from "../../../components/Chapter";

export default function Page() {
  return (
    <Chapter title="Epilogue" previous="chapter4" next="appendix-god-sorc">
      <p>
        That's the end of the fight! Congrats on making it to this point.
      </p>
      <p>
        This segment is often called "frustratingly random", but what separates the average segment 
        times of different players isn't randomness — it's knowledge and practice. This document 
        provides the first of those.
      </p>
      <p>
        The next chapter is optional; it covers a niche strategy for the second phase of the fight
        that trades consistency for potential timesave. Read on if you're curious.
      </p>
    </Chapter>
  )
}